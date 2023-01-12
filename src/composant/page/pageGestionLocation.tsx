import React from "react";
import AffichageLocation from "../creation/affichage/affichageLocation";
import { useLocation } from 'react-router-dom'
import Navbar from "../service/navBar";
import "../asset/css/cssEnPage.css";

function PageGestionLocation() {
    return (
        <>
            <Navbar date={"Gestion Location"} />
            <section className="formulaire">
                <AffichageLocation />
            </section>
        </>
    )
}

export default PageGestionLocation