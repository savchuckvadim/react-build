import { combineReducers, configureStore } from '@reduxjs/toolkit';
import useReducer from './UserSlice';
import { postAPI } from '../services/PostService';
import routerSlice from './reducers/router/RouterSlice';


const rootReducer = combineReducers({
    useReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    router: routerSlice
});

export const setupStore = () => {

    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware),
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type GetState = AppStore['getState'];

