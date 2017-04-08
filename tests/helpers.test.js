import { isLocationMessage } from '../src/helpers'
import { assert } from 'chai'

const originalRequest = {
  'sender': {
    'id': '1396042300456619'
  },
  'recipient': {
    'id': '1324686944279841'
  },
  'timestamp': 1491310771283,
  'message': {
    'mid': 'mid.$cAATuOCRjWHdhalHEU1bOQx3zrcag',
    'seq': 247289,
    'attachments': [
      {
        'title': 'Lucas\'s Location',
        'url': 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.bing.com%2Fmaps%2Fdefault.aspx%3Fv%3D2%26pc%3DFACEBK%26mid%3D8100%26where1%3D7.6039535%252C%2B99.0362339%26FORM%3DFBKPL1%26mkt%3Den-US&h=ATPm5i8L3rAiS8pdAIGxYRqcl6eeB7216bYuNdG4nv2Ckiu5kcLfbywWiR2NthqtLfhirCHGw-UTLEd_inId8gSlMQiDEHFYlMlYd4u8ofxx&s=1&enc=AZPVNGydp7a1NjNXWavBGvQN-2EueDxuUPgpsZ2peZraxt1B1uM_0BY0-pu6b8bsb2BUg_lZ9ua0_zp0CvNGPWW4',
        'type': 'location',
        'payload': {
          'coordinates': {
            'lat': 7.6039535,
            'long': 99.0362339
          }
        }
      }
    ]
  }
}

describe('Helpers Tests', () => {
  it('Check if is location messsage', () => {
    const result = isLocationMessage(originalRequest)
    assert.isTrue(result)
  })
})
