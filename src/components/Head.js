import "../utilities/styles/Head.css"
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { toogleMenu } from "../utilities/Slices/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTION_KEY } from "../utilities/constant";
const Head=()=>{
    const dispatch= useDispatch();
    const [search,setSearch]=useState("")
    const [suggestions,setSuggestions]=useState([])
    useEffect(()=>{
        const timer=setTimeout(()=>{getSuggestions()},300)

        return ()=>{
            clearTimeout(timer)
        }

    },[search])
    const getSuggestions=async ()=>{
        const suggestions=await fetch(YOUTUBE_SUGGESTION_KEY+search)
        const  jsonSuggestions=await suggestions.json()
        setSuggestions(jsonSuggestions[1])
    }
    return(
           
                  <div className="header-main-div ">
            <div className="header-logo cursor-pointer">
                <span onClick={()=>{
                    dispatch(toogleMenu())
                }}><MenuIcon   className="menu-icon"/></span>
                <YouTubeIcon className="menu-icon"/>
            </div>
            <div className="header-search">
                <div>
                <input onChange={(e)=>{
                    setSearch(e?.target?.value)
                }} type="text" name="searchbar" className="header-searchBar search-icon border border-gray-600" placeholder="Search"></input>
                <SearchIcon className="menu-icon search-icon"/>
                <div className="absolute bg-white shadow-lg w-1/12">
              {suggestions.map(suggestion=><li className=" list-none" onClick={()=>{
                console.log(suggestion)
              }} key={suggestion}>{suggestion}</li>)}
          </div>
                </div>
             
            </div>
            <div className="account">
                    <AccountCircleIcon/>
            </div>
          
            </div>
          

           
    )
}
export default Head