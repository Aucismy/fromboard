import Header from "../header/Header"
import MainPage from "../mainpage/MainPage"

const App = () => {

    const onClickOverlay = () => {
        
    }

    return (
        <div className="fromboard-delivery">
            <Header />
            <MainPage />


            <div id="overlay" onClick={onClickOverlay}></div>
        </div>
    )
}

export default App