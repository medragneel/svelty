

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ac4a30f8.js","_app/immutable/chunks/scheduler.b562018a.js","_app/immutable/chunks/index.e5922e3f.js","_app/immutable/chunks/singletons.75d197eb.js"];
export const stylesheets = [];
export const fonts = [];
