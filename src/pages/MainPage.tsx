import axios from 'axios';
import React ,{useEffect , useState} from 'react'
import SimpleSlider from "./components/react_slider";

const MainPage = () => {

    const [trend , setTrend] = useState<any>([])

    useEffect(()=> {
        const getPopular = async () => {
            const results = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=6071c7f776d0e35fb4f1d54ec4be7272`).then(resp=>resp.data.results)
            console.log(results)
            setTrend(results)
        }
        getPopular()
    },[])

    return(
        <div className="container">
            <SimpleSlider trend={trend} />
        </div>

    )
}
export default MainPage