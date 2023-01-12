import { Link } from 'react-router-dom';
import Logo from "../asset/image/localibLogo.png"
import "../asset/css/cssNavBar.css"

function Navbar(props: any) {

    console.log(props);


    return (
        <section>
            <div className='lienLogoNavBar'>
                <Link to="/">
                    <img className='logoNavBar' src={Logo} alt="" />
                </Link>
                <section className='lienNavBar'>
                    <section>
                        <Link to="/" className='titreLienNavBar'>
                            <div>
                                <h1>Accueil</h1>
                            </div>
                        </Link>
                    </section>
                    <section>
                        <Link to="/vehicule" className='titreLienNavBar'>
                            <div>
                                <h1>Gestion des véhicules</h1>
                            </div>
                        </Link>
                    </section>
                    <section>
                        <Link to="/client" className='titreLienNavBar'>
                            <div>
                                <h1>Gestion des clients</h1>
                            </div>
                        </Link>
                    </section>
                    <section>
                        <Link to="/location" className='titreLienNavBar'>
                            <div>
                                <h1>Gestion des Locations</h1>
                            </div>
                        </Link>
                    </section>
                    <section>
                        <Link to="/bilan"  className='titreLienNavBar'>
                            <div>
                                <h1>Bilan des Locations</h1>
                            </div>
                        </Link>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default Navbar