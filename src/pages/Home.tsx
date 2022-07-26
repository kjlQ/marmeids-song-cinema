import React from 'react'
import Filter from "./components/Filter";
import Movies from "./components/Movies";

const MoviesPage = () => {
    return (
        <div className="container">
            <div className="home_page">
                <Filter />
                <Movies />
            </div>
        </div>
    )
}

export default MoviesPage