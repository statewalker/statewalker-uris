import { parseUri, resolveUris, serializeUri } from "./uri.js";

export default function resolveUrl(...urls) {
  urls = [...urls].map(parseUri);
  const result = resolveUris(...urls);
  return serializeUri(result);
}