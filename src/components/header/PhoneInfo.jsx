
// Компонент номера телефона с информацией
const PhoneInfo = ({ classPhoneNumber = 'xl-4 w-black', classPhoneInfo = 'xl-2 light' }) => {
    return (
        <div className="phone-info">
            <span className={classPhoneNumber}>+7 (800) 123 45-67</span>
            <span className={`phone-text ${classPhoneInfo}`}>Звонки по России бесплатны</span>
        </div>
    )
}

export default PhoneInfo