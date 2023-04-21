import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";


function Header() {
    return (
    <nav className='header'>
        <NavLink to="/">
            <div className='header__logo'>
                <img src = {Logo} alt="kasa, location d'appartements" />
            </div>
        </NavLink>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/A-Propos">A propos</NavLink>
    </nav>
    );
}

export default Header