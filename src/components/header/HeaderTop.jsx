import { useReplacementClass } from "../../utils"
import Logo from "./Logo"
import HeaderRightMenu from "./HeaderRightMenu"

// Верхний заголовок страницы
const HeaderTop = () => {

    const classTextLogo = `logo-text ${useReplacementClass("xl-2", [
                {maxWidth: 758, fontClass: 'lg'}
            ])} w-black`

    return (
        <div className="header-top">
            <Logo classTextLogo={classTextLogo}/>
            <HeaderRightMenu />
        </div>
    )
}

export default HeaderTop