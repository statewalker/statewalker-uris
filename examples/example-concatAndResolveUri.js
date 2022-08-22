import { concatPath, resolveUrl } from "../src/index.js";


console.log(resolveUrl(concatPath('http://foo.bar/a/b/', '../hello/../world/path.txt')))
// 'http://foo.bar/a/b/../hello/../world/path.txt'

