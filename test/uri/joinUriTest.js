import { default as expect } from 'expect.js';
import * as uri from '../../src/uri.js';
import tests from './joinUriTest.data.js'

describe('joinUri', () => {
  for (const test of tests) {
    it(`${test.message}`, () => {
      let { input, control } = test;
      input = input.map(uri.parseUri);
      const result = uri.joinUri(...input);
      expect(result).to.eql(control);
    })
  }
})
