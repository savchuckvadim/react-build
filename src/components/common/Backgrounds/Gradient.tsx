// import { IS_PROD } from '@/appglobal/global-consts';
import './Gradient.css'
import { FC, useEffect, useRef } from 'react';
import Logo from '../Logo/Logo';
// import { bitrixAPI } from '@/services/bitrix-general-api';
import { ROUTE } from '@/types/router/router-type';


interface GradientProps {
    isResized?: boolean
    isActive?: boolean
    isComponent?: boolean
    currentRoute?: ROUTE
 
}

const Gradient: FC<GradientProps> = ({ isResized, isActive, isComponent, currentRoute }) => {

    const scrollRef = useRef(null);
    useEffect(() => {
        if (!isComponent) {
            if (currentRoute !== ROUTE.CALLING) {


                if (!isResized) {
                    const asyncFunction = async () => {

                        // IS_PROD && await bitrixAPI.getResize(true)
                        const current = scrollRef.current
                        if (current) {
                            current.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                    asyncFunction()
                }

                const timer = setTimeout(() => {

                    const current = scrollRef.current
                    if (current) {
                        current.scrollIntoView({ behavior: 'smooth' });

                    }

                }, 400);

                return () => clearTimeout(timer);

            }
        }


    }, []);



    return (
        <div
            ref={scrollRef}
            // className={isActive ? 'newgradient__containerApril' : 'monohrom__containerApril'}>
            className={`monohrom__containerApril ${isComponent ? 'cont__component' : 'cont__full'}`}>

            <div className={`content__wrapper ${isComponent ? 'wrap__component' : 'wrap__full'}`}>

                <div className="newchildren__wrapper"

                >
                 
                    <Logo />
                </div>
                {isActive && <p className='loader__title'>Загрузка  . . .</p>}
            </div>

        </div>
    )
}
export default Gradient