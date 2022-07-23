import React, {useEffect , useCallback } from "react";
import Movie from "./Movie";
import { IMovie } from '../../types/types'
import {useAppSelector} from "../../hook";
import {changePage, getMovies} from '../../redux/slices/moviesSlice'
import {useDispatch} from 'react-redux'

const Movies = () => {

    const movies = useAppSelector(state=>state.moviesReducer.movies)
    const page = useAppSelector(state=>state.moviesReducer.page)
    const sort_by = useAppSelector(state=>state.moviesReducer.sort_by)
    const loadNewMovies = useAppSelector(state=>state.moviesReducer.loadNewMovies)
    const search_value = useAppSelector(state=>state.moviesReducer.search_value)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies({page, sort_by , search_value}))
    }, [dispatch,page,sort_by , search_value])

    if(!movies) {
        return (
            <div>
                please wait
            </div>
        )
    }

    return (
        <div>
            <div className="movies">
                {movies.map((item:IMovie)=>item.poster_path && item.backdrop_path && <Movie key={item.id} {...item} />)}
            </div>
            <button onClick={()=>dispatch(changePage(page+1))} className="show_more_btn">
                <span>Discover more</span>
            </button>
        </div>
    )
}
export default Movies
