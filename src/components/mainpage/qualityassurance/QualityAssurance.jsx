// Импорт стилей
import '../../../styles/qualityassurance.css'

// Импорт компонентов
import CertificateItems from "./CertificateItems"

// Импорт картинок
import sert1 from '../../../resources/img/certificate.png'
import sert2 from '../../../resources/img/certificate2.png'
import sert3 from '../../../resources/img/certificate3.png'
import sert4 from '../../../resources/img/certificate4.png'

// Компонент гарантии качества
const QualityAssurance = () => {
    return (
        <div className="quality-assurance" id='quality'>
            <div className="quality-info">
                <h2 className="xl-3 w-black">Гарантии качества</h2>
                <p>Наши гарантии качества включают в себя полный спектр документов, необходимых для ввоза и вывоза товаров, а также для успешного бизнеса на мировом рынке.
                    Мы предоставляем вам надёжность и уверенность</p>
            </div>
            <div className="list-certificate">
                <CertificateItems imgCert={sert1} infoCert='Свидетельство о регистрации в РФ'/>
                <CertificateItems imgCert={sert2} infoCert='Свидетельство о регистрации в США'/>
                <CertificateItems imgCert={sert3} infoCert='Свидетельство о регистрации в Китае'/>
                <CertificateItems imgCert={sert4} infoCert='Свидетельство о регистрации в Великобритнии'/>
            </div>
            <a className="more-document-btn purple-button w-black" href="">Показать больше документов</a>
        </div>
    )
}
export default QualityAssurance