
import * as api from '$lib/api'

export async function load({ fetch }) {
    let [trending, airing_today, top_rated] = await Promise.all([
        api.get(fetch, '/trending/tv/day', { page: '1' }),
        api.get(fetch, '/tv/airing_today', { page: '1' }),
        api.get(fetch, '/tv/top_rated', { page: '1' }),
    ])

    let featured = await api.get(fetch, `tv/${trending.results[0].id}`, {
        append_to_response: 'images,videos,recommendations'

    })

    return {
        trending,
        featured,
        airing_today,
        top_rated
    }

}
