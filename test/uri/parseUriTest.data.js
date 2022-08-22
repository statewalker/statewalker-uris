export default [
  {
    message: 'should parse emails',
    input: ['mailto:foo@bar.baz'],
    control: {
      schema: 'mailto',
      domain: '',
      path: 'foo@bar.baz',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should parse simple paths',
    input: ['my/path.txt'],
    control: {
      schema: '',
      domain: '',
      path: 'my/path.txt',
      query: {},
      fragment: ''
    }
  },

  {
    message: 'should parse empty URLs',
    input: [''],
    control: {
      schema: '',
      domain: '',
      path: '',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should parse simple URLs without domains',
    input: ['http://'],
    control: {
      schema: 'http',
      domain: '',
      path: '',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should parse simple URLs schema without domains nor paths',
    input: ['//'],
    control: {
      schema: '',
      domain: '',
      path: '',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should parse simple URLs schema with empty path',
    input: ['///'],
    control: {
      schema: '',
      domain: '',
      path: '/',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should parse uris with domain',
    input: ['//domain'],
    control: {
      schema: '',
      domain: 'domain',
      path: '',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should parse uris with domains with dots',
    input: ['//foo.bar.baz'],
    control: {
      schema: '',
      domain: 'foo.bar.baz',
      path: '',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should parse relative paths - 1',
    input: ['./'],
    control: {
      schema: '',
      domain: '',
      path: './',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should parse relative paths - 2',
    input: ['../my/path'],
    control: {
      schema: '',
      domain: '',
      path: '../my/path',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should parse relative paths - 3',
    input: ['my/path'],
    control: {
      schema: '',
      domain: '',
      path: 'my/path',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should parse absolute paths',
    input: ['/my/path'],
    control: {
      schema: '',
      domain: '',
      path: '/my/path',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should parse simple URLs schema',
    input: ['//foobar/'],
    control: {
      schema: '',
      domain: 'foobar',
      path: '/',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should parse simple URLs',
    input: ['http://www.foo.bar/'],
    control: {
      schema: 'http',
      domain: 'www.foo.bar',
      path: '/',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should parse uris with queries',
    input: ['?a=b'],
    control: {
      schema: '',
      domain: '',
      path: '',
      query: { a: 'b' },
      fragment: ''
    }
  },
  {
    message: 'should parse empty paths and queries',
    input: ['.?a=b'],
    control: {
      schema: '',
      domain: '',
      path: '.',
      query: { a: 'b' },
      fragment: ''
    }
  },
  {
    message: 'should parse uris with paths and queries',
    input: ['./my/path?a=b'],
    control: {
      schema: '',
      domain: '',
      path: './my/path',
      query: { a: 'b' },
      fragment: ''
    }
  },
  {
    message: 'should parse uris with multiple query parameters',
    input: ['./my/path?a=b&a=c&a=d'],
    control: {
      schema: '',
      domain: '',
      path: './my/path',
      query: { a: ['b', 'c', 'd'] },
      fragment : ''
    }
  },
  {
    message : 'should parse full uris',
    input : ['http://foo.bar/a/b/?a=b&c=d#foobar?bar=baz&a=b#c'],
    control : {
      schema: "http",
      domain: "foo.bar",
      path: "/a/b/",
      query: { a: "b", c: "d" },
      fragment: "#foobar?bar=baz&a=b#c"
  }
  }
]