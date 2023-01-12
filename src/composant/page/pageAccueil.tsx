import React from "react"
import "../asset/css/cssPageAccueil.css"
import Navbar from "../service/navBar"
import Client from "../asset/image/client.jpg"
import Vehicule from "../asset/image/vehicule.jpg"
import GestionLocation from "../asset/image/gestionLocation.jpg"
import Location from "../asset/image/location.png"
const URL: string = 'http://localhost:3000/'

function PageAccueil() {
    return (
        <>
            <Navbar date={"Page Accueil"} />
            <section className="imagePageAccueil">
                <div>
                    <a href="/client">
                        <h1>Gestion des locataires</h1>
                        <img className='image' src={Client} alt="" />
                    </a>
                </div>
                <div>
                    <a href="/vehicule">
                        <h1>Gestion des véhicules</h1>
                        <img className='image' src={Vehicule} alt="" />
                    </a>
                </div>
                <div>
                    <a href="/location">
                        <h1>Gestion des locations</h1>
                        <img className='image' src={GestionLocation} alt="" />
                    </a>
                </div>
                <div>
                    <a href="/bilan">
                        <h1>Bilan des locations</h1>
                        <img className='image' src={Location} alt="" />
                    </a>
                </div>
            </section>
        </>
    )
}

export default PageAccueil