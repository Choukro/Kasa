import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Error from '../pages/Error';
import HousingPage from '../pages/HousingPage';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Main from '../layout/Main';


const Layout = () => (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path:"/",
                element: <Home />,
            },
            {
                path:"/Fiche-Logement",
                element: <HousingPage />
            },
            {
                path:"/A-Propos",
                element: <AboutUs />
            }
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router} />;
  }