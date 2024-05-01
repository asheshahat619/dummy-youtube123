import "../utilities/styles/SideBar.css"
import HomeIcon from '@mui/icons-material/Home';
import PreviewIcon from '@mui/icons-material/Preview';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import { useNavigate } from "react-router-dom";
const SideBar=()=>{
    const navigate=useNavigate()
    return(
        <div className="side-bar-div shadow-lg  p-5  w-48">
            <div className="flex  flex-col justify-center  items-center">
                    <span className=" cursor-pointer" onClick={()=>{
                        navigate("/")
                    }}><HomeIcon className="text-base"/></span>
                    <div>Home</div>
                    <SlowMotionVideoIcon/>
                    <div>Shorts</div>
                    <SubscriptionsIcon/>
                    <div>Subscriptions</div>
                    <PreviewIcon/>
                    <div>You</div>
            </div>
            <div className="flex  flex-col justify-center  items-center">
            <h1 className="font-bold">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies  </li>
            
            </ul>
            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies  </li>
            
            </ul>   
            </div>
        </div>
    )
}
export default SideBar
