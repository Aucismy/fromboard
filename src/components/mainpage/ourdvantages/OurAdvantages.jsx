// Стили компонента
import '../../../styles/ouradvantage.css'

// Импорт компонентов
import Advantage from "./Advantage"

// Импорт изображений
import img1 from '../../../resources/img/Board.png'
import img2 from '../../../resources/img/Package.png'
import img3 from '../../../resources/img/Delivery.png'
import img4 from '../../../resources/img/best support.png'
import img5 from '../../../resources/img/clear info.png'
import img6 from '../../../resources/img/garantee.png'

const OurAdvantages = () => {
    return (
        <div className="our-advantages">
            <h2 className='xl-3 w-black'>Наши преимущества</h2>
            <div className="list-advantages">
                <Advantage imgAdv={img1} headerAdv='Растоможка груза' descAdv='Мы берём на себя все формальности и бумажную волокиту, связанную с растаможкой груза'/>
                <Advantage imgAdv={img2} headerAdv='Надёжная упаковка' descAdv='Все товары упаковываются нашими специалистами с особым вниманием к деталям, гарантируя, что они дойдут в безопасности и в отличном состоянии'/>
                <Advantage imgAdv={img3} headerAdv='Быстро и выгодно' descAdv='Мы предлагаем быструю и выгодную доставку, чтобы вы могли насладиться покупками как можно скорее.'/>
                <Advantage imgAdv={img4} headerAdv='Удобный сервис' descAdv='Стремимся сделать процесс доставки максимально удобным для вас, чтобы опыт остался приятным и беззаботным'/>
                <Advantage imgAdv={img5} headerAdv='Прозрачность работы' descAdv='Мы предоставляем полный контроль над каждым этапом доставки, от момента заказа до момента прибытия заказа'/>
                <Advantage imgAdv={img6} headerAdv='Страхование груза' descAdv='Наше страхование обеспечивает полную защиту и покрытие почти все неприятные и неожиданные ситуации'/>
            </div>
        </div>
    )
}

export default OurAdvantages