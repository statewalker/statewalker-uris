// import { parseUri, joinUri } from "./uri.js";
import resolveUrl from "./resolveUrl.js";
import makeRelative from "./makeRelative.js";

export default function newPathMapping(mapping) {
  if (!Array.isArray(mapping)) {
    mapping = Object.entries(mapping).map(([source, target]) => ({ source, target }));
  }
  const compare = (a, b) =>
    a.source > b.source ? 1 : a.source < b.source ? -1 : 0;
  mapping = [...mapping].sort(compare);

  return p => {
    if (!p) return p;
    let idx = binarySearch(mapping, { source: p }, compare);
    if (idx < 0) {
      idx = Math.max(0, -(idx + 1) - 1);
    }
    let entry;
    for (let i = idx; !entry && (i >= 0); i--) {
      const e = mapping[i];
      if (e && p.indexOf(e.source) === 0) {
        entry = e;
      }
    }
    if (!entry) return null;
    const path = makeRelative(entry.source, p);
    return resolveUrl(entry.target, path);
  };

  function binarySearch(
    arr,
    val,
    compare = (a, b) => (a > b ? 1 : a < b ? -1 : 0)
  ) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const mid = (low + high) >>> 1;
      const v = compare(arr[mid], val);
      if (v === 0) {
        return mid;
      } else if (v < 0) {
        low = mid + 1;
      } else if (v > 0) {
        high = mid - 1;
      }
    }
    return -(low + 1);
  }
}
