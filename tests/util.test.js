import { assert } from 'chai'
import templates from '../src/templates'
import { getDistanceFromLatLonInKm } from '../src/util'

describe('Util Tests', () => {
  it('Should return distance between two coordinates', () => {
    const distance = getDistanceFromLatLonInKm( 99.036286321677, 7.603949664285,99.03640750000001, 7.604379299999999)
    assert.isNumber(distance);
  })
})
