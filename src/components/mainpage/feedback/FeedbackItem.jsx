// Импорт пользовательского хука
import { useReplacementClass } from '../../../utils'

// Компонент карточки отзыва
const FeedbackItem = ({feedback = 'Отзыв', author = 'Автор'}) => {
    return (
        <div className="feedback-item">
            <p className={`feedback-info ${useReplacementClass('xl-2', [
                {maxWidth: 1536, fontClass: 'lg'},
                {maxWidth:580, fontClass: 'sm'}
            ])} w-bold`}>{feedback}</p>
            <span className={`feedback-author ${useReplacementClass('xl-2', [
                {maxWidth: 1536, fontClass: ''},
                {maxWidth: 580, fontClass: 'sm'}
            ])} w-light`}>{author}</span>
        </div>
    )
}

export default FeedbackItem