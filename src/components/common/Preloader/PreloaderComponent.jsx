// import './Preloader.css'
import Logo from '../Logo/Logo'
import Gradient from '../Backgrounds/Gradient'
import GradientContainer from '../Backgrounds/GradientContainer'

const PreloaderComponent = ({ currentRoute }) => {

    return (
        <GradientContainer
            isComponent={true}
            currentRoute={currentRoute}
            isActive={true}>
            <Logo />
        </GradientContainer>
    )
}
export default PreloaderComponent