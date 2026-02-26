// Импорт стилей
import '../../../styles/otherquestions.css'

// Компонент для вопросов
const OtherQuestions = () => {
    return (
        <div className="other-questions">
            <h2 className='xl-3 w-black'>Остались вопросы?</h2>
            <form action="" className="form-other-questions">
                <input className='foq-name' type="text" placeholder="Имя"/>
                <input className='foq-mail' type="text" placeholder="Почта"/>
                <input className='foq-phone' type="text" placeholder="Телефон"/>
                <input className='foq-theme' type="text" placeholder="Тема вопроса"/>
                <textarea className='foq-message' name="message" id="message" placeholder="Сообщение..."></textarea>
                <input className='foq-button purple-button w-bold' type="submit" value="Оставить заявку" />
            </form>
        </div>
    )
}

export default OtherQuestions