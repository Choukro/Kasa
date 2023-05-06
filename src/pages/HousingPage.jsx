import '../style/HousingPage.css';
import HousingHeader from '../components/HousingHeader';
import HousingCarousel from '../components/HousingCarousel';
import Collapse from '../components/Collapse';


function HousingPage() {
    return (
        <div className="housing-page">
            <HousingCarousel />
            <HousingHeader />
            <Collapse />
            <Collapse />
        </div>
    );
}
  
  export default HousingPage;