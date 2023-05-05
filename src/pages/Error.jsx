import Header from '../layout/Header';
import Main from '../layout/Main';
import '../style/Error.css';
import { NavLink } from "react-router-dom";


function Error() {
    return (
        <div>
            <Header />
            <Main>
                <div className='error-page'>
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                    <NavLink to="/" >Retourner sur la page d’accueil</NavLink>
                </div>
            </Main>
        </div>
    );
  }
  
  export default Error;