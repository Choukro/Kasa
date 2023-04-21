import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Error from '../pages/Error';
import Housing from '../pages/Housing';

const router = createBrowserRouter([
{
    path:"/",
    element: <Home />,
    errorElement: <Error />
},
{
    path:"/Fiche-Logement",
    element: <Housing />
},
{
    path:"/A-Propos",
    element: <AboutUs />
}
]);

export default function Router() {
    return <RouterProvider router={router} />;
  }