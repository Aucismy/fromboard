import MainHero from "./mainhero/MainHero"
import OurAdvantages from "./ourdvantages/OurAdvantages"
import QualityAssurance from "./qualityassurance/QualityAssurance"

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="container">
                <MainHero />
                <OurAdvantages />
                <QualityAssurance />
            </div>
        </div>
    )
}

export default MainPage