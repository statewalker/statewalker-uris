import { default as expect } from 'expect.js';
import resolveUrl from '../src/resolveUrl.js';
import tests from './resolveUrlTest.data.js'

describe('resolveUrl', () => {

  for (const test of tests) {
    it(test.message, () => {
      for (const [source, control] of test.list) {
        const result = resolveUrl(test.baseUrl, source);
        expect(result).to.eql(control);
      }
    })
  }
})
