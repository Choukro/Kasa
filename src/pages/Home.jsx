import Header from '../components/Header';
import Main from '../components/Main';
import Banner from '../components/Banner';
import HousingCards from '../components/HousingCards';


function Home() {
  return (
    <div>
      <Header />
      <Main>
        <Banner />
        <HousingCards />
      </Main>
    </div>
  );
}

export default Home;
