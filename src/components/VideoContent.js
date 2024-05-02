import {useEffect, useState} from "react"
import { GET_VIDEOS } from "../utilities/constant"
import {Link} from "react-router-dom"
import VideoCard from "./VideoCard"
const VideoContent=()=>{
    const [videos,setVideos]=useState([])
    useEffect(()=>{
        getVidoes()
    },[])
    const getVidoes=async ()=>{
        const videoList=await fetch(GET_VIDEOS)
        const jsonVideoList=await videoList.json()
        setVideos(jsonVideoList.items)
    }
    return(
        <div className="flex flex-wrap justify-center">
            {videos.map(video=>  <Link to={"/watch?v="+ video.id} key={video.id} info={video}><VideoCard info={video}  /></Link> )}
        </div>
    )
}
export default VideoContent