import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utilities/Slices/appSlice'
import { useSearchParams } from "react-router-dom"
const WatchPage = () => {
    let [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))
    // to get the query params we use searchParams '
    // to get the query , we need to use .get and pass the quey parama

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className='px-5'>
            <iframe width="1200" height="555" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )

}
export default WatchPage