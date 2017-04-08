import { assert } from 'chai'
import templates from '../src/templates'
import { handleAPIAI } from '../src/handler'

describe('Handler Tests', () => {
  it('Should return \'shareLocation\' template when action is \'hungry\'', () => {
    const messageTemplate = handleAPIAI({
      result: {
        action: 'hungry'
      }
    })

    assert.deepEqual(messageTemplate, templates.shareLocation())
  })
})
