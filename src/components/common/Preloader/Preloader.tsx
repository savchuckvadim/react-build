
import { useAppSelector } from '@/hooks/redux'
import { RouterState } from '@/store/reducers/router/RouterSlice'
import { FC } from 'react'
import { ROUTE } from '@/types/router/router-type'
import Gradient from '@/components/common/Backgrounds/Gradient'
import Logo from '@/components/common/Logo/Logo'


const Preloader: FC<{}> = () => {
    const router = useAppSelector(state => state.router) as RouterState
    const currentRoute = router.current.route as ROUTE


    return (
        // <GradientContainer
        //     isComponent={false}
        //     currentRoute={currentRoute}
        //     isActive={true}>
        //     <Logo />
        // </GradientContainer>    
        <Gradient
            isComponent={false}
            currentRoute={currentRoute}
            isActive={true}
        />

    )
}
export default Preloader