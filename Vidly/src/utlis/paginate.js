import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startindex = (pageNumber - 1) * pageSize;
  // _.slice(items , startindex);
  return _(items).slice(startindex).take(pageSize).value();
}
