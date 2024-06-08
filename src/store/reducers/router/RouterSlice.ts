import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { ROUTE, Route } from "../../../types/router/router-type";



export type RouterState = typeof initialState
interface SetCurrentRoutePayload {
    id: number
}

const initialState = {
    routes: [
        {
            id: 0,
            name: 'Начальные настройки',
            route: ROUTE.GLOBAL
        } as Route,
        {
            id: 1,
            name: 'Конструктор',
            route: ROUTE.KONSTRUCTOR
        } as Route,
        {
            id: 2,
            name: 'Цены и сравнение комплектов',
            route: ROUTE.PRODUCTS
        } as Route,
        {
            id: 3,
            name: 'Выбор Шаблона',
            route: ROUTE.TEMPLATE
        } as Route,
        {
            id: 4,
            name: 'Документ',
            route: ROUTE.DOCUMENT
        } as Route,
        {
            id: 5,
            name: 'Отчет',
            route: ROUTE.REPORT
        } as Route,
        {
            id: 6,
            name: 'Звонки',
            route: ROUTE.CALLING
        } as Route,
        {
            id: 7,
            name: 'Транскрибация',
            route: ROUTE.TRANSKRIBATION
        } as Route,
        {
            id: 8,
            name: 'Финиш',
            route: ROUTE.FINISH
        } as Route,
        {
            id: 9,
            name: 'Финиш',
            route: ROUTE.COMPLECT
        } as Route,

    ] as Array<Route>,
    current: {
        id: 1,
        name: 'Конструктор',
        route: ROUTE.KONSTRUCTOR
    } as Route,
    previous: null as Route | null,
    next: null as Route | null,


}


export const routerSlice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        setCurrentRoute(state: RouterState, action: PayloadAction<SetCurrentRoutePayload>) {
            const payload = action.payload
            const current = state.routes.find(route => route.id == payload.id) as Route | undefined
            const previous = state.current as Route | null
            const next = state.previous as Route | null
            if (current) {
                state.current = current
                state.previous = previous
                state.next = next

            }
        },
        // usersFetching(state: UserState, action: PayloadAction<null>) {
        //     state.isLoading = true;
        // },
        // usersFetchingSuccess(state: UserState, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.users = action.payload
        // },
        // usersError(state: UserState, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload
        // },

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

    // extraReducers: (builder) => {
    //     builder.addCase(fetchUsers.fulfilled, (state:UserState, action: PayloadAction<IUser[]>) => {
    //       state.isLoading = false;
    //       state.error = '';
    //       state.users = action.payload;
    //     });
    //     builder.addCase(fetchUsers.pending, (state:UserState, action: PayloadAction<null>) => {
    //       state.isLoading = true;
    //     });
    //     //@ts-ignore
    //     builder.addCase(fetchUsers.rejected, (state:UserState, action:  PayloadAction<string>) => {

    //         state.isLoading = false;
    //       state.error = action.payload;
    //     });
    //   }
});

export default routerSlice.reducer