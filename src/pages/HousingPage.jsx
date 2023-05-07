import '../style/HousingPage.css';
import HousingHeader from '../components/HousingHeader';
import HousingCarousel from '../components/HousingCarousel';
import Collapse from '../components/Collapse';
import HousingList from "../datas/housingList.json";
import { useParams } from "react-router-dom";


function HousingPage() {
    const { id } = useParams();
    const housingId = HousingList.find((housing) => housing.id === id);
    //console.log(housingId);
    return (
        <div className="housing-page">
            <HousingCarousel housing={housingId} />
            <HousingHeader housing={housingId} />
            <div className="housing-page__collapses">
                <Collapse title="Description" content={housingId.description} />
                <Collapse 
                title="Équipements"
                content={housingId.equipments}
                />
            </div>
        </div>
    );
}
  
  export default HousingPage;