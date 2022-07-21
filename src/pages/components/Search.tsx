import React from 'react'
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hook"
import {searchMovie} from "../../redux/slices/moviesSlice"
// import debounce from "lodash.debounce";

const Search = () => {

    const dispatch = useDispatch()
    const search_value = useAppSelector(state => state.moviesReducer.search_value)
    return(

        <div className='search_input'>
            <input value={search_value} onInput={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch(searchMovie(e.target.value))} type="text"/>
        </div>
    )
}
export default Search


