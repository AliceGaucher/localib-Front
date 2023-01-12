import React from "react";
import AffichageVehicule from "../creation/affichage/affichageVehicule";
import { useLocation } from "react-router-dom";
import Navbar from "../service/navBar";
import "../asset/css/cssEnPage.css";

function PageGestionVehicule() {
    return (
        <>
            <Navbar data={"Gestion Vehicule"} />
            <section className="formulaire">
            <AffichageVehicule />
            </section>
        </>
    )
}

export default PageGestionVehicule