import '../style/HousingHeader.css';

function HousingHeader() {
    return (
        <div className="housing-page__header">
            <div className="housing-page__title">
                <h1>titre h1</h1>
                <h2>titre h2</h2>
                <div className="housing-page__tags">
                    <span>paragraphe</span>
                    <span>paragraphe</span>
                    <span>paragraphe</span>
                </div>
            </div>
            <div className="housing-page__owner">
                <div className="housing-page__owner__details">
                    <h3>
                        <span>prenom</span>
                        <span>nom</span>
                    </h3>
                    <div className="housing-page__owner__badge"></div>
                </div>
                <div className="housing-page__owner__star">
                    <i className="fa fa-star red"></i>
                    <i className="fa fa-star red"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
        </div>
    );
}
    
export default HousingHeader;