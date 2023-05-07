import { NavLink } from "react-router-dom";
import Logo from "../assets/logo-header.png";
import '../style/Header.css'


function Header() {
    return (
    <nav className='navbar'>
        <NavLink to="/">
            <div className='navbar__logo'>
                <img src = {Logo} alt="kasa, location d'appartements" />
            </div>
        </NavLink>
        <div className='navbar__menu'>
            <NavLink to="/" >Accueil</NavLink>
            <NavLink to="/A-Propos" >A propos</NavLink>
        </div>
    </nav>
    );
}

export default Header