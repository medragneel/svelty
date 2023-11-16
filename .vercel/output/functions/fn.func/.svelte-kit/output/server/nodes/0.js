

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.02c6865c.js","_app/immutable/chunks/scheduler.b562018a.js","_app/immutable/chunks/index.e5922e3f.js"];
export const stylesheets = [];
export const fonts = [];
