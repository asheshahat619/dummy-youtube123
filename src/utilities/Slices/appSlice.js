import { createSlice } from "@reduxjs/toolkit";


const appSlice=createSlice({
    name:'appSlice',
    initialState:{
        isMenu:true
    },
    reducers:{
        toogleMenu:(state)=>{
            state.isMenu=!state.isMenu
        },
        closeMenu:(state)=>{
            state.isMenu=false
        }
    }
})
export const {toogleMenu,closeMenu}=appSlice.actions
export default appSlice.reducer