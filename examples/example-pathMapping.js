import newPathMapping from "../src/newPathMapping.js";

// Rewriting rules:
const transform = newPathMapping([
    { source: './sources/', target: '/' },
    { source: 'file:///tmp/data/', target: '/toto/' },
    { source: 'http://www.foo.bar/tech/', target: '/docs/' },
    { source: 'http://www.foo.bar/assets/img/', target: '/images/' }
]);

console.log(transform('./sources/index.md')); 
// '/index.md'

console.log(transform('http://www.foo.bar/tech/readme.md'));
// '/docs/readme.md'

console.log(transform('http://www.foo.bar/assets/img/MyImage.jpg'));
// '/images/MyImage.jpg'

console.log(transform('file:///tmp/data/products/prices.md'));
// '/toto/products/prices.md'
