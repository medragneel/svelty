import { e as error } from "./index.js";
const base = "https://api.movies.tastejs.com";
const media_base = "https://image.tmdb.org/t/p";
let cache = /* @__PURE__ */ new Map();
async function get(fetch, endpoint, params) {
  const q = new URLSearchParams(params);
  const url = `${base}/${endpoint}?${q}`;
  if (cache.has(url)) {
    return cache.get(url);
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw error(response.status);
  }
  const data = await response.json();
  return data;
}
function media(file_path, width) {
  return `${media_base}/w${width}${file_path}`;
}
export {
  get as g,
  media as m
};
