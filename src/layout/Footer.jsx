import '../style/Footer.css';
import Logo from "../assets/logo-footer.png";


function Footer() {
    return (
        <div className='footer'>
            <div className='footer__logo'>
                <img src = {Logo} alt="kasa, location d'appartements" />
            </div>
            <div className='footer__text'>
                © 2020 Kasa. All rights reserved
            </div>
        </div>
    );
}

export default Footer