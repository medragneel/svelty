import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    // Get theme or set default
    let theme = event.cookies.get("theme");

    if (!theme) {
        theme = "light"; // Set default theme
        event.cookies.set("theme", theme, { path: '/', maxAge: 60 * 60 * 24 * 365 }); // Set the cookie
    } else {
        console.log("Theme found:", theme);
    }

    // Always apply the transformation
    const response = await resolve(event, {
        transformPageChunk: ({ html }) => {
            const transformedHtml = html.replace('data-theme=""', `data-theme="${theme}"`);
            return transformedHtml;
        },
    });

    return response;
};
