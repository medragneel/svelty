import { c as create_ssr_component, e as escape, b as add_attribute, f as each, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                      */import { H as Hero } from "../../../chunks/hero.js";
import { m as media } from "../../../chunks/api.js";
import { T as Tviews } from "../../../chunks/views.js";
const tslide_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-9tdlf4{border-radius:0.75em}",
  map: null
};
const Tslide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { shows } = $$props;
  let { title } = $$props;
  let { href } = $$props;
  if ($$props.shows === void 0 && $$bindings.shows && shows !== void 0)
    $$bindings.shows(shows);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css);
  return `<br> <br> <div class="container"><h2>${escape(title)} - ${href ? `<a${add_attribute("href", href, 0)}>See More</a>` : ``}</h2> <br> <div class="carousel">${each(shows.results, (show) => {
    return `<a${add_attribute("href", `/tv/${show.id}`, 0)}><img${add_attribute("src", media(show.poster_path, 200), 0)}${add_attribute("alt", show.name, 0)} class="svelte-9tdlf4"> </a>`;
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
      name: data.featured.name,
      media_type: "tv"
    },
    {},
    {}
  )} ${validate_component(Tslide, "Tslide").$$render(
    $$result,
    {
      title: Tviews.trending.title,
      shows: data.trending,
      href: "/tv/trending"
    },
    {},
    {}
  )} ${validate_component(Tslide, "Tslide").$$render(
    $$result,
    {
      title: Tviews.airing.title,
      shows: data.airing,
      href: "/tv/airing"
    },
    {},
    {}
  )} ${validate_component(Tslide, "Tslide").$$render(
    $$result,
    {
      title: Tviews.top.title,
      shows: data.top,
      href: "/tv/top"
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
