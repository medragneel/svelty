export interface Genre {
    id: number;
    name: string;
}

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguage {
    iso_639_1: string;
    name: string;
}

interface CastMember {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

interface CrewMember {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}

interface Credits {
    id: number;
    cast: CastMember[];
    crew: CrewMember[];
}
export interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    budget: number;
    genres: Genre[];
    homepage: string | null;
    id: number;
    images: {
        backdrops: Image[];
        logos: Image[];
        poster: Image[];
    };
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_countries: ProductionCountry[];
    recommendations: {
        page: number;
        results: MovieListResult[];
        total_pages: number;
        total_results: number;
    };
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';
    tagline: string;
    title: string;
    video: boolean;
    videos: {
        results: Video[];
    };
    credits: Credits
    vote_average: number;
    vote_count: number;
}

export interface Image {
    aspect_ratio: number;
    file_path: string;
    height: string;
    iso_639_1: string | null;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface Video {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

export interface MovieImages {
    id: number;
    backdrops: Image[];
    posters: Image[];
}

export interface MovieListResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface ShowListResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    name: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    media_type: string;
    credits: Credits
}

export interface ShowList {
    page: number;
    results: ShowListResult[];
    dates: {
        maximum: string;
        minimum: string;
    };
    total_pages: number;
    total_results: number;
}

export interface MovieList {
    page: number;
    results: MovieListResult[];
    dates: {
        maximum: string;
        minimum: string;
    };
    total_pages: number;
    total_results: number;
}

export interface Trailer {
    id: string;
    iso_3166_1: string;
    iso_639_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
}

