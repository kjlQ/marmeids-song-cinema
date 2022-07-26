import React, {useEffect, useState} from 'react'
import axios from 'axios'

interface IResults {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: string
    size: number
    type: string
}

const Video = (props:any) => {
    const [video,setVideo] = useState<string>()
    useEffect(() => {
        const fetchData = async () => {
            const results = await axios.get<any>(`https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=6071c7f776d0e35fb4f1d54ec4be7272`).then(res=>res.data.results)
            // results.map((item:any)=>setVideo((current:any)=>[...current , item.key]))
            // for only one trailer
            results.map((item:any)=>setVideo((current:any)=>item.key))
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