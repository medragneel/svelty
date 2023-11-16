import * as universal from '../entries/pages/search/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/search/+page.ts";
export const imports = ["_app/immutable/nodes/5.6d5ef69f.js","_app/immutable/chunks/global.0085e4a6.js","_app/immutable/chunks/index.e5922e3f.js","_app/immutable/chunks/scheduler.b562018a.js","_app/immutable/chunks/control.f5b05b5f.js"];
export const stylesheets = ["_app/immutable/assets/global.050ae6c5.css"];
export const fonts = [];
