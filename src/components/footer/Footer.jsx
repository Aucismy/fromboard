// Импорт стилей
import '../../styles/footer.css'

// Импорт компонентов
import TopFooter from "./TopFooter"
import BottomFooter from './BottomFooter'

// Футер сайтва
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <TopFooter />
                <BottomFooter />
            </div>
        </footer>
    )
}

export default Footer