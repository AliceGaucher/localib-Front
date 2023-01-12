import React, { useState } from "react";
import { Location } from "../modele/modelLocation";
import "../../asset/css/cssEnPage.css"

type locationContainerProps = {
    location: Location
    deleteLocation: Function
    updateLocation: Function
}

const ModificationLocation = (props: locationContainerProps) => {

    /**
     * Défini l'état de mis à jour sur faux par défaut
     */
    const [updating, setUpdating] = useState(false);

    /**
     * Défini l'état initial de location en prenant le modele client
     */
    const [location, setLocation] = useState({ id: 0, nom: "", prenom: "", telephone: "", immatriculation: "", etat: "", debut: "", fin: "", prix: "" })

    /**
     * Supprime la location par son id
     */
    const deleteLocation = () => {
        props.deleteLocation(props.location.id)
    }

    /**
     * Permet de garder la mis à jour des données de la location
     * @param event mis à jour des données
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation((location) => ({ ...location, [event.target.name]: event.target.value }))
    }

    /**
     * Défini l'état de mis à jour sur vrai
     */
    const updateLocation = () => {
        setUpdating(true);
    }

    /**
     * Annule l'état de mis à jour et le remet sur faux
     */
    const cancel = () => {
        setUpdating(false);
    }

    /**
     * Valide la mis à jour des données client, possibilité d'annuler les modifications
     * @param event mis à jour des données par l'Id
     */
    const trueUpdating = (event: any) => {
        event.preventDefault();
        props.updateLocation(props.location.id, location)
        cancel();
    }

    /**
     * Formulaire de mis à jour des données de la location
     */
    return (
        <>
            <div className="formModification">
                {(!updating) ?
                    <div>
                        <h4>Locations</h4>
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
                        <p>Le prix de la location à la journée :</p>
                        <span>{props.location.prix}</span>
                        <div className="bouttonFormModification">
                            <button onClick={deleteLocation}>Supprimer</button>
                            <button onClick={updateLocation}>Modifier</button>
                        </div>
                    </div> :
                    <div className="blocInformationAModifier">
                        <h4>Modification</h4>
                        <p>L'id de la location :</p>
                        <span>{props.location.id}</span>
                        <p>Le nom actuel du locataire :</p>
                        <span>{props.location.nom}</span>
                        <p>Entrer le nom du locataire</p>
                        <input placeholder={props.location.nom} name="nom" onChange={(event) => handleChange(event)}></input>
                        <p>Le prénom actuel du locataire :</p>
                        <span>{props.location.prenom}</span>
                        <p>Entrer le prénom du locataire</p>
                        <input placeholder={props.location.prenom} name="prenom" onChange={(event) => handleChange(event)}></input>
                        <p>Le numéro de téléphone actuel du locataire :</p>
                        <span>{props.location.telephone}</span>
                        <p>Entrer le de téléphone du locataire</p>
                        <input placeholder={props.location.telephone} name="telephone" onChange={(event) => handleChange(event)}></input>
                        <p>L'immatriculation actuel du véhicule :</p>
                        <span>{props.location.immatriculation}</span>
                        <p>Entrer l'immatriculation du véhicule :</p>
                        <input placeholder={props.location.immatriculation} name="immatriculation" onChange={(event) => handleChange(event)}></input>
                        <p>L'état actuel du véhicule :</p>
                        <span>{props.location.etat}</span>
                        <p>Entrer l'état du véhicule'</p>
                        <input placeholder={props.location.etat} name="etat" onChange={(event) => handleChange(event)}></input>
                        <p>La date actuelle du début de la location:</p>
                        <span>{props.location.debut}</span>
                        <p>Entrer la date de début de la location :</p>
                        <input placeholder={props.location.debut} name="debut" onChange={(event) => handleChange(event)}></input>
                        <p>La date de fin actuelle de la location :</p>
                        <span>{props.location.fin}</span>
                        <p>Entrer la date fin de la location :</p>
                        <input placeholder={props.location.fin} name="fin" onChange={(event) => handleChange(event)}></input>
                        <p>Le prix actuel location :</p>
                        <span>{props.location.prix}</span>
                        <p>Entrer le prix de la location à la journée :</p>
                        <input placeholder={props.location.prix} name="prix" onChange={(event) => handleChange(event)}></input>
                        <div className="bouttonFormModification">
                            <button onClick={cancel}>Annuler</button>
                            <button onClick={trueUpdating}>Valider</button>
                        </div>
                    </div>}
            </div>
        </>
    )
}

export default ModificationLocation