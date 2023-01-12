import React from "react";
import { useEffect, useState } from "react";
import { Vehicule } from "../modele/modelVehicule";
import { serviceVehicule } from "../../service/serviceVehicule";
import ModificationVehicule from "../modification/modificationVehicule";
import { AddVehicule } from "../ajout/ajoutVehicule";

function AffichageVehicule() {

    /**
     * Défini l'état initial de client en prenant le modele véhicule
     */
    const [vehicule, setVehicule] = useState<Vehicule>({ id: 0, marque: "", modele: "", immatriculation: "", etat: "", prix: "", disponibilite: "", type: "" })

    /**
     * Liste des clients
     */
    const [vehicules, setVehicules] = useState<Vehicule[]>([])

    /**
     * Récupère la liste des vehicules à l'initialisation de la modification
     */
    useEffect(() => {
        getAllVehicule()
    }, [])

    /**
     * Permet de récuperer tous les vehicules depuis le serviceClient
     */
    const getAllVehicule = () => {
        serviceVehicule.findAllVehicule().then(data => setVehicules(data))
    }

    /**
     * Permet de supprimer un véhicule par son id
     * @param id du véhicule à supprimer
     */
    const deleteVehicule = (id: number) => {
        serviceVehicule.deleteVehicule(id).then(() => getAllVehicule())
    }

    /**
     * Permet de créer un véhicule
     * @param vehicule créer
     */
    const addVehicule = (vehicule: Vehicule) => {
        serviceVehicule.createVehicule(vehicule).then(() => getAllVehicule())
    }

    /**
     * Permet de mettre à jour un véhicule
     * @param id du véhicule à mettre à jour
     * @param vehicule à mettre à jour
     */
    const updateVehicule = (id: number, vehicule: Vehicule) => {
        serviceVehicule.updateVehicule(id, vehicule).then(() => getAllVehicule())
    }

    /**
     * Service pour la page véhicule
     */
    return (
        <>
            <section>
                <div>
                    <AddVehicule addVehicule={addVehicule} />
                </div>
                <div>
                    {(vehicules) && vehicules.map((vehicule: Vehicule, index: number) => {
                        return <ModificationVehicule key={index} vehicule={vehicule} deleteVehicule={deleteVehicule} updateVehicule={updateVehicule} />
                    })}
                </div>
            </section>
        </>
    )
}

export default AffichageVehicule