import { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utilities/Slices/appSlice'
import { useSearchParams } from "react-router-dom"
import { GET_VIDEO_BY_VIDEO_ID, GOOGLE_API_KEY, PASS_KEY } from '../utilities/constant'
const WatchPage = () => {
    let [searchParams] = useSearchParams();
    const [videoDetails,setVideoDetails]=useState([])
    // to get the query params we use searchParams '
    // to get the query , we need to use .get and pass the quey parama

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenu())
        getVideoDetails()
    }, [])
    const getVideoDetails=async ()=>{
        const videoDetailsByVideoId= await fetch(GET_VIDEO_BY_VIDEO_ID+searchParams.get("v")+PASS_KEY+GOOGLE_API_KEY)
        const videoDetailsByVideoIdJson=await videoDetailsByVideoId.json()
        console.log(videoDetailsByVideoIdJson)
        setVideoDetails(videoDetailsByVideoIdJson?.items[0]?.snippet)
    }
    return (
        <div>
            <div className='p-5 rounded-lg'>
                <iframe className='rounded-lg' width="1200" height="555" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className=' font-bold  ml-5     '>
                {videoDetails?.title}
            </div>
        </div>
    )

}
export default WatchPage