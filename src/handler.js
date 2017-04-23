import apiAI from './apiAI'
import places from './places'
import templates from './templates'
import { isLocationMessage, getCoordinates } from './helpers'

const DEFAULT_MESSAGE = 'I am not the kind of conversational bot. Use the menu to interact with me :)'

export const handleAPIAI = (res) => {
  if (res) {
    if (res.result.action === 'hungry') {
      return templates.shareLocation()
    }
    return DEFAULT_MESSAGE
  }
  return 'I don\'t understand, sorry...'
}

export default (request) => {
  const { text, sender, postback, originalRequest } = request
  console.log('[Request received]:', JSON.stringify(request))

  if (text && !postback) {
    console.log('[Entering API.AI Flow]')

    return apiAI.query(text, sender).then(handleAPIAI)
  }

  if (!text) {
    console.log('[Entering Location Flow]')

    if (isLocationMessage(originalRequest)) {
      console.log('[Entered in location message]', request)
      const { lat, long } = getCoordinates(originalRequest)

      return places.nearbySearch({lat, long}).then(res => {
        console.log('[Places found]', JSON.stringify(res.results, null, 2))

        if (res.results && res.results.length > 0) {
          return [
            'Ok this are the places I found 👇',
            templates.placesOptions({
              places: res.results, 
              coordinates: { lat, long }
            })
          ]
        }

        return [
          'Sorry I couldn\'t find places around you open now...',
          templates.nothingAround(),
        ]
      })
    }
  }

  if (postback) {
    const { payload, action } = JSON.parse(text)

    if (action === 'SEARCH') {
      return templates.shareLocation()
    }

    if (action === 'GET_STARTED') {
      return [
        'Welcome! I will help you to find nearby places to eat. All the places I list here are open accordingly to Google Maps.',
        templates.shareLocation()
      ]
    }

    return places.details(payload.place_id).then(res => {
      console.log('[Place Details]', res)
      return templates.direction(res.result)
    })
  }

  return DEFAULT_MESSAGE
}
