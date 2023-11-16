import * as universal from '../entries/pages/movie/_id_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/movie/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/movie/[id]/+page.ts";
export const imports = ["_app/immutable/nodes/3.a2bee259.js","_app/immutable/chunks/global.0085e4a6.js","_app/immutable/chunks/index.e5922e3f.js","_app/immutable/chunks/scheduler.b562018a.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/header.0cca242d.js","_app/immutable/chunks/index.d24a8bd6.js"];
export const stylesheets = ["_app/immutable/assets/3.94dd9b14.css","_app/immutable/assets/global.050ae6c5.css","_app/immutable/assets/header.ec9164b8.css"];
export const fonts = [];
