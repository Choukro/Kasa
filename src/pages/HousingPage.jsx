import '../style/HousingPage.css';


function HousingPage() {
    return (
        <div className="housing-page">
            <div className="housing-page__image">Image carroussel logement</div>
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
                        <i class="fa fa-star red"></i>
                        <i class="fa fa-star red"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
            </div>
            <div className="housing-page__description">
                <p>paragraphe</p>
            </div>
            <div className="housing-page__description">
                <p>paragraphe</p>
            </div>
        </div>
    );
}
  
  export default HousingPage;