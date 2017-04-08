import { assert } from 'chai'
import { query } from '../src/apiAI'

const SESSION_ID = '123456_test'

describe('API.AI Tests', function() {
  it ('Should get \'hungry\' action when the user types \'food\'' , done => {
    query('food', SESSION_ID)
    .then(res => {
      assert.equal('hungry', res.result.action)
      done()
    })
    .catch(err => {
      done(err)
    })
  })
  it ('Should get \'hungry\' action when the user types \'hungry\'' , done => {
    query('hungry', SESSION_ID)
    .then(res => {
      assert.equal('hungry', res.result.action)
      done()
    })
    .catch(err => {
      done(err)
    })
  })
  it ('Should get \'hungry\' action when the user types \'I want food\'' , done => {
    query('I want food', SESSION_ID)
    .then(res => {
      assert.equal('hungry', res.result.action)
      done()
    })
    .catch(err => {
      done(err)
    })
  })
  it ('Should get \'hungry\' action when the user types \'Show me places\'' , done => {
    query('Show me places', SESSION_ID)
    .then(res => {
      assert.equal('hungry', res.result.action)
      done()
    })
    .catch(err => {
      done(err)
    })
  })
})
