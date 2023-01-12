import React from "react";
import { useLocation } from "react-router-dom";
import AffichageGestionLocation from "../creation/affichage/affichageGestionLocation";
import Navbar from "../service/navBar";
import "../asset/css/cssEnPage.css";

function PageRecapitulatifLocation() {
    return (
        <>
            <Navbar date={"Bilan Location"} />
            <section className="formulaire">
                <AffichageGestionLocation />
            </section>
        </>
    )
}

export default PageRecapitulatifLocation