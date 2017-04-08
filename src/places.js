import request from 'request'

const API_BASE_URL = 'https://maps.googleapis.com/maps/api/place'
const GOOGLE_PLACES_KEY = process.env.GOOGLE_PLACES_KEY

export const nearbySearch = ({
  lat,
  long,
  opennow = true,
  type = 'restaurant'
}) => new Promise((resolve, reject) => {
  request({
    url: `${API_BASE_URL}/nearbysearch/json`,
    qs: {
      key: GOOGLE_PLACES_KEY,
      location: `${lat},${long}`,
      rankby: 'distance',
      opennow,
      type,
    }
  }, (err, res) => {
    if (err) return reject(err)

    return resolve(JSON.parse(res.body))
  })
})

export const details = (
  place_id
) => new Promise((resolve, reject) => {
  request({
    url: `${API_BASE_URL}/details/json`,
    qs: {
      key: GOOGLE_PLACES_KEY,
      placeid: place_id
    }
  }, (err, res) => {
    if (err) return reject(err)

    return resolve(JSON.parse(res.body))
  })
})

export default {
  nearbySearch,
  details
}
