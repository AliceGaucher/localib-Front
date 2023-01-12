import React, { useState } from "react";
import { Vehicule } from "../modele/modelVehicule";
import "../../asset/css/cssEnPage.css"

type vehiculeContainerProps = {
    vehicule: Vehicule
    deleteVehicule: Function
    updateVehicule: Function
}

const ModificationVehicule = (props: vehiculeContainerProps) => {

    /**
     * Défini l'état de mis à jour sur faux par défaut
     */
    const [updating, setUpdating] = useState(false);

    /**
     * Défini l'état initial de véhicule en prenant le modele véhicule
     */
    const [vehicule, setVehicule] = useState({ id: 0, marque: "", modele: "", immatriculation: "", etat: "", prix: "", disponibilite: "", type: "" })

    /**
     * Supprime le véhicule par son id
     */
    const deleteVehicule = () => {
        props.deleteVehicule(props.vehicule.id)
    }

    /**
     * Permet de garder la mis à jour des données du véhicule
     * @param event mis à jour des données
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVehicule((vehicule) => ({ ...vehicule, [event.target.name]: event.target.value }))
    }

    /**
     * Défini l'état de mis à jour sur vrai
     */
    const updateVehicule = () => {
        setUpdating(true);
    }

    /**
     * Annule l'état de mis à jour et le remet sur faux
     */
    const cancel = () => {
        setUpdating(false);
    }

    /**
     * Valide la mis à jour des données véhicule, possibilité d'annuler les modifications
     * @param event mis à jour des données par l'Id
     */
    const trueUpdating = (event: any) => {
        event.preventDefault();
        props.updateVehicule(props.vehicule.id, vehicule)
        cancel();
    }

    /**
     * Formulaire de mis à jour des données du véhicule
     */
    return (
        <>
            <div className="formModification">
                {(!updating) ?
                    <div>
                        <h4>Véhicules</h4>
                        <p>L'id du véhicule :</p>
                        <span>{props.vehicule.id}</span>
                        <p>La marque du véhicule :</p>
                        <span>{props.vehicule.marque}</span>
                        <p>Le modèle du véhicule :</p>
                        <span>{props.vehicule.modele}</span>
                        <p>L'immatriculation du véhicule :</p>
                        <span>{props.vehicule.immatriculation}</span>
                        <p>L'état du véhicule :</p>
                        <span>{props.vehicule.etat}</span>
                        <p>Le prix à la journée du véhicule :</p>
                        <span>{props.vehicule.prix}</span>
                        <p>La disponibilité du véhicule</p>
                        <span>{props.vehicule.disponibilite}</span>
                        <p>Le type du véhicule :</p>
                        <span>{props.vehicule.type}</span>
                        <div className="bouttonFormModification">
                            <button onClick={deleteVehicule}>Supprimer</button>
                            <button onClick={updateVehicule}>Modifier</button>
                        </div>
                    </div> :
                    <div className="blocInformationAModifier">
                        <h4>Modification</h4>
                        <p>L'id du véhicule :</p>
                        <span>{props.vehicule.id}</span>
                        <p>La marque actuelle du véhicule :</p>
                        <span>{props.vehicule.marque}</span>
                        <p>Entrer la marque du véhicule :</p>
                        <input placeholder={props.vehicule.marque} name="marque" onChange={(event) => handleChange(event)}></input>
                        <p>Le modèle actuelle du véhicule :</p>
                        <span>{props.vehicule.modele}</span>
                        <p>Entrer le modèle du véhicule :</p>
                        <input placeholder={props.vehicule.modele} name="modele" onChange={(event) => handleChange(event)}></input>
                        <p>L'immatriculation actuelle du véhicule :</p>
                        <span>{props.vehicule.immatriculation}</span>
                        <p>Entrer l'immatriculation du véhicule :</p>
                        <input placeholder={props.vehicule.immatriculation} name="immatriculation" onChange={(event) => handleChange(event)}></input>
                        <p>L'état actuel du véhicule :</p>
                        <span>{props.vehicule.etat}</span>
                        <p>Entrer l'état du véhicule :</p>
                        <input placeholder={props.vehicule.etat} name="etat" onChange={(event) => handleChange(event)}></input>
                        <p>Le prix à la journée actuel du véhicule :</p>
                        <span>{props.vehicule.prix}</span>
                        <p>Entrer le prix à la journée actuel du véhicule :</p>
                        <input placeholder={props.vehicule.prix} name="prix" onChange={(event) => handleChange(event)}></input>
                        <p>La disponibilité actuelle du véhicule :</p>
                        <span>{props.vehicule.disponibilite}</span>
                        <p>Entrer la disponibilité du véhicule :</p>
                        <input placeholder={props.vehicule.disponibilite} name="disponibilite" onChange={(event) => handleChange(event)}></input>
                        <p>Le type actuel du véhicule :</p>
                        <span>{props.vehicule.type}</span>
                        <p>Entrer le type du véhicule :</p>
                        <input placeholder={props.vehicule.type} name="type" onChange={(event) => handleChange(event)}></input>
                        <div className="bouttonFormModification">
                            <button onClick={cancel}>Annuler</button>
                            <button onClick={trueUpdating}>Valider</button>
                        </div>
                    </div>}
            </div>
        </>
    )
}

export default ModificationVehicule