import MainHero from "./mainhero/MainHero"
import OurAdvantages from "./ourdvantages/OurAdvantages"

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="container">
                <MainHero />
                <OurAdvantages />
            </div>
        </div>
    )
}

export default MainPage