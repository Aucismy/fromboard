// Импорт кастомных хук
import { useReplacementClass, useWindowWidth } from "../../utils"

const PhoneInfo = () => {

    // Переменная для определения класса для элемента .phone-info
    const classPhoneInfo = `phone-info ${useReplacementClass('xl-2', [
                    { maxWidth: 1536, fontClass: 'xl' },
                    { maxWidth: 1024, fontClass: '' }
                ])} light`

    return (
        <div className="phone-info">
            <span className={`phone-number ${useReplacementClass('xl-4', [
                { maxWidth: 1536, fontClass: 'xl-3' },
                { maxWidth: 1024, fontClass: 'xl-2' },
                { maxWidth: 758, fontClass: 'xl' }
            ])} w-black`}>+7 (800) 123 45-67</span>
            {useWindowWidth() > 758 && (
                <span className={classPhoneInfo}>Звонки по России бесплатны</span>
            )}
        </div>
    )
}

export default PhoneInfo