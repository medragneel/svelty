
import * as api from "$lib/api"
import { Tviews } from "$lib/views"

export async function load({ params, url, fetch }) {
    const view = Tviews[params.views]
    const page = url.searchParams.get('page') ?? '1'

    const data = (await api.get(fetch, view.endpoint, {
        page
    }))

    return {
        view: params.views,
        endpoint: view.endpoint,
        movies: data.results,
        next_page: data.page < data.total_pages ? data.page + 1 : null

    }

}

