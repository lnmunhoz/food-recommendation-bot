import { fbTemplate } from 'claudia-bot-builder'

const GOOGLE_PLACES_KEY = process.env.GOOGLE_PLACES_KEY

export const shareLocation = () => new fbTemplate
  .Text('Ok, share your location with me.')
  .addQuickReplyLocation()
  .get()

export const placesOptions = (places) => {
  const genericTemplate = new fbTemplate.Generic()
  const firstResults = places.slice(0, 10)

  firstResults.forEach(result => {
    const rating = '⭐'.repeat(result.rating)

    genericTemplate.addBubble(`${result.name} - ${rating}`)

    if (result.photos) {
      genericTemplate.addImage(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.photos[0].photo_reference}&key=${GOOGLE_PLACES_KEY}`)
    }

    genericTemplate.addButton('Get Directions', JSON.stringify({
      action: 'GET_DIRECTIONS',
      payload: {
        place_id: result.place_id
      }
    }))
  })

  return genericTemplate.get()
}

export const direction = (place) => {
  return new fbTemplate.Generic()
  .addBubble('Enjoy your meal 🍔')
  .addButton('Go to Google Maps', place.url)
  .get()
}

export const nothingAround = () => {
  return new fbTemplate.Image('https://media.giphy.com/media/xme2XN3AzQOEU/giphy.gif')
  .get()
}

export default {
  shareLocation,
  direction,
  placesOptions,
  nothingAround,
}
