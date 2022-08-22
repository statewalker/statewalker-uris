import { default as expect } from 'expect.js';
import * as uri from '../../src/uri.js';
import tests from './serializeUriTest.data.js'

describe('serializeUri', () => {
  for (const test of tests) {
    it(`${test.message}`, () => {
      let { input, control } = test;
      input = input.map(uri.parseUri);
      const result = uri.serializeUri(...input);
      expect(result).to.eql(control);
    })
  }
})
