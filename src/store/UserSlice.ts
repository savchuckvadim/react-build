import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser"
import { fetchUsers } from "./ActionCreators";
import { AppStore } from "./store";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string
    count: number
}

const initialState = {
    users: [] as IUser[],
    isLoading: false as boolean,
    error: '' as string,
    count: 0 as number
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment(state: UserState, action: PayloadAction<number>) {
            state.count += action.payload
        },
        usersFetching(state: UserState, action: PayloadAction<null>) {
            state.isLoading = true;
        },
        usersFetchingSuccess(state: UserState, action: PayloadAction<IUser[]>) {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload
        },
        usersError(state: UserState, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },

    },

    //@ts-ignore
    // extraReducers: {
    //     [fetchUsers.fulfilled.type]: (state: UserState, action: PayloadAction<IUser[]>) => {
    //         state.isLoading = false;
    //         state.error = '';
    //         state.users = action.payload
    //     },
    //     [fetchUsers.pending.type]: (state: UserState, action: PayloadAction<null>) => {
    //         state.isLoading = true;
    //     },
    //     [fetchUsers.rejected.type]: (state: UserState, action: PayloadAction<string>) => {
    //         state.isLoading = false;
    //         state.error = action.payload
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state:UserState, action: PayloadAction<IUser[]>) => {
          state.isLoading = false;
          state.error = '';
          state.users = action.payload;
        });
        builder.addCase(fetchUsers.pending, (state:UserState, action: PayloadAction<null>) => {
          state.isLoading = true;
        });
        //@ts-ignore
        builder.addCase(fetchUsers.rejected, (state:UserState, action:  PayloadAction<string>) => {
         
            state.isLoading = false;
          state.error = action.payload;
        });
      }
});

export default userSlice.reducer