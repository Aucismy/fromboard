// Импорт хуков стандартных и кастомных
import { useWindowWidth, useReplacementClass } from "../../utils"
import { useState, useRef, useEffect } from "react"

// Импорт компонентов
import DeliveryCost from "./DeliveryCost"
import PhoneInfo from "./PhoneInfo"

const HeaderRightMenu = () => {

    // Переменная состояния кнопки меню
    const [stateBurger, setStateBurger] = useState(false)

    // Переменная ширины экрана
    const widthScreen = useWindowWidth()

    // Автоматическое закрытие меню, если ширина экрана больше необходимого и оно открыто
    useEffect(() => {
        if (widthScreen > 758 && stateBurger == true) {
            onClickBurger()
        }
    }, [widthScreen])

    // Функция для обработки нажатия кнопки меню
    const onClickBurger = () => {

        // Переменная нижнего заголовка
        const headerBottomElement = document.querySelector('.header-bottom')

        // Переменная затемнения
        const overlayElement = document.querySelector('#overlay')

        setStateBurger(!stateBurger)

        // Открытие и закрытие скрытого меню
        if (!stateBurger == true) {
            headerBottomElement.style.borderRadius = '0 0 16px 16px'
            headerBottomElement.style.display = 'flex'
            overlayElement.style.display = 'block'
        }
        else {
            headerBottomElement.style.borderRadius = ''
            headerBottomElement.style.display = ''
            overlayElement.style.display = ''
        }
    }

    // Переменная класса номера
    const classPhoneNumber = `phone-number ${useReplacementClass('xl-4', [
        { maxWidth: 1536, fontClass: 'xl-3' },
        { maxWidth: 1024, fontClass: 'xl-2' },
        { maxWidth: 758, fontClass: 'xl' }
    ])} w-black`

    // Переменная класса информации под номером
    const classPhoneInfo = `phone-info ${useReplacementClass('xl-2', [
        { maxWidth: 1536, fontClass: 'xl' },
        { maxWidth: 1024, fontClass: '' }
    ])} light`

    return (
        <div className="header-right-menu">
            {widthScreen >= 1330 && (
                <>
                    <DeliveryCost />
                    <hr />
                </>
            )}

            {widthScreen > 580 && (
                <PhoneInfo classPhoneNumber={classPhoneNumber} classPhoneInfo={classPhoneInfo}/>
            )}

            {/* Закрытое меню */}
            {widthScreen <= 758 && stateBurger === false && (
                <svg className="burger-menu" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" tabIndex={0} onClick={onClickBurger}>
                    <g clip-path="url(#clip0_1122_2373)">
                        <rect width="24" height="4" rx="2" fill="#currentColor" />
                        <rect y="6" width="24" height="4" rx="2" fill="#currentColor" />
                        <rect y="12" width="24" height="4" rx="2" fill="#currentColor" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1122_2373">
                            <rect width="24" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            )}

            {/* Открытое меню */}
            {widthScreen <= 758 && stateBurger === true && (
                <svg className="burger-close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" tabIndex={0} onClick={onClickBurger}>
                    <rect width="24.1335" height="4.02522" rx="2.01261" transform="matrix(0.703941 0.710258 0.703941 -0.710258 0 2.85895)" fill="#currentCollor" />
                    <rect width="24.1332" height="4.02516" rx="2.01258" transform="matrix(0.704164 -0.710038 -0.704164 -0.710038 3.00635 19.9939)" fill="#currentColor" />
                </svg>
            )}
            
        </div>
    )
}

export default HeaderRightMenu