import React, { useState } from "react";
import { Location } from "../modele/modelLocation";
import "../../asset/css/cssEnPage.css"

export const AddLocation = (props: any) => {

    /**
     * Défini l'état initial de location en prenant le modele location
     */
    const [location, setLocation] = useState<Location>({ id: 0, nom: "", prenom: "", telephone: "", immatriculation: "", etat: "", debut: "", fin: "", prix: "" });

    /**
     * Permet de sauvegarder les paramètres entrés d'une location
     * @param event modification de l'état initial d'une location
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation((location) => ({ ...location, [event.target.name]: event.target.value }))
    }

    /**
     * Permet de sauvegarder les données dans la base de donnée
     * @param event enrengistrement dans la base de donnée
     */
    const addLocation = (event: any) => {
        event.preventDefault();
        props.addLocation(location);
        setLocation({ id: 0, nom: "", prenom: "", telephone: "", immatriculation: "", etat: "", debut: "", fin: "", prix: "" })
    }

    /**
     * Formulaire d'ajout d'une location
     */
    return (
        <>
            <section>
                <div>
                    <h3>Ajouter une nouvelle location</h3>
                </div>
                <form className="formAjout" onSubmit={(event) => addLocation(event)}>
                    <div>
                        <div>
                            <div className="champAjout">
                                <p>Entrer le nom du locataire :</p>
                                <input className="addNom" value={location.nom} type="text" name="nom" placeholder="Entrer une nom" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer le prénom du locataire :</p>
                                <input className="addPrenom" value={location.prenom} type="text" name="prenom" placeholder="Entrer un prenom" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer le numéro de téléphone du locataire :</p>
                                <input className="addTelephone" value={location.telephone} type="text" name="telephone" placeholder="Entrer un numéro de téléphone" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer l'immatriculation du véhicule :</p>
                                <input className="addImmatriculation" value={location.immatriculation} type="immatriculation" name="immatriculation" placeholder="Entrer un n° d'immatriculation" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer l'état du véhicule' :</p>
                                <input className="addEtat" value={location.etat} type="text" name="etat" placeholder="Entrer un état" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer la date de début :</p>
                                <input className="addDebut" value={location.debut} type="text" name="debut" placeholder="Entrer une date de début" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer la date de fin :</p>
                                <input className="addfin" value={location.fin} type="text" name="fin" placeholder="Entrer une date de fin" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer le prix de la location :</p>
                                <input className="addDisponibilite" value={location.prix} type="text" name="prix" placeholder="Entrer un prix" onChange={(event) => handleChange(event)} />
                            </div>
                        </div>
                        <button className="bouttonFormModification" type="submit">Ajouter</button>
                    </div>
                </form>
            </section>
        </>
    )
}