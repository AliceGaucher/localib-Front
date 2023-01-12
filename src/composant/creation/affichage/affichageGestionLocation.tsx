import React from "react";
import { useEffect, useState } from "react";
import { Location } from "../modele/modelLocation";
import { serviceLocation } from "../../service/serviceLocation";
import ModificationGestionLocation from "../modification/modificationGestionLocation";
import { AddLocation } from "../ajout/ajoutLocation"

function AffichageLocation() {

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
     * Service pour la page location
     */
    return (
        <>
            <section>
                <div>
                    {(locations) && locations.map((location: Location, index: number) => {
                        return <ModificationGestionLocation key={index} location={location} />
                    })}
                </div>
            </section>
        </>
    )
}

export default AffichageLocation