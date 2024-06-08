import { useAppDispatch } from '@/hooks/redux';
import { navigate } from '@/store/reducers/router/RouterThunk';
import { ROUTE } from '@/types/router/router-type';




export const KonstructorContainer = ({ }) => {
    // 
    const dispatch = useAppDispatch()
    const navigateHandler = (route: ROUTE) => {
        dispatch(
            navigate(
                route
            )
        )
    }
    return (
        <div>
            <div className="post__list">
                <h1>Конструктор</h1>
                <p
                    onClick={() => navigateHandler(ROUTE.GLOBAL)}
                >Глобал</p>
                <p
                    onClick={() => navigateHandler(ROUTE.COMPLECT)}
                >Комплект</p>

                <p
                    onClick={() => navigateHandler(ROUTE.PRODUCTS)}
                >Прайс</p>
            </div>
        </div>
    );
}

// export default KonstructorContainer;