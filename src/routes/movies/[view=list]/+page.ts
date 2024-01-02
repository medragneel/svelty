
import * as api from "$lib/api"
import type { MovieList } from "$lib/types/movies"
import { views } from "$lib/views"

export async function load({ params, url, fetch }) {
    const view = views[params.view]
    console.log(view)
    const page = url.searchParams.get('page') ?? '1'

    const data = (await api.get(fetch, view.endpoint, {
        page
    })) as MovieList

    return {
        view: params.view,
        endpoint: view.endpoint,
        movies: data,
        next_page: data.page < data.total_pages ? data.page + 1 : null

    }

}
