import { c as create_ssr_component, b as add_attribute, f as each } from "../../../chunks/ssr.js";
import { m as media } from "../../../chunks/api.js";
/* empty css                      */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container p-3"><h1 class="align-center" data-svelte-h="svelte-1gebqfn">Sarch For A Movie / TvShow</h1> <br> <br> <center><form><input type="text" name="query" placeholder="Search for Movie / Tvshow"${add_attribute("value", data.query, 0)}></form></center> <br> <br> ${data.query ? `<div class="container"><div class="grid">${each(data.movies, (movie) => {
    return `${movie.media_type === "movie" ? `<a${add_attribute("href", `/movie/${movie.id}`, 0)}><img${add_attribute("src", media(movie.poster_path, 200), 0)}${add_attribute("alt", movie.title, 0)}> </a>` : `<a${add_attribute("href", `/tv/${movie.id}`, 0)}><img${add_attribute("src", media(movie.poster_path, 200), 0)}${add_attribute("alt", movie.title, 0)}> </a>`}`;
  })}</div> <br></div>` : ``}</div>`;
});
export {
  Page as default
};
