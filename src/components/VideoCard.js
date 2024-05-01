import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
const VideoCard=({info})=>{
    console.log(info)
    const {title,thumbnails,channelTitle}=info?.snippet
    const {viewCount,likeCount}=info?.statistics
    const thumsUpIconStyle={
        fontSize:"1px !important"
    }
    return(
        <div className='p-2 m-2 w-72 shadow-lg min-h-16'>
            <img className=' rounded-lg ' src={thumbnails?.medium?.url}></img>
            <div>{title}</div>
            <div>{channelTitle  }</div>
            <div>{viewCount}</div>
            <ThumbUpIcon style={thumsUpIconStyle}/>
            <span>{likeCount}</span>
            <VisibilityIcon/>
            <span>{viewCount}</span>
        </div>
    )
}
export default VideoCard;