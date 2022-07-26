import React, {useEffect , useState } from 'react';
import './App.scss'
import './buttons.scss'
import MoviesPage from "./pages/Home";
import MoviePage from './pages/MoviePage'

import { Routes , Route } from "react-router-dom";
import { getMovies } from './redux/slices/moviesSlice'

import {useAppSelector} from "./hook"

import {useDispatch } from 'react-redux'
import Header from "./pages/components/Header";

function App() {

    const [theme , setTheme] = useState('black')



    return (
        <div className={theme === 'black' ? 'App black_theme' : 'App white_theme'}>
            <Header theme={theme} setTheme={setTheme} />
            <Routes>
                <Route path="/movies" element={<MoviesPage />  } />
                <Route path="/movie/:id" element={<MoviePage />  } />
            </Routes>
        </div>
    );
}

export default App;
