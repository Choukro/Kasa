import '../style/HousingCards.css';
import HousingCard from '../components/HousingCard';
import HousingList from "../datas/housingList.json"


function HousingCards() {
    const housingList = HousingList;
    //console.log(housingList);
    return (
        <div className='cards'>
            {housingList.map((housing) => (
                <HousingCard key={housing.id} title={housing.title} cover={housing.cover} id={housing.id}/>
            ))}
        </div>
    );
}

export default HousingCards