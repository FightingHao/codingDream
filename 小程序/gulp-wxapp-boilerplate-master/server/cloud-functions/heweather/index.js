const API_URL = 'https://free-api.heweather.com/s6/weather'
const request = require('request')

const $ = require('../../inline/utils')
exports.main = async (event) => {
  const { lat, lon } = event
  let location = `${lat},${lon}`
  let params = {
    location,
    t: Math.floor(Date.now() / 1e3),
    unit: 'm'
  }
  // 天气还要sign
  params.sign = $.generateSignature(params);
  let query = []
  for (let i in params) {
    query.push(`${i}=${encodeURIComponent(params[i])}`)
  }
  let url = API_URL + '?' + query.join('&')
  console.log(url)
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        reject(error)
      } else {
        // console.log(JSON.parse(body));
        resolve(JSON.parse(body));
      }
    })
  })
}
