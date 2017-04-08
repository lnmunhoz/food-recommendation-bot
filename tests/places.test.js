/* globals it describe */
import { nearbySearch } from '../src/places'
import { assert } from 'chai'

describe('Places Test', () => {
  it('Should return some restaurants around', done => {
    nearbySearch({lat: 7.603918, long: 99.036253})
    .then(res => {

      assert.notEqual(res.results.length, 0)
      done()
    })
    .catch(err => {
      done(err)
    })
  })
})
