// src/hooks.server.ts

export const handle = async ({ event, resolve }) => {
    // before the server handles the request,
    // you can do stuff here

    // the server handles the request
    // and generates a response
    const theme = event.cookies.get("theme");
    if (!theme) {
        return await resolve(event);
    }

    // after the server handles the request,
    // you can do stuff here

    // the response is sent to the browser
    return await resolve(event, {
        transformPageChunk: ({ html }) => {
            return html.replace('data-theme=""', `data-theme="${theme}"`);
        },
    });
};
