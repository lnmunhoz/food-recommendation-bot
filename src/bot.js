/* globals module */
import botBuilder from 'claudia-bot-builder'
import handler from './handler'

module.exports = botBuilder(handler, { platforms: ['facebook'] })
