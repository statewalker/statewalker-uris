
# @statewalker/uris: URIs Management Utilities

A small library (3.5K compressed/minimized) to manage URIs - parsing, serialization,
path resolving, relative paths generation, concatenation and URIs rewriting.

## `concatPath(...uris)`

Concatenates URI paths and returns the result. The given uris can be objects or strings.
The resulting object is a string.

Example: 
```javascript
import { concatPath } from '@statewalker/uris';
console.log(concatPath('http://foo.bar/a/b/', '/my/path.txt'))
// 'http://foo.bar/a/b/my/path.txt'
```

## `resolveUrl(...uris)`

Resolves URLs one after another starting from the first one and returns the string-serialized resulting URI.

Example: 
```javascript
import { resolveUrl } from '@statewalker/uris';
console.log(resolveUrl('http://foo.bar/a/b/', '../doc/', './my/path.txt'))
// 'http://foo.bar/a/doc/my/path.txt'
```


## `makeRelative(first, second)`

Returns the relative paths from the first URI to the second one.

Example: 
```javascript
import { makeRelative } from '@statewalker/uris';
console.log(makeRelative('http://foo.bar/a/b/index.md', 'http://foo.bar/a/c/d/readme.md'))
// '../c/d/readme.md'
```


## `newPathMapping`

This method returns a function rewriting URIs.
The parameter of this method defines source base URIs with the corresponding target paths. 
The returned function transforms URIs to the corresponding expanded paths.

Example: 
```javascript
import { newPathMapping } from '@statewalker/uris';

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

```

## `parseUri(uri)`

Parses the given string and returns the corresponding object with the following fields:
- schema: ex: "https", "ftp", "mailto"
- domain: "foobar.com"
- path: "/path/to/my/file.txt"
- query: { "a" : "B" }
- fragment: "hello"


Example: 
```javascript
import { parseUri } from '@statewalker/uris';

console.log(parseUri('http://foo.bar/a/b/?a=b&c=d#foobar'))
/*
{
    schema: "http",
    domain: "foo.bar",
    path: "/a/b/",
    query: { a: "b", c: "d" },
    fragment: "#foobar"
}
*/
```

## `serializeUri(uri)`

Serializes the given URI and returns the corresponding string representation.

## `parseQuery(query)`

Parses the URI query and returns the corresponding object representation with key/value pairs.


## `serializeQuery(query)`

Serializes the URI query and returns the corresponding string.


## `newUri(...list)`

Creates a new URI from the list of the given URI objects. The returned result contains paths and fragments of the latest URI in the list. 
If the specified list contains only one URI then this method returns its copy.
   
  
## `resolveUri(from, to)`

Resolves the second URI and returns 
  
## `makeRelativeUri(from, to)`

Creates and returns a relative links from the initial URI to the target
  
  
## `joinUri(...uris)`

Joins URIs objects and returns resulting object with paths concatanated



## License

[MIT](https://choosealicense.com/licenses/mit/)

