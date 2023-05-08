import '../style/HousingCarousel.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";


function HousingCarousel({ housing }) {
    const pictures = housing.pictures;
    const [actualPicture, setActualPicture] = useState(0);
    const carouselImageClass = (index) => {
        if (index === actualPicture) return "visible";
        return "";
    };
    const moveToNext = () => {
        setActualPicture((actualPicture + 1) % pictures.length);
    };
    const moveToPrevious = () => {
        const newActualPicture = actualPicture - 1;
            if (newActualPicture < 0) {
                setActualPicture(pictures.length - 1);
                return;
            }
        setActualPicture(actualPicture - 1);
    };
    return (
        <div className="housing-page__image">
            {pictures.map((picture,i) => (
                <img key={picture} src={picture} alt={housing.title} className={carouselImageClass(i)}/>
            ))}
            {pictures.length > 1 && (
                <>
                    <button className="housing-page__btn btn-previous" onClick={moveToPrevious}>
                        <FaChevronLeft className="housing-page__icon"/>
                    </button>
                    <span className="housing-page__slide-counter">
                        {actualPicture + 1} / {pictures.length}
                    </span>
                    <button className="housing-page__btn btn-next" onClick={moveToNext}>
                        <FaChevronRight className="housing-page__icon"/>
                    </button>
                </>
            )}
        </div>
    );
}
    
export default HousingCarousel;