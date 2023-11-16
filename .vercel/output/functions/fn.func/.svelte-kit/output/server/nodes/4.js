import * as universal from '../entries/pages/movies/_view_list_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/movies/_view_list_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/movies/[view=list]/+page.ts";
export const imports = ["_app/immutable/nodes/4.3db39e89.js","_app/immutable/chunks/global.0085e4a6.js","_app/immutable/chunks/index.e5922e3f.js","_app/immutable/chunks/scheduler.b562018a.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/views.7b993c1f.js"];
export const stylesheets = ["_app/immutable/assets/4.d466b21a.css","_app/immutable/assets/global.050ae6c5.css"];
export const fonts = [];
