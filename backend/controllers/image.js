const cheerio = require('cheerio')
const axios = require('axios')

exports.getImages = async (req, res, next) => {
  const { link } = req.body

  axios.get(link).then((body) => {
    const $ = cheerio.load(body.data)
    let str = ''
    $('script').each((index, elem) => {
      let tmp = $(elem).html()
      if (tmp.substring(0, 18) === 'window._sharedData') {
        str = tmp.substring(21, tmp.length - 1)
      }
    })

    let object = JSON.parse(str)
                  .entry_data
                  .PostPage[0]
                  .graphql
                  .shortcode_media

    let ret = { 
      imgLinks: [object.display_url],
      message: 'success'
    }

    try {
      object = object.edge_sidecar_to_children.edges
      
      for (let i = 1; i < object.length; i++) {
        ret.imgLinks.push(object[i].node.display_url)
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