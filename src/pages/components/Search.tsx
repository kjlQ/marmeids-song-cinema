import React , {useCallback} from 'react'
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hook"
import {searchMovie} from "../../redux/slices/moviesSlice"
import debounce from "lodash.debounce";

const Search = () => {
    const [value, setValue] = React.useState<string>('');
    const dispatch = useDispatch()
    const handleSearch = useCallback(
        debounce((str : string)=>dispatch(searchMovie(str)),400),[],
    )
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        handleSearch(e.target.value)
    };
    return(

        <div className='search_input'>
            <input value={value} onChange={onChangeInput} type="text"/>
        </div>
    )
}
export default Search


