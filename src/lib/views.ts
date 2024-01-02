interface View {
    title: string;
    endpoint: string;
}

export const views: Record<string, View> = {
    trending: {
        title: 'Movies/Trending',
        endpoint: 'trending/movie/day'
    },
    top_rated: {
        title: 'Movies/Top Rated',
        endpoint: 'movie/top_rated'
    },
    nowPlaying: {
        title: 'Movies/Now playing',
        endpoint: 'movie/now_playing'
    },
    upcoming: {
        title: 'Movies/Upcoming',
        endpoint: 'movie/now_playing'
    },
    discover: {
        title: 'Movies/Discover',
        endpoint: 'discover/movie'
    }
};
export const Tviews: Record<string, View> = {
    trending: {
        title: 'Tv/Trending',
        endpoint: 'trending/tv/day'
    },
    airing_today: {
        title: 'Tv/AiringToday',
        endpoint: 'tv/airing_today'
    },
    top_rated: {
        title: 'Tv/TopRated',
        endpoint: 'tv/top_rated'
    },
    discover: {
        title: 'tv/Discover',
        endpoint: 'discover/tv'
    }
};
