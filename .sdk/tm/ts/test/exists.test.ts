
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MemesioContentCreationSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MemesioContentCreationSDK.test()
    equal(testsdk instanceof MemesioContentCreationSDK, true,
      'MemesioContentCreationSDK.test() must return a client synchronously')
  })

})
