import { c as create_ssr_component, f as each, b as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
/* empty css                         */import { m as media } from "../../../../chunks/api.js";
const grid_svelte_svelte_type_style_lang = "";
const css = {
  code: ".next.svelte-orx7ow{float:right}img.svelte-orx7ow{border-radius:0.75em}",
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movies } = $$props;
  let { next } = $$props;
  if ($$props.movies === void 0 && $$bindings.movies && movies !== void 0)
    $$bindings.movies(movies);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0)
    $$bindings.next(next);
  $$result.css.add(css);
  return `<div class="container"><div class="grid">${each(movies, (movie) => {
    return `<a${add_attribute("href", `/movie/${movie.id}`, 0)}><img${add_attribute("src", media(movie.poster_path, 200), 0)}${add_attribute("alt", movie.title, 0)} class="svelte-orx7ow"> </a>`;
  })}</div> <br> ${next ? `<a class="next btn btn-dark px-2 svelte-orx7ow"${add_attribute("href", next, 0)}><i class="fa-solid fa-arrow-right"></i></a>` : ``} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<br> <div class="container align-center"><h1>${escape(data.view)}</h1></div> <br> <br> ${validate_component(Grid, "Grid").$$render(
    $$result,
    {
      movies: data.movies.results,
      next: data.next_page ? `/movies/${data.view}?page=${data.next_page}` : null
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
