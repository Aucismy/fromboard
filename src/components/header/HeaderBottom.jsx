// Кастомный хук
import { useWindowWidth } from "../../utils"

// Компоненты
import NavLinks from "./NavLinks"
import DeliveryCost from "./DeliveryCost"

// Нижний заголовок
const HeaderBottom = () => {
    return (
        <div className="header-bottom">
            <NavLinks />
            {useWindowWidth() < 1330 && (
                <DeliveryCost />
            )}
        </div>
    )
}

export default HeaderBottom