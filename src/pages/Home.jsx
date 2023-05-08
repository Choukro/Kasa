import Banner from '../components/Banner';
import HousingCards from '../components/HousingCards';


function Home() {
  return (
    <div>
        <Banner home={true}/>
        <HousingCards />
    </div>
  );
}

export default Home;
