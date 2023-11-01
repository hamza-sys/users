import { createSlice } from "@reduxjs/toolkit";

const userList = [
    {
        id: 1,
        name: 'hamza',
        email: 'a@gmail.com',
    },
    {
        id: 2,
        name: 'ali',
        email: 'b@gmail.com',
    },
    {
        id: 3,
        name: 'usman',
        email: 'c@gmail.com',
    }
]

const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const {id, name, email} = action.payload;
            
            const user = state.find(u => u.id == id)

            if (user){
                user.name = name;
                user.email = email
            }
        },
        deleteUser: (state, action) => {
            const id = action.payload;
            return state.filter(u => u.id != id)
        }
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions

export default userSlice.reducer;