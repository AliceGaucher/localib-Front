import React, { useState } from "react";
import { Vehicule } from "../modele/modelVehicule";
import "../../asset/css/cssEnPage.css"

export const AddVehicule = (props: any) => {

    /**
     * Défini l'état initial de vehicule en prenant le modele vehicule
     */
    const [vehicule, setVehicule] = useState<Vehicule>({ id: 0, marque: "", modele: "", immatriculation: "", etat: "", prix: "", disponibilite: "", type: "" });

    /**
     * Permet de sauvegarder les paramètres entrés d'un vehicule
     * @param event modification de l'état initial d'un vehicule
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVehicule((vehicule) => ({ ...vehicule, [event.target.name]: event.target.value }))
    }

    /**
     * Permet de sauvegarder les données dans la base de donnée
     * @param event enrengistrement dans la base de donnée
     */
    const addVehicule = (event: any) => {
        event.preventDefault();
        props.addVehicule(vehicule);
        setVehicule({ id: 0, marque: "", modele: "", immatriculation: "", etat: "", prix: "", disponibilite: "", type: "" })
    }

    /**
     * Formulaire d'ajout d'un véhicule
     */
    return (
        <>
            <section>
                <div>
                    <h3>Ajouter un nouveau véhicule</h3>
                </div>
                <form className="formAjout" onSubmit={(event) => addVehicule(event)}>
                    <div>
                        <div>
                            <div className="champAjout">
                                <p>Entrer la marque du véhicule :</p>
                                <input className="addMarque" value={vehicule.marque} type="text" name="marque" placeholder="Entrer une marque" onChange={(event) => handleChange(event)} />
                            </div>
                            <div>
                                <p>Entrer le modèle du véhicule :</p>
                                <input className="addModele" value={vehicule.modele} type="text" name="modele" placeholder="Entrer un modele" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer la plaque d'immaticulation du véhicule :</p>
                                <input className="addImmatriculation" value={vehicule.immatriculation} type="text" name="immatriculation" placeholder="Entrer un n° d'immatriculation" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer l'état du véhicule :</p>
                                <input className="addEtat" value={vehicule.etat} type="text" name="etat" placeholder="Entrer un etat" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer le prix du véhicule :</p>
                                <input className="addPrix" value={vehicule.prix} type="text" name="prix" placeholder="Entrer un prix" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer la disponibilité du véhicule :</p>
                                <input className="addDisponibilite" value={vehicule.disponibilite} type="text" name="disponibilite" placeholder="Entrer une disponibilite" onChange={(event) => handleChange(event)} />
                            </div>
                            <div className="champAjout">
                                <p>Entrer le type du véhicule :</p>
                                <input className="addtype" value={vehicule.type} type="text" name="type" placeholder="Entrer un type" onChange={(event) => handleChange(event)} />
                            </div>
                        </div>
                        <button className="bouttonFormModification" type="submit">Ajouter</button>
                    </div>
                </form>
            </section>
        </>
    )
}