import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, f as each } from "../../../../chunks/ssr.js";
import { H as Header } from "../../../../chunks/header.js";
/* empty css                         */import { m as media } from "../../../../chunks/api.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-192ei4a{border-radius:0.75em}.data.svelte-192ei4a{display:grid;grid-template-columns:max-content 1fr;gap:1em}dt.svelte-192ei4a,dd.svelte-192ei4a{line-height:1}dt.svelte-192ei4a{text-transform:uppercase;font-size:0.8rem;top:0.2rem;opacity:0.8}dd.svelte-192ei4a{margin:0}.genres.svelte-192ei4a{grid-column:2/5}@media(min-width: 45em){.data.svelte-192ei4a{display:grid;grid-template-columns:max-content 1fr max-content 1fr;gap:1em}}@media(min-width: 60em){.data.svelte-192ei4a{height:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render(
    $$result,
    {
      movie: data.movie,
      trailer: data.trailer,
      name: data.movie.title
    },
    {},
    {}
  )} <div class="container"><div class="overview"><h1 class="align-center p-1" data-svelte-h="svelte-4717y0">Description</h1> <p class="p-1">${escape(data.movie.overview)}</p></div> <br> <br> <div class="container"><h1 class="align-center py-2" data-svelte-h="svelte-ed5c98">Watch links</h1> <div class="links carousel"><a class="btn btn-dark"${add_attribute("href", `https://vidsrc.to/embed/movie/${data.movie.id}`, 0)} target="_blank"><i class="fa-solid fa-play pr-1"></i>
                vidsrc</a> <a class="btn btn-dark"${add_attribute("href", `https://multiembed.mov/?video_id=${data.movie.id}&tmdb=1`, 0)} target="_blank"><i class="fa-solid fa-play pr-1"></i>
                superEmbed</a> <a class="btn btn-dark"${add_attribute("href", `https://seez.su/movie/${data.movie.id}`, 0)} target="_blank"><i class="fa-solid fa-play pr-1"></i>
                seez.su</a> <a class="btn btn-dark"${add_attribute("href", `https://vidsrc.me/embed/movie?tmdb=${data.movie.id}`, 0)} target="_blank"><i class="fa-solid fa-play pr-1"></i>
                vidsrc2</a></div></div> <br> <br> <dl class="data container svelte-192ei4a"><dt class="svelte-192ei4a" data-svelte-h="svelte-1qxtmsh">Released</dt><dd class="svelte-192ei4a">${escape(data.movie.release_date)}</dd><dt class="svelte-192ei4a" data-svelte-h="svelte-16o3lmy">Runtime</dt><dd class="svelte-192ei4a">${escape(data.movie.runtime)} minutes</dd><dt class="svelte-192ei4a" data-svelte-h="svelte-1p8tlnb">Budget</dt><dd class="svelte-192ei4a">$${escape(Math.round(data.movie.budget / 1e6))}M</dd><dt class="svelte-192ei4a" data-svelte-h="svelte-1tl6ezu">Revenue</dt><dd class="svelte-192ei4a">$${escape(Math.round(data.movie.revenue / 1e6))}M</dd><dt class="svelte-192ei4a" data-svelte-h="svelte-yzr67f">Genre</dt><dd class="genres svelte-192ei4a">${escape(data.movie.genres?.map((g) => g.name).join(", "))}</dd></dl></div> <br> <br> ${data.movie.recommendations.results.length > 0 ? `<div class="py-3 container"><h1 class="py-1" data-svelte-h="svelte-vy6akn">You Might Like</h1> <div class="carousel">${each(data.movie.recommendations.results, (movie) => {
    return `<a${add_attribute("href", `/movie/${movie.id}`, 0)}><img${add_attribute("src", media(movie.poster_path, 200), 0)}${add_attribute("alt", movie.title, 0)} class="svelte-192ei4a"> </a>`;
  })}</div></div>` : ``}`;
});
export {
  Page as default
};
