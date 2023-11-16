import { c as create_ssr_component, b as add_attribute, e as escape } from "./ssr.js";
import { m as media } from "./api.js";
const header_svelte_svelte_type_style_lang = "";
const css = {
  code: "iframe.svelte-10nm2sc.svelte-10nm2sc{width:100%;height:80vh}img.svelte-10nm2sc.svelte-10nm2sc{-webkit-box-reflect:below 5px\n            linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));-webkit-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease}.featured_wrapper.svelte-10nm2sc.svelte-10nm2sc{position:relative}.featured_wrapper.svelte-10nm2sc img.svelte-10nm2sc{width:100%;height:100vh;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top}.title_wrapper.svelte-10nm2sc.svelte-10nm2sc{position:absolute;width:100%;left:2rem;bottom:2rem;padding:20px 40px;-webkit-box-sizing:border-box;box-sizing:border-box}.title_wrapper.svelte-10nm2sc h1.svelte-10nm2sc{width:70%}.button.svelte-10nm2sc.svelte-10nm2sc{font-size:18px;padding:1rem 3rem;outline:none;border:0 !important}@media(max-width: 768px){.title_wrapper.svelte-10nm2sc.svelte-10nm2sc{text-align:center;left:0}.title_wrapper.svelte-10nm2sc h1.svelte-10nm2sc{font-size:32px !important;width:100%}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images;
  let backdrops;
  let { movie } = $$props;
  let { trailer } = $$props;
  let { name } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  if ($$props.trailer === void 0 && $$bindings.trailer && trailer !== void 0)
    $$bindings.trailer(trailer);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  images = movie.images;
  backdrops = images.backdrops.find((img) => !img.iso_639_1);
  return `<div class="top"><div class="columns">${`<div class="column is-full featured_wrapper p-0 svelte-10nm2sc"><img${add_attribute("src", media(backdrops?.file_path, 1280), 0)}${add_attribute("alt", movie.id.toString(), 0)} class="featured svelte-10nm2sc"> <div class="title_wrapper svelte-10nm2sc"><span class="txt-light" data-svelte-h="svelte-nilagw">Trending Today</span> <h1 class="title txt-light fs-xxl svelte-10nm2sc">${escape(name)}</h1> <br> <br> <button class="button is-medium bg-light svelte-10nm2sc" data-svelte-h="svelte-9jocmg"><i class="fa-solid fa-play pr-1"></i>
                        Watch Trailer</button></div></div>`}</div></div> <br>`;
});
export {
  Header as H
};
