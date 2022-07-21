import React, {FC} from 'react'
import { IMovie } from '../../types/types'


const Movie:FC<IMovie> = ({poster_path,vote_average}) => {

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
            <a href="void:javascript(0)">
                <div className="star" style={{backgroundColor:vote_color()}}>
                    <div className="rating" >
                        <span>{vote_average}</span>
                    </div>
                </div>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt=""/>
            </a>
        </div>
    )
}
export default Movie