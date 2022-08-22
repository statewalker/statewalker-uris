import { parseUri, joinUri, serializeUri } from "./uri.js";

export default function concatPath(...uris) {
  uris = [...uris].map(parseUri);
  const result = joinUri(...uris);
  return serializeUri(result)
}