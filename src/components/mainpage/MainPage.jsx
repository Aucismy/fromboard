import MainHero from "./mainhero/MainHero"
import OurAdvantages from "./ourdvantages/OurAdvantages"
import QualityAssurance from "./qualityassurance/QualityAssurance"
import Feedback from "./feedback/Feedback"

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="container">
                <MainHero />
                <OurAdvantages />
                <QualityAssurance />
                <Feedback />
            </div>
        </div>
    )
}

export default MainPage