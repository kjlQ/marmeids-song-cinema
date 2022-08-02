import React, {FC, useEffect, useState} from 'react'
import axios from 'axios'
import {IVideoResults} from '../../types/types'

interface IVideo {
    id?:string
}

const Video:FC<IVideo> = ({id}) => {
    const [video,setVideo] = useState<string>()
    useEffect(() => {
        const fetchData = async () => {
            const results = await axios.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=6071c7f776d0e35fb4f1d54ec4be7272`).then(res=>res.data.results)
            // results.map((item:any)=>setVideo((current:any)=>[...current , item.key]))
            // for only one trailer
            results.map((item:IVideoResults)=>setVideo((item.key)))
        }
        fetchData()
    },[])
    return (
        <div className='videos'>
            <h1>Official Trailer</h1>
            {/*{video.map((item:string)=><iframe width="715" height="400" src={`https://www.youtube.com/embed/${item}`}></iframe>)}*/}
            {video ?
                <iframe width="715" height="400" src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1`}>

                </iframe>
            :
            <h1>No official trailer</h1>
            }
        </div>
    )
}
export default Video