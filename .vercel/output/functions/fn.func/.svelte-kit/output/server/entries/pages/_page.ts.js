import { g as get } from "../../chunks/api.js";
async function load({ fetch }) {
  let [trending, top_rated, nowPlaying, upcoming] = await Promise.all([
    get(fetch, "/trending/movie/day", { page: "1" }),
    get(fetch, "/movie/top_rated", { page: "1" }),
    get(fetch, "/movie/now_playing", { page: "1" }),
    get(fetch, "/movie/upcoming", { page: "1" })
  ]);
  let featured = await get(fetch, `movie/${trending.results[0].id}`, {
    append_to_response: "images,videos,recommendations"
  });
  return {
    trending,
    featured,
    top_rated,
    nowPlaying,
    upcoming
  };
}
export {
  load
};
