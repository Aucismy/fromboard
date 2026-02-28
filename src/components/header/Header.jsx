// Импорт стилей
import '../../styles/header.css'

// Импорт компонентов
import HeaderTop from "./HeaderTop"
import HeaderBottom from './HeaderBottom'

// Заголовок сайта
const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <HeaderTop />
                    <HeaderBottom />
                </div>
            </header>
        </>
    )
}

export default Header