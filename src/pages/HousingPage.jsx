import '../style/HousingPage.css';
import HousingHeader from '../components/HousingHeader';
import HousingCarousel from '../components/HousingCarousel';
import Collapse from '../components/Collapse';
import HousingList from "../datas/housingList.json";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";



function HousingPage() {
    const { id } = useParams();
    const housingId = HousingList.find((housing) => housing.id === id);
    const navigate = useNavigate();
    //console.log(housingId);
    useEffect(() =>{
        if (housingId === undefined) {
            navigate("/Page404");
        }
        
    }, [housingId, navigate]);
    if (housingId) {
        return (
            <div className="housing-page">
                <HousingCarousel housing={housingId} />
                <HousingHeader housing={housingId} />
                <div className="housing-page__collapses">
                    <Collapse title="Description" content={housingId.description} />
                    <Collapse 
                    title="Équipements"
                    content=
                        {housingId.equipments.map((equipment) => (
                            <li key={equipment}>{equipment}</li>
                        ))}
                    />
                </div>
            </div>
        );
    }
}
  
  export default HousingPage;