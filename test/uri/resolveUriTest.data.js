export default [
  {
    message: 'should resolve two relative URLs',
    input: ['./abc/cde.md', './foobar.md'],
    control: {
      schema: '',
      domain: '',
      path: './abc/foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve absolute and relative URLs',
    input: ['/abc/cde.md', './foobar.md'],
    control: {
      schema: '',
      domain: '',
      path: '/abc/foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve to an absolute URL - 1',
    input: ['/abc/cde.md', '/foobar.md'],
    control: {
      schema: '',
      domain: '',
      path: '/foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve to an absolute URL - 2',
    input: ['./abc/cde.md', '/foobar.md'],
    control: {
      schema: '',
      domain: '',
      path: '/foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve two relative paths - 1',
    input: ['./abc/cde.md', '../foobar.md'],
    control: {
      schema: '',
      domain: '',
      path: './foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve two relative paths - 2',
    input: ['./abc/cde.md', './foobar.md'],
    control: {
      schema: '',
      domain: '',
      path: './abc/foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve two relative paths - 3',
    input: ['./abc/cde.md', './efg/foobar.md'],
    control: {
      schema: '',
      domain: '',
      path: './abc/efg/foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve two relative paths - 4',
    input: ['./abc/cde.md', '../../../efg/foobar.md'],
    control: {
      schema: '',
      domain: '',
      path: '/efg/foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve absolute and a relative path - 1',
    input: ['/abc/cde.md', '../../../efg/foobar.md'],
    control: {
      schema: '',
      domain: '',
      path: '/efg/foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve absolute and a relative path - 2',
    input: ['/abc/cde.md', '../efg/foobar.md'],
    control: {
      schema: '',
      domain: '',
      path: '/efg/foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve two absolute paths',
    input: ['/abc/cde.md', '/efg/foobar.md'],
    control: {
      schema: '',
      domain: '',
      path: '/efg/foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve absolute uris - 1',
    input: ['http://foo.bar/abc/cde.md', './efg/foobar.md'],
    control: {
      schema: 'http',
      domain: 'foo.bar',
      path: '/abc/efg/foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve absolute uris - 2',
    input: ['http://foo.bar/abc/cde.md', 'http://foo.bar/efg/foobar.md'],
    control: {
      schema: 'http',
      domain: 'foo.bar',
      path: '/efg/foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve absolute uris - 3',
    input: ['http://foo.bar/abc/cde.md', 'http://foo.bar/efg/../foobar.md'],
    control: {
      schema: 'http',
      domain: 'foo.bar',
      path: '/foobar.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should resolve absolute uris - 4',
    input: ['http://bar.com/abc/cde.md', './efg/ghi.md'],
    control: {
      schema: 'http',
      domain: 'bar.com',
      path: '/abc/efg/ghi.md',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should path to urls finishing with empty segments - 1',
    input: ['http://bar.com/abc/cde.md', './efg/ghi/'],
    control: {
      schema: 'http',
      domain: 'bar.com',
      path: '/abc/efg/ghi/',
      query: {},
      fragment: ''
    }
  }, {
    message: 'should path to urls finishing with empty segments - 2',
    input: ['http://bar.com/abc/', './efg/ghi/'],
    control: {
      schema: 'http',
      domain: 'bar.com',
      path: '/abc/efg/ghi/',
      query: {},
      fragment: ''
    }
  }


]