import '../../styles/footer.css'
import TopFooter from "./TopFooter"
import BottomFooter from './BottomFooter'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <TopFooter />
                <BottomFooter />
            </div>
        </footer>
    )
}

export default Footer