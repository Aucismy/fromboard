import TopLinks from "./TopLinks"

// Навигация по ссылкам
const NavLinks = () => {
    return (
        <div className="nav-links">
            <TopLinks />
            <a className="submit-app purple-button w-bold" href="">Оставить заявку</a>
        </div>
    )
}

export default NavLinks