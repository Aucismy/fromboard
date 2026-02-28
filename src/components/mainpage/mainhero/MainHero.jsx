// Импорт стиля
import '../../../styles/mainhero.css'

// Импорт компонентов
import MainHeroInfo from "./MainHeroInfo"
import MainShippingCalc from './MainShippingCalc'

// Главная информация о сайте
const MainHero = () => {
    return (
        <div className="main-hero">
                <MainHeroInfo />
                <MainShippingCalc />
        </div>
    )
}

export default MainHero