// Компонент формы калькуляции
const MainShippingCalc = () => {
    return (
        <div className="main-shipping-calc">
            {/* Форма расчета */}
            <form action="" className="main-form">
                <div className="form-info">
                    <h2 className="xl-3 w-bold">Калькулятор доставки</h2>
                    <p>Посчитайте, сколько будет стоить перевозка<br /> покупки из зарубежа</p>
                </div>
                <div className="enter-data">
                    <input className="form-input-name" type="text" placeholder="Имя" />
                    <input className="form-input-mail" type="text" placeholder="Почта" />
                    <input className="form-input-square" type="text" placeholder="Общая площадь, м²" />
                    <input className="form-input-country" type="text" placeholder="Страна покупки" />
                    <input className="form-input-area" type="text" placeholder="Область доставки" />
                    <input className="form-input-phone" type="text" placeholder="Телефон" />
                    <input className="form-input-weight" type="text" placeholder="Вес, кг" />
                    <input className="form-input-sity-buy" type="text" placeholder="Город покупки" />
                    <input className="form-input-sity-delivery" type="text" placeholder="Город доставки" />
                </div>
                <input className="form-submit purple-button w-bold" type="submit" value="Заказать расчёт" />
            </form>
        </div>
    )
}

export default MainShippingCalc