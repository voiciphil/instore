const cheerio = require('cheerio');
const axios = require('axios');

exports.getImages = async (req, res) => {
  const { link } = req.body;

  try {
    const body = await axios.get(link);
    const $ = cheerio.load(body.data);

    let str = '';
    $('script').each((index, elem) => {
      const tmp = $(elem).html();
      if (tmp.substring(0, 18) === 'window._sharedData') {
        str = tmp.substring(21, tmp.length - 1);
      }
    });

    let object = JSON.parse(str).entry_data.PostPage[0].graphql.shortcode_media;

    const ret1 = {
      imgLinks: [{
        imgLink: object.display_url,
        isVideo: object.is_video,
        videoLink: '',
      }],
      message: 'success',
    };

    if (object.is_video) {
      ret1.imgLinks[0].videoLink = object.video_url;
    }

    try {
      object = object.edge_sidecar_to_children.edges;

      const ret2 = {
        imgLinks: [],
        message: 'success',
      };

      for (let i = 0; i < object.length; i += 1) {
        const item = {
          imgLink: object[i].node.display_url,
          isVideo: object[i].node.is_video,
          videoLink: '',
        };
        if (object[i].node.is_video) {
          item.videoLink = object[i].node.video_url;
        }
        ret2.imgLinks.push(item);
      }

      res.json(ret2);
    } catch (err) {
      res.json(ret1);
    }
  } catch (err) {
    res.json({
      imgLinks: [],
      message: err.toString(),
    });
  }
};
