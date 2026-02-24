import heroPicture from '../../resources/img/mainhero_picture.png'

const MainHeroInfo = () => {
    return (
        <div className="main-hero-info">
            <h1>Без проблемная доставка купленных вещей из США, Европы и Азии в Россию</h1>
            <p>Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис позволяет вам легко и удобно заказывать товары со всего мира и получать их в России</p>
            <img src={heroPicture} alt="main_hero_picture" />
        </div>
    )
}

export default MainHeroInfo