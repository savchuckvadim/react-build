import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";
import { userSlice } from "./UserSlice";
import { AppDispatch, AppStore } from "./store";
import axios from "axios";

// export const fetchUsers = () => async (dispatch: AppDispatch, getState: AppStore) => {

//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>(
//             'https://jsonplaceholder.typicode.com/users'
//         )
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (error) {
//         dispatch(userSlice.actions.usersFetchingSuccess(error.message))
//     }

// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>(
                'https://jsonplaceholder.typicode.com/users'
            )
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей') 
        }
      
    }
)