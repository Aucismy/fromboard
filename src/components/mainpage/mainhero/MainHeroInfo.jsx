// Импорт картинки
import heroPicture from '../../../resources/img/mainhero_picture.png'

// Импорт пользовательского хука
import { useReplacementClass } from '../../../utils'

// Главная информация
const MainHeroInfo = () => {
    return (
        <div className="main-hero-info">
            <div className="hero-info">
                <h1 className={`${useReplacementClass('xl-4', [
                    {maxWidth: 1536, fontClass: 'xl-3'}
                ])} w-black`}>Без проблемная доставка купленных вещей из США, Европы и Азии в Россию</h1>
                <p className='xl'>Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис позволяет вам легко и удобно заказывать товары со всего мира и получать их в России</p>
            </div>
            <img src={heroPicture} alt="main_hero_picture" />
        </div>
    )
}

export default MainHeroInfo