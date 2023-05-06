import '../style/HousingCards.css';
import HousingCard from '../components/HousingCard';
//import HousingList from "../datas/housingList.json"
import {useFlatsList} from "../hooks/useFlatsList";

function HousingCards() {
    //const housingList = HousingList;
    const housingList = useFlatsList();
    return (
        <div className='cards'>
            {housingList.map((housing) => (
                <HousingCard key={housing.id} title={housing.title} cover={housing.cover} id={housing.id}/>
            ))}
        </div>
    );
}

export default HousingCards