import * as classes from '@/App.module.scss'
import { Router } from "@/routes/Router";


const ttest = (a: number) => {
  console.log(a)
}

const App = ({ }) => {
  // const { count } = useAppSelector(state => state.useReducer)

  // const { increment } = userSlice.actions // action creator
  // const dispatch = useAppDispatch()

  // const { users, isLoading, error } = useAppSelector(state => state.useReducer)

  // useEffect(() => {

  //   dispatch(fetchUsers())
  // }, [])

  // ttest(__ENV__)

  return (
    <div>
      <div data-testid='DATA.APP.TEST_ID' className={classes.but} style={{ display: 'flex' }}>
        <h1>Комплект  </h1>
        <h2>
          APP {__APP__}
        </h2>
        ljsbdlj
        <h2>
           {__IN_BITRIX__  &&  'IN_BITRIX'}
        </h2>
        asdlkansd
        <Router preloader={false} />
      </div>

    </div>
  );
}

export default App;