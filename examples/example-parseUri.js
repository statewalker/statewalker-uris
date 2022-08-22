import { parseUri } from "../src/index.js";

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
  