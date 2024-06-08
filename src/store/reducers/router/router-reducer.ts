// import { AppDispatchType, AppStateType, InferActionsTypes } from "@/redux/store";

// // import { setPreloader } from "../preloader/preloader-reducer";
// // import { clearCurrentTemplate } from "../document/document/document-thunk";




// //TYPES
// type StateType = typeof initialState
// type RouterActionsType = InferActionsTypes<typeof routerActions>
// type GetStateType = () => AppStateType


// type Route = {
//     id: number,
//     name: string,
//     route: ROUTE
// }
// type Routes = Array<Route>

// export enum ROUTE {
//     GLOBAL = 'global',
//     KONSTRUCTOR = 'konstructor',
//     PRODUCTS = 'products',
//     TEMPLATE = 'template',
//     DOCUMENT = 'document',
//     REPORT = 'report',
//     CALLING = 'calling',
//     TRANSKRIBATION = 'transcribation',
//     FINISH = 'finish',
// }
// export enum APP_TYPE {
//     KONSTRUCTOR = 'konstructor',
//     REPORT = 'report',
//     CALLING = 'calling',
//     TRANSKRIBATION = 'transcribation',

// }
// let initialState = {


//     routes: [
//         {
//             id: 0,
//             name: 'Начальные настройки',
//             route: ROUTE.GLOBAL
//         } as Route,
//         {
//             id: 1,
//             name: 'Конструктор',
//             route: ROUTE.KONSTRUCTOR
//         } as Route,
//         {
//             id: 2,
//             name: 'Цены и сравнение комплектов',
//             route: ROUTE.PRODUCTS
//         } as Route,
//         {
//             id: 3,
//             name: 'Выбор Шаблона',
//             route: ROUTE.TEMPLATE
//         } as Route,
//         {
//             id: 4,
//             name: 'Документ',
//             route: ROUTE.DOCUMENT
//         } as Route,
//         {
//             id: 5,
//             name: 'Отчет',
//             route: ROUTE.REPORT
//         } as Route,
//         {
//             id: 6,
//             name: 'Звонки',
//             route: ROUTE.CALLING
//         } as Route,
//         {
//             id: 7,
//             name: 'Транскрибация',
//             route: ROUTE.TRANSKRIBATION
//         } as Route,
//         {
//             id: 8,
//             name: 'Финиш',
//             route: ROUTE.FINISH
//         } as Route,

//     ] as Routes,
//     current: {
//         id: 0,
//         name: 'Начальные настройки',
//         route: ROUTE.GLOBAL
//     } as Route,
//     previous: null as Route | null,
//     next: null as Route | null,




// }



// //ACION CREATORS
// export const routerActions = {
//     setCurrentRoute: (id: number) =>
//         ({ type: 'router/SET_CURRENT', id } as const),



// }


// //THUNK

// export const setInitialRoute = (appType: APP_TYPE, isHaveDeal: boolean) => (dispatch: AppDispatchType, getState: GetStateType) => {

//     const state = getState()
//     const generalRow = state.rows.sets.general[0]
//     switch (appType) {

//         case APP_TYPE.KONSTRUCTOR:

//             if (isHaveDeal && generalRow) {
//                 dispatch(navigate(ROUTE.DOCUMENT))
//             } else {
//                 dispatch(navigate(ROUTE.GLOBAL))
//             }
//             break;

//         case APP_TYPE.CALLING:
//             dispatch(navigate(ROUTE.CALLING))
//             break;

//         case APP_TYPE.REPORT:
//             dispatch(navigate(ROUTE.REPORT))
//             break;
//         case APP_TYPE.TRANSKRIBATION:
//             dispatch(navigate(ROUTE.TRANSKRIBATION))
//             break
//         default:
//             break;
//     }

// }

// export const navigate = (route: ROUTE) => (dispatch: AppDispatchType, getState: GetStateType) => {
//     console.log('navigate ' + route)
//     const routes = getState().router.routes
//     const newCurrentRoute = routes.find(r => r.route === route)

//     if (newCurrentRoute) {
//         const routeId = newCurrentRoute.id
//         dispatch(routerActions.setCurrentRoute(routeId))
//     }
//     dispatch(setPreloader(false))
// }

// export const back = () => (dispatch: AppDispatchType, getState: GetStateType) => {
//     const state = getState()
//     const routes = state.router.routes as Array<Route>
//     let current = state.router.current as null | Route
//     let previous = state.router.previous as null | Route
//     let newCurrentRoute = null as null | undefined | Route
//     let newRoute = null as null | ROUTE
//     if (current) {
//         switch (current?.route) {

//             case ROUTE.KONSTRUCTOR:
//                 newRoute = ROUTE.GLOBAL
//                 break;

//             case ROUTE.PRODUCTS:
//                 newRoute = ROUTE.KONSTRUCTOR
//                 break;
//             case ROUTE.DOCUMENT:
//                 dispatch(clearCurrentTemplate())
//                 newRoute = ROUTE.PRODUCTS
//                 break;

//             case ROUTE.REPORT:
//                 newRoute = ROUTE.REPORT
//                 break;
//             case ROUTE.CALLING:
//                 newRoute = ROUTE.CALLING
//                 break;

//             default:
//                 break;
//         }
//     }

//     if (newRoute) {
//         newCurrentRoute = routes.find(r => r.route === newRoute)
//     }

//     if (newCurrentRoute) {
//         const routeId = newCurrentRoute.id
//         dispatch(routerActions.setCurrentRoute(routeId))
//     }
// }
// export const router = (state: StateType = initialState, action: RouterActionsType): StateType => {

//     switch (action.type) {
//         case 'router/SET_CURRENT':
//             const current = state.routes.find(route => route.id == action.id) as Route | undefined
//             const previous = state.current as Route | null
//             const next = state.previous as Route | null

//             if (current) {
//                 return {
//                     ...state,
//                     current,
//                     previous,
//                     next
//                 } as StateType
//             }

//             return state

//         default:
//             return state;
//     }



// }