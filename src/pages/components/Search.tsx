import React , {useCallback} from 'react'
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hook"
import {searchMovie} from "../../redux/slices/moviesSlice"
import debounce from "lodash.debounce";

const Search = () => {
    const [value, setValue] = React.useState<string>('');
    const dispatch = useDispatch()
    const inputRef = React.useRef<HTMLInputElement>(null)
    const {search_value} = useAppSelector(state=>state.moviesReducer)
    const handleSearch = useCallback(
        debounce((str : string)=>dispatch(searchMovie(str)),400),[],
    )
    React.useEffect(()=> {
        setValue(search_value)
    },[search_value])
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        handleSearch(e.target.value)
    };
    const clearSearch = () => {
        dispatch(searchMovie(''))
        inputRef?.current?.focus()
    }
    return(

        <div className='search_input'>
            <input ref={inputRef} placeholder={'Type the title'} value={value} onChange={onChangeInput} type="text"/>
            {search_value &&
                <svg onClick={()=>clearSearch()} className='cross' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
            }
        </div>
    )
}
export default Search


