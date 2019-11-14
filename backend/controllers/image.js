const cheerio = require('cheerio');
const axios = require('axios');

exports.getImages = async (req, res, next) => {
  const { link } = req.body;

  axios.get(link).then((body) => {
    const $ = cheerio.load(body.data)
    let str = '';
    $('script').each((index, elem) => {
      let tmp = $(elem).html();
      if (tmp.substring(0, 18) === 'window._sharedData') {
        str = tmp
        str = str.substring(21, str.length - 1)
      }
    })

    let object = JSON.parse(str)
                  .entry_data
                  .PostPage[0]
                  .graphql
                  .shortcode_media

    let ret = { 
      imgLinks: [{
        imgLink: object.display_url,
        no: 0
      }],
      message: 'success'
    }

    try {
      object = object.edge_sidecar_to_children.edges
      
      for (let i = 1; i < object.length; i++) {
        ret.imgLinks.push({
          imgLink: object[i].node.display_url,
          no: i
        })
      }
    } catch (err) {

    }

    res.json(ret)
  }).catch((err) => {
    res.json({
      imgLinks: [],
      message: err.toString()
    })
  })
} 