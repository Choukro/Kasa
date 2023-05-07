import '../style/HousingHeader.css';
import { FaStar } from "react-icons/fa";

function HousingHeader({ housing }) {
    const { name } = housing.host;
    const [firstName, lastName] = name.split(" ");
    return (
        <div className="housing-page__header">
            <div className="housing-page__title">
                <h1>{housing.title}</h1>
                <h2>{housing.location}</h2>
                <div className="housing-page__tags">
                    {housing.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
            <div className="housing-page__owner">
                <div className="housing-page__owner__details">
                    <h3>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </h3>
                    <div className="housing-page__owner__badge">
                        <img src={housing.host.picture} alt="Photographie de l'hôte" />
                    </div>
                </div>
                <div className="housing-page__owner__star">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <FaStar key={num} className={housing.rating >= num ? "housing-page__star__icon red-star" : "housing-page__star__icon"} />
                    ))}
                </div>
            </div>
        </div>
    );
}
    
export default HousingHeader;