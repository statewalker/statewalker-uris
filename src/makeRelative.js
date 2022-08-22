import { parseUri, makeRelativeUri, serializeUri } from "./uri.js";

export default function makeRelative(...uris) {
  uris = [...uris].map(parseUri);
  const result = makeRelativeUri(...uris);
  return serializeUri(result)
}