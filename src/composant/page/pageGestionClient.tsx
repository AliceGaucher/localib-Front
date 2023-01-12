import React from "react";
import AffichageClient from "../creation/affichage/affichageClient";
import { useLocation } from 'react-router-dom'
import Navbar from "../service/navBar";
import "../asset/css/cssEnPage.css";

function PageGestionClient() {
    return (
        <>
            <Navbar date={"Gestion Client"} />
            <section className="formulaire">
                <AffichageClient />
            </section>
        </>
    )
}

export default PageGestionClient