// Импорт компонентов
import Header from "../header/Header"
import MainPage from "../mainpage/MainPage"
import Footer from "../footer/Footer"

const App = () => {
    return (
        <div className="fromboard-delivery">
            <Header />
            <MainPage />
            <Footer />
            <div id="overlay"></div>
        </div>
    )
}

export default App