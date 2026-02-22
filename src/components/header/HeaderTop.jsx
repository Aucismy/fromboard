import Logo from "./Logo"
import HeaderRightMenu from "./HeaderRightMenu"

// Верхний заголовок страницы
const HeaderTop = () => {
    return (
        <div className="header-top">
            <Logo />
            <HeaderRightMenu />
        </div>
    )
}

export default HeaderTop