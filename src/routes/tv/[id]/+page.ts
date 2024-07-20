import * as api from "$lib/api"
import type { ShowList, ShowListResult, Video, Season } from "$lib/types/movies"

export async function load({ params, fetch }) {
    const showData = await api.get(fetch, `/tv/${params.id}`, {
        append_to_response: 'images,videos,recommendations,credits'
    })

    // Fetch season details including episodes
    const seasons: Season[] = await Promise.all(
        showData.seasons.map(async (season: { season_number: number }) => {
            const seasonData = await api.get(fetch, `/tv/${params.id}/season/${season.season_number}`)
            return seasonData
        })
    )

    const trailer = showData.videos.results.find((video: Video) => {
        return video.official && video.site === 'YouTube' && (video.type === 'Trailer' || video.type === 'Teaser')
    })

    return {
        movie: {
            ...showData,
            seasons: seasons
        },
        trailer
    }
}
