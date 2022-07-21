import React, {useEffect , useState } from 'react';
import './App.scss'
import './buttons.scss'
import Home from "./pages/Home";
import { getMovies } from './redux/slices/moviesSlice'

import {useAppSelector} from "./hook"

import {useDispatch } from 'react-redux'
import Header from "./pages/components/Header";

function App() {

    const [theme , setTheme] = useState('black')



    return (
        <div className={theme === 'black' ? 'App black_theme' : 'App white_theme'}>
            <div className="container">
                <Header theme={theme} setTheme={setTheme} />
                <Home/>
            </div>
        </div>
    );
}

export default App;
