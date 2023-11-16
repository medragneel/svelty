import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="nav px-1"><div class="logo" data-svelte-h="svelte-35ydl6"><a href="/" class="txt-dark"><span>Svelty</span></a></div> <a class="hamburger" href="?" data-svelte-h="svelte-1hbv869"><span class="bar bar1 bg-dark"></span> <span class="bar bar2 bg-dark"></span> <span class="bar bar3 bg-dark"></span></a> <div${add_attribute("class", `nav-links ${""}`, 0)}><ul data-svelte-h="svelte-1gv6wfk"><li><a href="/">Home</a></li> <li><a href="/search">search</a></li> <li><a href="/tv">Tv</a></li></ul></div></nav> ${slots.default ? slots.default({}) : ``} <br> <br> <br> <br>       `;
});
export {
  Layout as default
};
