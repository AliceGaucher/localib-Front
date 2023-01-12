import React, { useState } from "react";
import { Client } from "../modele/modeleClient";
import "../../asset/css/cssEnPage.css"

export const AddClient = (props: any) => {

    /**
     * Défini l'état initial de client en prenant le modele client
     */
    const [client, setClient] = useState<Client>({ id: 0, nom: "", prenom: "", telephone: "", naissance: "", email: "" });

    /**
     * Permet de sauvegarder les paramètres entrés d'un client
     * @param event modification de l'état initial d'un client
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClient((client) => ({ ...client, [event.target.name]: event.target.value }))
    }

    /**
     * Permet de sauvegarder les données dans la base de donnée
     * @param event enrengistrement dans la base de donnée
     */
    const addClient = (event: any) => {
        event.preventDefault();
        props.addClient(client);
        setClient({ id: 0, nom: "", prenom: "", telephone: "", naissance: "", email: "" })
    }

    /**
     * Formulaire d'ajout d'un client
     */
    return (
        <>
            <section>
                <div>
                    <h3>Ajouter un nouveau locataire</h3>
                </div>
                <form className="formAjout" onSubmit={(event) => addClient(event)} >
                    <div>
                        <div>
                            <div className="champAjout">
                                <p>Entrer le nom du locataire :</p>
                                <input className="addNom" value={client.nom} type="text" name="nom" placeholder="Entrer un nom" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer le prenom du locataire :</p>
                                <input className="addPrenom" value={client.prenom} type="text" name="prenom" placeholder="Entrer un prenom" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer le numéro de téléphone du locataire :</p>
                                <input className="addTelephone" value={client.telephone} type="text" name="telephone" placeholder="Entrer un n° de téléphone" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer la date de naissance du locataire :</p>
                                <input className="addNaissance" value={client.naissance} type="text" name="naissance" placeholder="Entrer une date de naissance" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer l'adresse mail actuel du locataire :</p>
                                <input className="addEmail" value={client.email} type="text" name="email" placeholder="Entrer un email" onChange={(event) => handleChange(event)} />
                            </div>
                        </div>
                        <button className="bouttonFormModification" type="submit">Ajouter</button>
                    </div>
                </form>
            </section>
        </>
    )
}