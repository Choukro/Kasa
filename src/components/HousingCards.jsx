import '../style/HousingCards.css';
//import Image from "../assets/banner-home.jpg";
import HousingCard from '../components/HousingCard';


function HousingCards() {
    return (
        <div className='cards'>
            <HousingCard />
            <HousingCard />
            <HousingCard />
            <HousingCard />
        </div>
    );
}

export default HousingCards