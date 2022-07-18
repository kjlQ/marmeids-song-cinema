import React from "react";
import Movie from "./Movie";
import { IMovie } from '../../types/types'
import {useAppSelector} from "../../hook";

const Movies = () => {

    const items = useAppSelector(state=>state.moviesReducer.movies)

    console.log('movies:',items)

    if(!items) {
        return (
            <div>
                please wait
            </div>
        )
    }

    return (
        <div className="movies">
            {items.map((item:IMovie)=>item.poster_path&&<Movie key={item.id} {...item} />)}
        </div>
    )
}
export default Movies
