export const isLocationMessage = (originalRequest) => {
  return !!(originalRequest &&
      originalRequest.message &&
      originalRequest.message.attachments &&
      originalRequest.message.attachments[0].type === 'location')
}

export const getCoordinates = (originalRequest) => {
  if (!isLocationMessage(originalRequest)) {
    console.log('Invalid message to get location', JSON.stringify(originalRequest))
    return null
  }

  return originalRequest.message.attachments[0].payload.coordinates
}
