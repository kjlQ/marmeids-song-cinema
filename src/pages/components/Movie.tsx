import React, {FC} from 'react'
import { IMovie } from '../../types/types'


const Movie:FC<IMovie> = ({poster_path}) => {

    return (
        <div className="movies-item">
            <a href="void:javascript(0)">
                <i className="star"/>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt=""/>
            </a>
        </div>
    )
}
export default Movie