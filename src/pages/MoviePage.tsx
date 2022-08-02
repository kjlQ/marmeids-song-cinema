import React , {useState , useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { IDetail , tgenres} from '../types/types'
import Video from "./components/Video";


const MoviePage = () => {
    const [state , setState] = useState<IDetail>()
    let {id} = useParams<string>();
    useEffect(()=> {
        const fetchFunction = async () => {
            const response = await axios.get<IDetail>(`https://api.themoviedb.org/3/movie/${id}?api_key=6071c7f776d0e35fb4f1d54ec4be7272`)
            setState(response.data)
            // console.log(state)
        }
        fetchFunction()
    },[])
    // console.log(id)
    return(
        <div className="movie_detail_page">
                <div className="banner" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${state?.backdrop_path})`}}>
                    <div className="banner_container">
                        <div className="banner_container_info">
                            <img src={`https://image.tmdb.org/t/p/w200/${state?.poster_path}`} alt=""/>
                            <div className="text_info">
                                <div className="title">
                                    <a href={state?.homepage}>
                                        {state?.title}
                                    </a>
                                </div>
                                <div className="genres">
                                    <ul>
                                        {state?.genres.map((item:tgenres,i) => <li key={i}>{item.name}</li>)}
                                    </ul>
                                </div>
                                <div className="overview">
                                    {state?.overview}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Video id={id} />
        </div>
    )
}
export default MoviePage