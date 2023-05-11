import { createSlice } from "@reduxjs/toolkit";
// import { useReducer } from "react";
// const [state, dispatch] = useReducer(reducer, initialState)
// const initialState = {data :{name : "", password: ""}}
// function reducer(state, action) {
//     switch(action.type){
//         case "login":
//             return {state.data: action.payload}
//         default :
//         return state
//     }
// }

 const userSlice = createSlice({
    name : "userInfo",
    initialState : {
        data : {name : "", password : ""}
    },
    reducers : {
    loginUser : (state, action)=>{
         state.data = action.payload
    }
}
})

export const {loginUser} = userSlice.actions
export default userSlice.reducer