// Импорт компонентов
import MainHero from "./mainhero/MainHero"
import OurAdvantages from "./ourdvantages/OurAdvantages"
import QualityAssurance from "./qualityassurance/QualityAssurance"
import Feedback from "./feedback/Feedback"
import OtherQuestions from "./otherquestions/OtherQuestions"

// Главная страница сайта
const MainPage = () => {
    return (
        <div className="main-page">
            <div className="container">
                <MainHero />
                <OurAdvantages />
                <QualityAssurance />
                <Feedback />
                <OtherQuestions />
            </div>
        </div>
    )
}

export default MainPage