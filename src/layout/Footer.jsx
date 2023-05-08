import '../style/Footer.css';
import Logo from "../assets/logo-footer.png";
import { NavLink } from "react-router-dom";


function Footer() {
    return (
        <div className='footer'>
            <NavLink to="/">
                <div className='footer__logo'>
                    <img src = {Logo} alt="kasa, location d'appartements" />
                </div>
            </NavLink>
            <div className='footer__text'>
                © 2020 Kasa. All rights reserved
            </div>
        </div>
    );
}

export default Footer