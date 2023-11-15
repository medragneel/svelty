import * as api from "$lib/api"
import type { MovieDetails, MovieList, MovieListResult } from "$lib/types/movies"

export async function load({ params, fetch }) {
    const data = await api.get(fetch, `/movie/${params.id}`, {
        append_to_response: 'images,videos,recommendations'
    }) as MovieDetails
    const trailer = data.videos.results.find((video) => {
        return video.official && video.site === 'YouTube' && video.type === 'Trailer' || video.type === 'Teaser'
    })
    return {
        movie: data,
        trailer
    }

}

