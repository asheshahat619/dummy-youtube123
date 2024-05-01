import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer"
import SideBar from "./SideBar"
import { useSelector } from "react-redux";

const Body=()=>{
    const isMenuOpenSelector=useSelector((store)=>store.app.isMenu)

    return(
        <div className="flex">
            {isMenuOpenSelector&& <SideBar/>}
            <Outlet/>
        </div>
    )
}
export default Body