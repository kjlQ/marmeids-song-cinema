import React, {useEffect , useState } from 'react';
import './App.scss'
import './toggleButton.scss'
import Home from "./pages/Home";
import axios from "axios";

import {useDispatch} from 'react-redux'
import {updateMovie} from './redux/slices/moviesSlice'
import { IMovie } from './types/types';

interface fetchType {
    page:number,
    results:IMovie[],
    total_pages:number,
    total_results:number,
}

function App() {

    const [theme , setTheme] = useState('black')

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchApi = async () => {
            const fetchData = await axios.get<fetchType>('https://api.themoviedb.org/3/discover/movie?api_key=6071c7f776d0e35fb4f1d54ec4be7272&sort_by=popularity.desc&page=1').then(res=>res.data)
            dispatch(updateMovie(fetchData.results))
        }
        fetchApi()
    }, [dispatch])

    return (
        <div className={theme === 'black' ? 'App black_theme' : 'App white_theme'}>
            <div className="container">
                <div className="theme_color">
                    <input onClick={()=>setTheme(theme === 'black' ? 'white' : 'black')} type="checkbox" name="checkbox" className="switch" />
                </div>
                <Home/>
            </div>
        </div>
    );
}

export default App;
