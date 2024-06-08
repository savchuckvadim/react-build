import React, { FC, Suspense, lazy, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Complect } from "@/pages/Complect";
import { Konstructor } from "@/pages/KonstructorApp";
import { Price } from "@/pages/Price";
import { RouterState } from "@/store/reducers/router/RouterSlice";
import { back, navigate } from "@/store/reducers/router/RouterThunk";
import { ROUTE, Route } from "@/types/router/router-type";
import Preloader from "@/components/common/Preloader/Preloader";


// const PostContainer = lazy(() => import("@/components/Post/PostContainer"))
// const PostContainer2 = lazy(() => import("@/components/Post/PostContainer2"))

// const Preloader = () => (<div>Loading...</div>)
const Global = () => {
    const dispatch = useAppDispatch()
    const navigateHandler = () => {
        dispatch(
            back()
        )
    }
    return <div
        onClick={navigateHandler}
    >GLOBAL</div>
}

interface CurrentRouteProps {
    currentRoute: ROUTE
}

const CurrentRoute: FC<CurrentRouteProps> = ({ currentRoute }) => {

    let component = <Preloader />


    switch (currentRoute) {

        case ROUTE.KONSTRUCTOR:
            component = <Suspense fallback={<Preloader  />}> <Konstructor /></Suspense>
            // component = <PostContainer />
            break;
        case ROUTE.GLOBAL:

            component = <Preloader />//<Report /> 
            break;
        case ROUTE.COMPLECT:

            component = <Suspense fallback={<Preloader  />}> <Complect /></Suspense>
            break;
        case ROUTE.PRODUCTS:
            component = <div style={{ minHeight: '100%', minWidth: '100%' }}>
                <Suspense fallback={<Preloader  />}>  <Price />  </Suspense>

            </div >

            // component = <PostContainer2 />
            break;
        default:
            component = <Preloader />
    }
    return component

}

interface RouterProps {
    // router: RouterState
    preloader: boolean
    // initialized 
}


export const Router: FC<RouterProps> = ({
    preloader,
}) => {
    const router = useAppSelector(state => state.router) as RouterState
    const currentRoute = router.current.route
    let component = <Preloader />


    useEffect(() => {

        if (router.current && router.current.route &&
            !preloader

        ) {

            component = <CurrentRoute currentRoute={router.current.route} />


        }
    }, [router, preloader])


    if (!preloader) {

        if (router.current && router.current.route) {

            component = <CurrentRoute currentRoute={router.current.route} />


        }
    }

    return component
}