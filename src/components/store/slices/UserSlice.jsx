import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "./actions";


const userSlice = createSlice({
    name: "user",
    initialState: [],

    reducers: {

        addUser( state, action) { 
            state.push(action.payload)
        //    console.log(action.payload)

         },
        removeUser(state, action) { 
            // console.log("hii" + action.payload)
            state.splice(action.payload, 1)
         }, 
        // clearAllUsers( state, action) {
        //     // console.log('hi delete')
        //     return [];
        //  },
    },

    extraReducers(builder){
        builder.addCase(clearAllUsers, () => {
            return [];
        })
    }
});
// console.log(userSlice.actions.addUser())


export default userSlice.reducer;

export const { addUser, removeUser } = userSlice.actions;