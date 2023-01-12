import React, { useState } from "react";
import { Client } from "../modele/modeleClient";
import "../../asset/css/cssEnPage.css"

type clientContainerProps = {
    client: Client
    deleteClient: Function
    updateClient: Function
}

const ModificationClient = (props: clientContainerProps) => {

    /**
     * Défini l'état de mis à jour sur faux par défaut
     */
    const [updating, setUpdating] = useState(false);

    /**
     * Défini l'état initial de client en prenant le modele client
     */
    const [client, setClient] = useState({ id: 0, nom: "", prenom: "", telephone: "", naissance: "", email: "" })

    /**
     * Supprime le client par son id
     */
    const deleteClient = () => {
        props.deleteClient(props.client.id)
    }

    /**
     * Permet de garder la mis à jour des données du client
     * @param event mis à jour des données
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClient((client) => ({ ...client, [event.target.name]: event.target.value }))
    }

    /**
     * Défini l'état de mis à jour sur vrai
     */
    const updateClient = () => {
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
        props.updateClient(props.client.id, client)
        cancel();
    }

    /**
     * Formulaire de mis à jour des données du client
     */
    return (
        <>
            <div className="formModification">
                {(!updating) ?
                    <div>
                        <h4>Locataires</h4>
                        <p>L'id du locataire :</p>
                        <span>{props.client.id}</span>
                        <p>Le nom du locataire :</p>
                        <span>{props.client.nom}</span>
                        <p>Le prénom du locataire:</p>
                        <span>{props.client.prenom}</span>
                        <p>Le numéro de téléphone du locataire :</p>
                        <span>{props.client.telephone}</span>
                        <p>La date de naissance du locataire :</p>
                        <span>{props.client.naissance}</span>
                        <p>L'adresse mail du locataire :</p>
                        <span>{props.client.email}</span>
                        <div className="bouttonFormModification">
                            <button onClick={deleteClient}>Supprimer</button>
                            <button onClick={updateClient}>Modifier</button>
                        </div>
                    </div> :
                    <div className="blocInformationAModifier">
                        <h4>Modification</h4>
                        <p>L'id du locataire :</p>
                        <span>{props.client.id}</span>
                        <p>Le nom actuel du locataire :</p>
                        <span>{props.client.nom}</span>
                        <p>Entrer le nom du locataire :</p>
                        <input placeholder={props.client.nom} name="nom" onChange={(event) => handleChange(event)} className="modificationSpan"></input>
                        <p>Le prénom actuel du locataire:</p>
                        <span>{props.client.prenom}</span>
                        <p>Entrer le prenom du locataire :</p>
                        <input placeholder={props.client.prenom} name="prenom" onChange={(event) => handleChange(event)} className="modificationSpan"></input>
                        <p>Le numéro de téléphone actuel du locataire :</p>
                        <span>{props.client.telephone}</span>
                        <p>Entrer le numéro de téléphone du locataire :</p>
                        <input placeholder={props.client.telephone} name="telephone" onChange={(event) => handleChange(event)} className="modificationSpan"></input>
                        <p>La date de naissance actuel du locataire :</p>
                        <span>{props.client.naissance}</span>
                        <p>Entrer la date de naissance du locataire :</p>
                        <input placeholder={props.client.naissance} name="naissance" onChange={(event) => handleChange(event)} className="modificationSpan"></input>
                        <p>L'adresse mail actuel du locataire :</p>
                        <span>{props.client.email}</span>
                        <p>Entrer l'adresse mail actuel du locataire :</p>
                        <input placeholder={props.client.email} name="email" onChange={(event) => handleChange(event)} className="modificationSpan"></input>
                        <div className="bouttonFormModification">
                            <button onClick={cancel}>Annuler</button>
                            <button onClick={trueUpdating}>Valider</button>
                        </div>
                    </div>}
            </div>
        </>
    )
}

export default ModificationClient