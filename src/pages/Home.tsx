import React from 'react'
import Filter from "./components/Filter";
import Movies from "./components/Movies";

const Home = () => {
    return (
        <div className="container">
            <div className="home_page">
                <Filter />
                <Movies />
            </div>
        </div>
    )
}

export default Home