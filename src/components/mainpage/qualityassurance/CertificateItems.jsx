// Импорт стандартной картинки сертификата
import defaultCertified from '../../../resources/img/certified.png'

// Компонент карточки сертификата
const CertificateItems = ({imgCert = defaultCertified, infoCert = ''}) => {
    return (
        <div className="certificate-items">
            <img className='sert-img' src={imgCert} alt="certificate"/>
            <span className='lg w-black'>{infoCert}</span>
        </div>
    )
}

export default CertificateItems