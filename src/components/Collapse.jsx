import '../style/Collapse.css';
import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function Collapse(props) {
    const collapseClass = "collapse collapse" + (props.about ? "--about" : "--default");
    const [contentIsVisible, setContentIsVisible] = useState(false);
    const hideContent = () => {
    setContentIsVisible(!contentIsVisible);
    };
    const contentClass = "collapse__content collapse__content" + (contentIsVisible ? "--visible" : "--hidden");
    const FaChevronUpClass = "collapse__icon" + (contentIsVisible ? "--visible" : "--hidden" );
    const FaChevronDownClass = "collapse__icon" + (contentIsVisible ?  "--hidden" : "--visible" );
    return (
        <div className={collapseClass}>
            <p className="collapse__title" onClick={hideContent}>
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