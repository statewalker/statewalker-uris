import concatPath from "../src/concatPath.js";
console.log(concatPath('http://foo.bar/a/b/', '/my/path.txt'))
// 'http://foo.bar/a/b/my/path.txt'

console.log(concatPath('http://foo.bar/a/b/', 'ftp://foo.bar/my/path.txt'))
// 'http://foo.bar/a/b/my/path.txt'

console.log(concatPath('http://foo.bar/a/b/', '../hello/../world/path.txt'))
// 'http://foo.bar/a/b/../hello/../world/path.txt'