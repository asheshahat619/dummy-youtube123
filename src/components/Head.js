import "../utilities/styles/Head.css"
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { toogleMenu } from "../utilities/Slices/appSlice";
const Head=()=>{
    const dispatch= useDispatch()
    return(
        <div className="header-main-div ">
            <div className="header-logo cursor-pointer">
                <span onClick={()=>{
                    dispatch(toogleMenu())
                }}><MenuIcon   className="menu-icon"/></span>
                <YouTubeIcon className="menu-icon"/>
            </div>
            <div className="header-search">
                <input type="text" name="searchbar" className="header-searchBar search-icon border border-gray-600" placeholder="Search"></input>
                <SearchIcon className="menu-icon search-icon"/>
            </div>
            <div className="account">
                    <AccountCircleIcon/>
            </div>
        </div>
    )
}
export default Head