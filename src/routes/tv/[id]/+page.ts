import * as api from "$lib/api"
import type { ShowList, ShowListResult, Video } from "$lib/types/movies"

export async function load({ params, fetch }) {
    const data = await api.get(fetch, `/tv/${params.id}`, {
        append_to_response: 'images,videos,recommendations,credits'
    })
    const trailer = data.videos.results.find((video: Video) => {
        return video.official && video.site === 'YouTube' && video.type === 'Trailer' || video.type === 'Teaser'
    })
    return {
        movie: data,
        trailer
    }

}


