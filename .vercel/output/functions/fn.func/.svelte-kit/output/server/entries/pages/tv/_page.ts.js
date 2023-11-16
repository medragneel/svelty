import { g as get } from "../../../chunks/api.js";
async function load({ fetch }) {
  let [trending, airing, top] = await Promise.all([
    get(fetch, "/trending/tv/day", { page: "1" }),
    get(fetch, "/tv/airing_today", { page: "1" }),
    get(fetch, "/tv/top_rated", { page: "1" })
  ]);
  let featured = await get(fetch, `tv/${trending.results[0].id}`, {
    append_to_response: "images,videos,recommendations"
  });
  return {
    trending,
    featured,
    airing,
    top
  };
}
export {
  load
};
