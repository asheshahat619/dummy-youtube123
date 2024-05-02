import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
const VideoCard=({info})=>{
    const {title,thumbnails,channelTitle}=info?.snippet
    const {viewCount,likeCount}=info?.statistics
 
    return(
        <div className='p-2 m-2 w-72 shadow-lg min-h-16'>
            <img className=' rounded-lg ' src={thumbnails?.medium?.url}></img>
            <div className='font-bold'>{title}</div>
            <div>{channelTitle  }</div>
            <div>{viewCount}</div>
            <ThumbUpIcon />
            <span>{likeCount}</span>
            <VisibilityIcon/>
            <span>{viewCount}</span>
        </div>
    )
}
export default VideoCard;