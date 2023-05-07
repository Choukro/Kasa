import '../style/Collapse.css';
import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function Collapse(props) {
    const [contentIsVisible, setContentIsVisible] = useState(false);
    const hideContent = () => {
    setContentIsVisible(!contentIsVisible);
    };
    const contentClass = "housing-page__collapse__content housing-page__collapse__content" + (contentIsVisible ? "__visible" : "__hidden");
    const FaChevronUpClass = "housing-page__collapse__icon" + (contentIsVisible ? "__visible" : "__hidden" );
    const FaChevronDownClass = "housing-page__collapse__icon" + (contentIsVisible ?  "__hidden" : "__visible" );
    return (
        <div className="housing-page__collapse">
            <p className="housing-page__collapse__title" onClick={hideContent}>
                <span>{props.title}</span>
                <FaChevronUp  className={FaChevronUpClass} />
                <FaChevronDown  className={FaChevronDownClass} />
            </p>
            <p className={contentClass}>
                {props.content}
            </p>
        </div>
    );
}
    
export default Collapse;