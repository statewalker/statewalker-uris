import { default as expect } from 'expect.js';
import newPathMapping from '../src/newPathMapping.js';
import tests from './newPathMappingTest.data.js'

describe('newPathMapping', () => {

  for (const test of tests) {
    it(test.message, () => {
      const mapping = newPathMapping(test.mapping);
      expect(typeof mapping).to.be('function');
      for (const [path, control] of test.uris) {
        const result = mapping(path);
        // console.log(JSON.stringify(path, null, 2));
        expect(result).to.eql(control);
      }
    })
  }
})
