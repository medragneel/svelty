import * as universal from '../entries/pages/tv/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tv/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tv/+page.ts";
export const imports = ["_app/immutable/nodes/6.ebfdaabe.js","_app/immutable/chunks/global.0085e4a6.js","_app/immutable/chunks/index.e5922e3f.js","_app/immutable/chunks/scheduler.b562018a.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/hero.2fe95d63.js","_app/immutable/chunks/views.7b993c1f.js","_app/immutable/chunks/index.d24a8bd6.js"];
export const stylesheets = ["_app/immutable/assets/2.85e8d2a7.css","_app/immutable/assets/global.050ae6c5.css","_app/immutable/assets/hero.733f73ec.css"];
export const fonts = [];
