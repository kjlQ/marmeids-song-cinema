import React, {FC , useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
import Movie from "./Movie";

interface ISlider {
    original_title:string,
    backdrop_path:string,
    overview:string,
    id:number,
    vote_average:number,
    poster_path:string,
    slidesToShow:number,
}

const SliderInfo:FC<ISlider> = ({original_title,backdrop_path,overview,id,vote_average ,poster_path,slidesToShow}) => {

    const [innerWidth , setInnerWidth] = useState(window.innerWidth)

    return (
        <div className='slider-item'>
            {slidesToShow < 2 && innerWidth > 600?
                <>
                    <img className='backdrop' src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt=""/>
                    <div className="info">
                        <div className="title">
                            {original_title}
                        </div>
                        <div className="overview">
                            {overview}
                        </div>
                        <Link to={`/movie/${id}`}>
                            <button>
                                Info
                            </button>
                        </Link>
                    </div>
                </>
                :
                // @ts-ignore
                <Movie poster_path={poster_path} title={original_title} id={id} vote_average={vote_average} />

            }

        </div>
    )
}
export default SliderInfo
