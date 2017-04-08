import request from 'request'

const APIAI_BASE_URL = 'https://api.api.ai/v1'
const APIAI_ACCESS_TOKEN = process.env.APIAI_ACCESS_TOKEN

export const query = (text, sessionId) => new Promise((resolve, reject) => {
  request({
    url: `${APIAI_BASE_URL}/query`,
    qs: {
      query: text,
      sessionId,
      lang: 'en'
    },
    headers: {
      'Authorization': `Bearer ${APIAI_ACCESS_TOKEN}`
    }
  }, (err, res) => {
    if (err) return reject(err)

    return resolve(JSON.parse(res.body))
  })
})

export default {
  query
}
