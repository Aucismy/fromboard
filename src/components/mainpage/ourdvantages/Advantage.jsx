// Импорт картинки по умолчанию
import defaultPicture from '../../../resources/img/Board.png'
// Импорт пользовательского хука
import { useReplacementClass } from '../../../utils'

// Карточка преимущества
const Advantage = ({imgAdv = defaultPicture, headerAdv = 'Преимущество', descAdv = 'Описание преимущества'}) => {
    return (
        <div className="advantage">
            <img src={imgAdv} alt="advantage img" />
            <div className="advantage-info">
                <h3 className={`${useReplacementClass('xl-2', [
                    {maxWidth: 1024, fontClass: 'xl'}
                ])}  w-black`}>{headerAdv}</h3>
                <p className='sm'>{descAdv}</p>
            </div>
        </div>
    )
}

export default Advantage