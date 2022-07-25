import React, {FC} from 'react'
import { IMovie } from '../../types/types'
import {Link} from "react-router-dom";


const Movie:FC<IMovie> = ({poster_path,vote_average , title , id}) => {

    function vote_color() {
        if(vote_average <= 7 && vote_average >= 4) {
            return '#EFB700'
        }
        else if(vote_average > 7){
            return '#008450'
        }
        else {
            return '#B81D13'
        }
    }

    return (
        <div className="movies-item">
            <Link to={`/movie/${id}`}>
                {
                    vote_average > 0
                    &&
                    <div className="star" style={{backgroundColor:vote_color()}}>
                        <div className="rating" >
                            <span>{vote_average}</span>
                        </div>
                    </div>
                }
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt=""/>
                <div className="overlay">
                    <div className="text">
                        <div className="title">
                            {title}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Movie