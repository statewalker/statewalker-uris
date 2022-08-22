import makeRelative from "../src/makeRelative.js";

console.log(makeRelative('http://foo.bar/a/b/index.md', 'http://foo.bar/a/c/d/readme.md'))
// '../c/d/readme.md'
