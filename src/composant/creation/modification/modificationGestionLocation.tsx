import React, { useState } from "react";
import { Location } from "../modele/modelLocation";

type locationContainerProps = {
    location: Location
}

const ModificationLocation = (props: locationContainerProps) => {

    /**
     * Défini l'état initial de location en prenant le modele client
     */
    const [location, setLocation] = useState({ id: 0, nom: "", prenom: "", immatriculation: "", debut: "", fin: "", prix: "" })

    /**
     * Formulaire de mis à jour des données de la location
     */
    return (
        <>
            <div>
                <div className="bilan">
                    <h4>Bilan</h4>
                    <p>L'id de la location :</p>
                    <span>{props.location.id}</span>
                    <p>Le nom du locataire :</p>
                    <span>{props.location.nom}</span>
                    <p>Le prénom du locataire :</p>
                    <span>{props.location.prenom}</span>
                    <p>Le numéro de téléphone du locataire :</p>
                    <span>{props.location.telephone}</span>
                    <p>L'immatriculation du véhicule :</p>
                    <span>{props.location.immatriculation}</span>
                    <p>Létat du véhicule avant location :</p>
                    <span>{props.location.etat}</span>
                    <p>La date du début de la location :</p>
                    <span>{props.location.debut}</span>
                    <p>La date de fin de la location :</p>
                    <span>{props.location.fin}</span>
                    <p>Le prix de la location :</p>
                    <span>{props.location.prix}</span>
                </div>
            </div>
        </>
    )
}

export default ModificationLocation