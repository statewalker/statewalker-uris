export default [
  {
    message: 'should make relative between two absolute paths - 1',
    input: ['/abc.md', '/cde.md'],
    control: {
      schema: '',
      domain: '',
      path: './cde.md',
      query: {},
      fragment : ''
    }
  },
  {
    message: 'should make relative between two absolute paths - 2',
    input: ['/abc.md', '/efg/cde.md'],
    control: {
      schema: '',
      domain: '',
      path: './efg/cde.md',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should make relative between two absolute paths - 3',
    input: ['/a/b/c/d/e/f/hello.md', '/g/h/world.md'],
    control: {
      schema: '',
      domain: '',
      path: '../../../../../../g/h/world.md',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should make relative between two absolute paths - 3',
    input: ['/a/b/c/d/e/f/hello.md', '/a/b/c/g/h/world.md'],
    control: {
      schema: '',
      domain: '',
      path: '../../../g/h/world.md',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should make relative between two absolute URIs - 1',
    input: ['http://foo/bar/abc.md', 'http://foo/bar/cde.md'],
    control: {
      schema: '',
      domain: '',
      path: './cde.md',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should make relative between two absolute paths - 2',
    input: ['http://foo/bar/abc.md', 'http://foo/bar/efg/cde.md'],
    control: {
      schema: '',
      domain: '',
      path: './efg/cde.md',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should make relative between two absolute paths - 3',
    input: ['http://foo/bar/a/b/c/d/e/f/hello.md', 'http://foo/bar/g/h/world.md'],
    control: {
      schema: '',
      domain: '',
      path: '../../../../../../g/h/world.md',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should make relative between two absolute paths - 3',
    input: ['/a/b/c/d/e/f/hello.md', '/a/b/c/g/h/world.md'],
    control: {
      schema: '',
      domain: '',
      path: '../../../g/h/world.md',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should make relative between two absolute paths with queries',
    input: ['/a/b/c/d/e/f/hello.md', '/a/b/c/g/h/world.md?a=b&c=d'],
    control: {
      schema: '',
      domain: '',
      path: '../../../g/h/world.md',
      query: { a: 'b', c: 'd' },
      fragment: ''
    }
  },
  {
    message: 'should make relative between two relative paths',
    input: ['./abc.md', './cde.md'],
    control: {
      schema: '',
      domain: '',
      path: './cde.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should keep absolute uris with different domains',
    input: ['http://foo.com/abc.md', 'http://bar.com/cde.md'],
    control: {
      schema: 'http',
      domain: 'bar.com',
      path: '/cde.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should keep absolute uris with different schema',
    input: ['http://bar.com/abc.md', 'https://bar.com/cde.md'],
    control: {
      schema: 'https',
      domain: 'bar.com',
      path: '/cde.md',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should create relative paths from two absolute URIs - 1',
    input: ['file:///tmp/abc/foobar.md', 'file:///tmp/blah-blah.md'],
    control: {
      schema: '',
      domain: '',
      path: '../blah-blah.md',
      query: {},
      fragment: ''
    }
  },
  {
    message: 'should create relative paths from two absolute URIs - 2',
    input: ['file:///tmp/blah-blah.md', 'file:///tmp/abc/foobar.md'],
    control: {
      schema: '',
      domain: '',
      path: './abc/foobar.md',
      query: {},
      fragment: ''
    }
  },

]