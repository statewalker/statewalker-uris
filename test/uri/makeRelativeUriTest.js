import { default as expect } from 'expect.js';
import * as uri from '../../src/uri.js';
import tests from './makeRelativeUriTest.data.js'

describe('makeRelativeUri', () => {
  for (const test of tests) {
    it(`${test.message}`, () => {
      let { input, control } = test;
      input = input.map(uri.parseUri);
      const result = uri.makeRelativeUri(...input);
      // console.log('XX', input, result)
      expect(result).to.eql(control);
    })
  }
})
