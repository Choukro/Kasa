import '../style/HousingCarousel.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


function HousingCarousel({ housing }) {
    return (
        <div className="housing-page__image">
            <img src={housing.cover} alt={housing.title} />
            <>
                <button className="housing-page__btn btn-previous">
                    <FaChevronLeft className="housing-page__icon"/>
                </button>
                <span className="housing-page__slide-counter">
                    1 / 4
                </span>
                <button className="housing-page__btn btn-next">
                    <FaChevronRight className="housing-page__icon"/>
                </button>
            </>
        </div>
    );
}
    
export default HousingCarousel;