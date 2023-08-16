export function parseQuery(query, decode = decodeQueryComponent) {
  const result = {};
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    const key = decode(pair[0]);
    let value = decode(pair[1]);
    let prevValue = result[key];
    if (prevValue !== undefined) {
      const array = result[key] = Array.isArray(prevValue)
        ? prevValue
        : [prevValue];
      array.push(value);
      value = array;
    }
    result[key] = value;
  }
  return result;
}

export function parseUri(uri) {
  if (typeof uri === "object") return uri;
  uri = (uri || "") + "";
  let schema = "", domain = "", path = "", query = {}, fragment = "";
  uri.replace(
    /^((\S*?):)?(\/\/([\d\w][^/]*)?)?(\/?[^#?]*?)(\?[^#]*)?(#.*)?$/,
    function (_, _a, s, _d, d, p, q, f) {
      schema = s || "";
      domain = d || "";
      path = p;
      q = q ? parseQuery(q.substring(1)) : {};
      query = q;
      fragment = f || "";
    },
  );
  return { schema, domain, path, query, fragment };
}

export function serializeQuery(query, encode = encodeQueryComponent) {
  let result = [];
  for (let [key, value] of Object.entries(query)) {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        result.push([key, value[i]]);
      }
    } else {
      result.push([key, value]);
    }
  }
  return result
    .map(([key, value]) => `${encode(key)}=${encode(value)}`)
    .join("&");
}

export function serializeUri(options) {
  if (typeof options === "string") return options;
  let { schema, domain, path, query, fragment } = options;
  let uri = "";
  if (schema) uri += `${schema}:`;
  if (domain) uri += `//${domain}`;
  else if (schema && path && path[0] === "/") uri += "//";
  if (path) {
    if (domain && path[0] !== "/") path = `/${path}`;
    uri += path;
  }
  if (query) {
    if (typeof query === "object") query = serializeQuery(query);
    if (query) uri += `?${query}`;
  }
  if (fragment) {
    if (fragment[0] !== "#") fragment = `#${fragment}`;
    uri += fragment;
  }
  return uri;
}

export function newUri(...list) {
  const result = {
    schema: "",
    domain: "",
    path: "",
    query: {},
    fragment: "",
  };
  for (const uri of list) {
    uri.schema && (result.schema = uri.schema);
    uri.domain && (result.domain = uri.domain);
    uri.path && (result.path = uri.path);
    const q = { ...uri.query };
    Object.keys(q).length && (result.query = q);
    uri.fragment && (result.fragment = uri.fragment);
  }
  return result;
}

export function resolveUris(from, ...uris) {
  for (let uri of uris) {
    from = resolveUri(from, uri);
  }
  return from;
}

export function resolveUri(from, to) {
  if (!to.schema && !to.domain) {
    to = {
      ...from,
      path: to.path,
      query: to.query,
      fragment: to.fragment,
    };
  }
  let result = newUri(to);
  let resolve = (!from.schema && !from.domain) ||
    (!to.schema && !to.domain) ||
    (from.schema === to.schema && from.domain === to.domain);
  if (resolve) {
    const toPath = _splitPath(to.path);
    let path;
    if (toPath.length && !toPath[0]) { // Target path is absolute
      path = _resolve(toPath);
    } else {
      const fromPath = _splitSourcePath(from.path);
      const segments = [...fromPath, ...toPath];
      path = _resolve(segments);
    }
    result.path = path.join("/");
  }
  if (to.query) result.query = to.query;
  if (to.fragment) result.fragment = to.fragment;
  return result;
}

export function makeRelativeUri(from, to) {
  let result = newUri(to);
  if (!to.schema && !to.domain) {
    result = resolveUri(from, to);
  }
  if (from.schema === to.schema && from.domain === to.domain) {
    const fromPath = _splitSourcePath(from.path);
    const toPath = _splitPath(to.path);
    const minLen = Math.min(fromPath.length, toPath.length - 1);
    let commonLen;
    for (commonLen = 0; commonLen < minLen; commonLen++) {
      if (fromPath[commonLen] !== toPath[commonLen]) break;
    }
    const path = [];
    for (let i = commonLen; i < fromPath.length; i++) path.push("..");
    if (!path.length) path.push(".");
    for (let i = commonLen; i < toPath.length; i++) path.push(toPath[i]);
    result = newUri({
      path: path.join("/"),
      query: to.query,
      fragment: to.fragment,
    });
  }
  return result;
}

export function joinUri(...uris) {
  uris = [...uris];
  let result = newUri(uris[0]);
  const path = [];
  let idx = 0;
  let query = result.query;
  let fragment = result.fragment;
  for (const uri of uris) {
    const segments = _splitPath(uri.path);
    if (idx > 0 && (segments[0] === "" || segments[0] === ".")) {
      segments.shift();
    }
    if (segments.length) {
      if (path.length > 1 && !path[path.length - 1]) path.pop();
      path.push(...segments);
    }
    query = uri.query;
    fragment = uri.fragment;
    idx++;
  }
  result.path = path.join("/");
  result.query = { ...query };
  result.fragment = fragment;
  return result;
}

function _splitPath(path) {
  if (!path) return [];
  return path.split("/");
}

function _splitSourcePath(path) {
  const segments = _splitPath(path);
  // if (segments.length && segments[segments.length - 1])
  segments.pop();
  return segments;
}

function _resolve(segments) {
  let path = [];
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (i < segments.length - 1 && !segment) continue;
    if (i > 0 && segment === ".") continue;
    if (segment === "..") path.pop();
    else path.push(segment);
  }
  if (path[0] !== "/" && path[0] !== ".") path.unshift("");
  return path;
}

export function decodeQueryComponent(str) {
  try {
    return decodeURIComponent(str);
  } catch (error) {
    return str;
  }
}

export function encodeQueryComponent(str) {
  try {
    return encodeURIComponent(str);
  } catch (error) {
    return str;
  }
}
