import axios from 'axios';
import React ,{useEffect , useState} from 'react'
import SlickSlider from "./components/react_slider";
import {ISliderItem} from '../types/types'

const MainPage = () => {

    const [trend , setTrend] = useState<ISliderItem[]>([])
    const [popular , setPopular] = useState<ISliderItem[]>([])

    useEffect(()=> {
        const getPopular = async () => {
            const trendFetch = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=6071c7f776d0e35fb4f1d54ec4be7272`).then(resp=>resp.data.results)
            const popularFetch = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6071c7f776d0e35fb4f1d54ec4be7272&page=1`).then(resp=>resp.data.results)
            setTrend(trendFetch)
            setPopular(popularFetch)
        }
        getPopular()
    },[])
    console.log('trend',trend)
    return(
        <div className="container">
            <h2 className='main_title'>Trending</h2>
            <SlickSlider items={trend} slidesToShow={1} />
            <h2 className='main_title'>Popular</h2>
            <SlickSlider items={popular} slidesToShow={4} />
        </div>

    )
}
export default MainPage