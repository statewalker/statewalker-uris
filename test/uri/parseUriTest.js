import { default as expect } from 'expect.js';
import * as uri from '../../src/uri.js';
import tests from './parseUriTest.data.js'

const method = 'parseUri';
describe(method, () => {
  for (const test of tests) {
    it(`${test.message}`, () => {
      let { input, control } = test;
      const result = uri[method](...input);
      expect(result).to.eql(control);
    })
  }
})
