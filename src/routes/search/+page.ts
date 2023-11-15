import * as api from "$lib/api"
export async function load({url,fetch}){
    const query = url.searchParams.get('query')
    if (!query) {
        return {
            query,
            movies:[]
        }
    }

    const data = await api.get(fetch,'/search/multi',{query})
    return {
        query,
        movies: data.results
    }
}
