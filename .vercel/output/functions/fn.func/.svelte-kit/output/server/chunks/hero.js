import { c as create_ssr_component, b as add_attribute, e as escape } from "./ssr.js";
import { m as media } from "./api.js";
const hero_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;800&display=swap");img.svelte-1ajcvcy.svelte-1ajcvcy{-webkit-box-reflect:below 5px\n            linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));-webkit-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease}.featured_wrapper.svelte-1ajcvcy.svelte-1ajcvcy{position:relative}.featured_wrapper.svelte-1ajcvcy img.svelte-1ajcvcy{width:100%;width:100%;height:100vh;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top}.title_wrapper.svelte-1ajcvcy.svelte-1ajcvcy{position:absolute;width:100%;left:2rem;bottom:2rem;padding:20px 40px;-webkit-box-sizing:border-box;box-sizing:border-box}.title_wrapper.svelte-1ajcvcy h1.svelte-1ajcvcy{width:70%}.button.svelte-1ajcvcy.svelte-1ajcvcy{font-size:18px;padding:1rem 3rem;outline:none;border:0 !important}@media(max-width: 768px){.title_wrapper.svelte-1ajcvcy.svelte-1ajcvcy{text-align:center;left:0}.title_wrapper.svelte-1ajcvcy h1.svelte-1ajcvcy{font-size:32px !important;width:100%}}',
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images;
  let backdrops;
  let { movie } = $$props;
  let { name } = $$props;
  let { media_type } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.media_type === void 0 && $$bindings.media_type && media_type !== void 0)
    $$bindings.media_type(media_type);
  $$result.css.add(css);
  images = movie.images;
  backdrops = images.backdrops.find((img) => !img.iso_639_1);
  return ` <div class="top"><div class="columns"><div class="column is-full featured_wrapper p-0 svelte-1ajcvcy"><img${add_attribute("src", media(backdrops?.file_path, 1280), 0)}${add_attribute("alt", movie.id.toString(), 0)} class="featured svelte-1ajcvcy"> <div class="title_wrapper container svelte-1ajcvcy"><span class="txt-light" data-svelte-h="svelte-nilagw">Trending Today</span> <h1 class="title txt-light fs-xxl svelte-1ajcvcy">${escape(name)}</h1> <span class="txt-light">${escape(movie.overview)}</span> <br> <br> <br> <a${add_attribute("href", `/${media_type}/${movie.id}`, 0)} class="button is-medium bg-light svelte-1ajcvcy"><i class="fa-solid fa-play pr-1"></i>
                    Watch It Now</a></div></div></div></div> <br>`;
});
export {
  Hero as H
};
