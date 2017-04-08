import apiAI from './apiAI'
import places from './places'
import templates from './templates'

import { isLocationMessage, getCoordinates } from './helpers'

const sessions = {}

export const handleAPIAI = (res) => {
  if (res) {
    if (res.result.action === 'hungry') {
      return templates.shareLocation()
    }
    return 'I don\'t understand...'
  }
  return 'I don\'t understand, sorry...'
}

export const handlePlacesSearch = (res) => {
  console.log('Google Places Response', res)

  if (res.results.length > 0) {
    const placesOptions = templates.placesOptions(res.results)

    return [
      'I found some places around you!',
      placesOptions,
    ]
  }

  return 'Sorry there\'s no places around you...'
}

export default (request) => {
  const { text, sender, postback, originalRequest } = request
  console.log('[Request received]:', JSON.stringify(request))

  if (text && !postback) {
    console.log('[Entering API.AI Flow]')
    sessions[sender] = {}

    return apiAI.query(text, sender).then(handleAPIAI)
  }

  if (!text) {
    console.log('[Entering Location Flow]')

    if (isLocationMessage(originalRequest)) {
      console.log('[Entered in location message]', request)
      const { lat, long } = getCoordinates(originalRequest)

      return places.nearbySearch({lat, long}).then(res => {
        sessions[sender].page = 0

        return [
          'Ok this is the places I found 👇',
          templates.placesOptions(res.results)
        ]
      })
    }
  }

  if (postback) {
    const { payload } = JSON.parse(text)
    return places.details(payload.place_id).then(res => {
      console.log('[Place Details]', res)
      return templates.direction(res.result)
    })
  }

  return 'I dont know what to do...'
}
