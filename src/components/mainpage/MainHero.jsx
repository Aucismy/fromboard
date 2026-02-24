import '../../styles/mainhero.css'
import MainHeroInfo from "./MainHeroInfo"
import MainShippingCalc from './MainShippingCalc'

const MainHero = () => {
    return (
        <div className="main-hero">
            <div className="container">
                <MainHeroInfo />
                <MainShippingCalc />
            </div>
        </div>
    )
}

export default MainHero