import { default as expect } from 'expect.js';
import makeRelative from '../src/makeRelative.js';
import tests from './makeRelativeTest.data.js'

describe('makeRelative', () => {

  for (const test of tests) {
    it(test.message, () => {
      for (const [source, control] of test.list) {
        const result = makeRelative(test.baseUrl, source);
        expect(result).to.eql(control);
      }
    })
  }
})
