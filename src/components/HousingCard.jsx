import '../style/HousingCard.css';
import { NavLink } from "react-router-dom";


function HousingCard({id, title, cover}) {
    return (
        <div className='card'>
            <NavLink to={`/Fiche-Logement/${id}`}>
                <img src={cover} alt={title} className="card__image"/>
                <div className='card__title'>{title}</div>
            </NavLink>
            
        </div>
    );
}

export default HousingCard