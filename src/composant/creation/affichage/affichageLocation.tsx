import React from "react";
import { useEffect, useState } from "react";
import { Location } from "../modele/modelLocation";
import { serviceLocation } from "../../service/serviceLocation";
import ModificationLocation from "../modification/modificationLocation";
import { AddLocation } from "../ajout/ajoutLocation"

function AffichageLocation() {

    /**
     * Défini l'état initial de la location en prenant le modele location
     */
    const [location, setLocation] = useState<Location>({ id: 0, nom: "", prenom: "", telephone: "", immatriculation: "", etat: "", debut: "", fin: "", prix: "" })

    /**
     * Liste des locations
     */
    const [locations, setLocations] = useState<Location[]>([])

    /**
     * Récupère la liste des locations à l'initialisation de la modification
     */
    useEffect(() => {
        getAllLocation()
    }, [])

    /**
     * Permet de récuperer toutes les locations depuis le serviceLocation
     */
    const getAllLocation = () => {
        serviceLocation.findAllLocation().then(data => setLocations(data))
    }

    /**
     * Permet de supprimer une location par son id
     * @param id du location à supprimer
     */
    const deleteLocation = (id: number) => {
        serviceLocation.deleteLocation(id).then(() => getAllLocation())
    }

    /**
     * Permet de créer une location
     * @param location créer
     */
    const addLocation = (location: Location) => {
        serviceLocation.createLocation(location).then(() => getAllLocation())
    }

    /**
     * Permet de mettre à jour une location
     * @param id de la location à mettre à jour
     * @param location à mettre à jour
     */
    const updateLocation = (id: number, location: Location) => {
        serviceLocation.updateLocation(id, location).then(() => getAllLocation())
    }

    /**
     * Service pour la page location
     */
    return (
        <>
            <section>
                <div>
                    <AddLocation addLocation={addLocation} />
                </div>
                <div>
                    {(locations) && locations.map((location: Location, index: number) => {
                        return <ModificationLocation key={index} location={location} deleteLocation={deleteLocation} updateLocation={updateLocation} />
                    })}
                </div>
            </section>
        </>
    )
}

export default AffichageLocation