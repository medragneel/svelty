import { g as get } from "../../../../chunks/api.js";
async function load({ params, fetch }) {
  const data = await get(fetch, `/tv/${params.id}`, {
    append_to_response: "images,videos,recommendations"
  });
  const trailer = data.videos.results.find((video) => {
    return video.official && video.site === "YouTube" && video.type === "Trailer" || video.type === "Teaser";
  });
  return {
    movie: data,
    trailer
  };
}
export {
  load
};
