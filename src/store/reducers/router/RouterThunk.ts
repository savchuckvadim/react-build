
import { APP_TYPE } from "../../../types/app/app-type";
import { ROUTE, Route } from "../../../types/router/router-type";
import { routerSlice } from "./RouterSlice";
import { AppDispatch, GetState } from "../../store";

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
export const setInitialRoute = (appType: APP_TYPE, isHaveDeal: boolean) => (dispatch: AppDispatch, getState: GetState) => {

    const state = getState()
    // const generalRow = state.rows.sets.general[0]
    switch (appType) {

        case APP_TYPE.KONSTRUCTOR:

            // if (isHaveDeal && generalRow) {
            //     dispatch(navigate(ROUTE.DOCUMENT))
            // } else {
            //     dispatch(navigate(ROUTE.GLOBAL))
            // }
            break;

        case APP_TYPE.CALLING:
           dispatch(
            navigate(ROUTE.CALLING)
           ) 
            break;

        case APP_TYPE.REPORT:
            dispatch(
                navigate(ROUTE.CALLING)
               ) 
            break;
        case APP_TYPE.TRANSKRIBATION:
            dispatch(
                navigate(ROUTE.CALLING)
               ) 
            break
        default:
            break;
    }

}

export const navigate = (route: ROUTE) => (dispatch: AppDispatch, getState: GetState) => {
    console.log('navigate ' + route)
    const routes = getState().router.routes as Array<Route>
    const newCurrentRoute = routes.find((r: Route) => r.route === route) as Route | undefined

    if (newCurrentRoute) {
        const routeId = newCurrentRoute.id 
        dispatch(routerSlice.actions.setCurrentRoute({id: routeId}))
    }
    // dispatch(setPreloader(false))
}
export const back = () => (dispatch: AppDispatch, getState: GetState) => {
    const state = getState()
    const routes = state.router.routes as Array<Route>
    let current = state.router.current as null | Route
    let previous = state.router.previous as null | Route
    let newCurrentRoute = null as null | undefined | Route
    let newRoute = null as null | ROUTE
    if (current) {
        switch (current?.route) {

            case ROUTE.KONSTRUCTOR:
                newRoute = ROUTE.GLOBAL
                break;

            case ROUTE.PRODUCTS:
                newRoute = ROUTE.KONSTRUCTOR
                break;
            // case ROUTE.DOCUMENT:
            //     dispatch(clearCurrentTemplate())
            //     newRoute = ROUTE.PRODUCTS
            //     break;

            case ROUTE.REPORT:
                newRoute = ROUTE.REPORT
                break;
            case ROUTE.CALLING:
                newRoute = ROUTE.CALLING
                break;

             case ROUTE.GLOBAL:
                 newRoute = ROUTE.KONSTRUCTOR
                 if(state.router.previous){
                    newRoute = state.router.previous.route
                 }
                 break;

            default:
                break;
        }
    }

    if (newRoute) {
        newCurrentRoute = routes.find(r => r.route === newRoute)
    }

    if (newCurrentRoute) {
        const routeId = newCurrentRoute.id
        dispatch(routerSlice.actions.setCurrentRoute({id: routeId}))
    }
}
// export const fetchUsers = createAsyncThunk(
//     'user/fetchAll',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get<IUser[]>(
//                 'https://jsonplaceholder.typicode.com/users'
//             )
//             return response.data
//         } catch (error) {
//             return thunkAPI.rejectWithValue('Не удалось загрузить пользователей') 
//         }
      
//     }
// )