import type { Query } from "../types";

export const stringifyQuery = (query: Query): string => {
  const entries = Object.entries(query);

  if (entries.length === 0) {
    return "";
  }

  const queryString = entries
    .map(([paramName, paramValue]) => `${paramName}=${paramValue}`)
    .join("&");

  return `?${queryString}`;
};
