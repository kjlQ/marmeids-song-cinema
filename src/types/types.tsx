export interface IMovie {
    adult:boolean;
    backdrop_path:string;
    genre_ids:Number[]
    id:number;
    original_language:string;
    original_title:string;
    overview:string;
    popularity:number;
    poster_path:string;
    release_date:string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count:number;
}

type tbelong = {
    id: number,
    name: string
    poster_path: string,
    backdrop_path: string
}

export interface tgenres {
    id: number
    name: string
}

export interface IOptions {
    value:string,
    label:string,
}

export interface IDetail {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: tbelong
    budget: number
    genres: tgenres[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: string
    production_countries: string
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: string
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface IVideoResults {
    id: string,
    iso_639_1: string,
    iso_3166_1:string,
    key: string,
    name: string,
    official: number,
    published_at: string,
    site: string,
    size: number,
    type: string,
}

export interface ISliderItem {
    adult: boolean
    backdrop_path: string
    genre_ids: Number[]
    id: number
    media_type: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}


