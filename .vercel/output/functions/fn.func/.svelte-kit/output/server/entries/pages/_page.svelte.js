import { c as create_ssr_component, e as escape, b as add_attribute, f as each, v as validate_component } from "../../chunks/ssr.js";
import { H as Hero } from "../../chunks/hero.js";
/* empty css                   */import { m as media } from "../../chunks/api.js";
import { v as views } from "../../chunks/views.js";
const carousel_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-9tdlf4{border-radius:0.75em}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movies } = $$props;
  let { title } = $$props;
  let { href } = $$props;
  if ($$props.movies === void 0 && $$bindings.movies && movies !== void 0)
    $$bindings.movies(movies);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css);
  return `<br> <br> <div class="container"><h2>${escape(title)} - ${href ? `<a${add_attribute("href", href, 0)}>See More</a>` : ``}</h2> <br> <div class="carousel">${each(movies.results, (movie) => {
    return `<a${add_attribute("href", `/movie/${movie.id}`, 0)}><img${add_attribute("src", media(movie.poster_path, 200), 0)}${add_attribute("alt", movie.title, 0)} class="svelte-9tdlf4"> </a>`;
  })}</div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="main">${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      movie: data.featured,
      name: data.featured.title,
      media_type: "movie"
    },
    {},
    {}
  )} ${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      title: views.trending.title,
      movies: data.trending,
      href: "/movies/trending"
    },
    {},
    {}
  )} ${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      title: views.nowPlaying.title,
      movies: data.nowPlaying,
      href: "/movies/nowPlaying"
    },
    {},
    {}
  )} ${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      title: views.upcoming.title,
      movies: data.upcoming,
      href: "/movies/upcoming"
    },
    {},
    {}
  )} ${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      title: views.top_rated.title,
      movies: data.top_rated,
      href: "/movies/top_rated"
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
