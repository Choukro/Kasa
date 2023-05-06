import '../style/Collapse.css';

function Collapse() {
    return (
        <div className="housing-page__collapse">
            <p className="housing-page__collapse__title">
                <span>title</span>
                <i className="fa-chevron-up fas"></i>
            </p>
            <p className="housing-page__collapse__content">
                content
            </p>
        </div>
    );
}
    
export default Collapse;