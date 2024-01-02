import * as api from "$lib/api"
import type { MovieList } from "$lib/types/movies"

export async function load({ fetch }) {
    let [trending, top_rated, nowPlaying, upcoming, discover] = await Promise.all([
        api.get(fetch, '/trending/movie/day', { page: '1' }) as Promise<MovieList>,
        api.get(fetch, '/movie/top_rated', { page: '1' }) as Promise<MovieList>,
        api.get(fetch, '/movie/now_playing', { page: '1' }) as Promise<MovieList>,
        api.get(fetch, '/movie/upcoming', { page: '1' }) as Promise<MovieList>,
        api.get(fetch, '/discover/movie', { page: '1' }) as Promise<MovieList>,
    ])

    let featured = await api.get(fetch, `movie/${trending.results[0].id}`, {
        append_to_response: 'images,videos,recommendations'

    })

    return {
        trending,
        featured,
        top_rated,
        nowPlaying,
        upcoming,
        discover
    }

}
