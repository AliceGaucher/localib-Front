import React from "react";
import { Location } from "../creation/modele/modelLocation"

const URL: string = 'http://localhost:3000/locations'

class ServiceLocation {

    /**
     * Récupère la liste de location
     * @returns liste location
     */
    findAllLocation = () => {
        return fetch(URL).then(res => res.json())
    }

    /**
     * Création d'une location
     * @param location les informations pour sa création
     * @returns la location créer
     */
    createLocation = (location: Location) => {
        return fetch(URL, {
            method: 'POST',
            body: JSON.stringify(location),
            headers: { 'content-Type': 'application/json' }
        })
            .then((res) => res.json())
    }

    /**
     * Suppression d'un location
     * @param id du location à supprimer
     * @returns rien si le location a bien été supprimé
     */
    deleteLocation = (id: number) => {
        return fetch(`${URL}/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
    }

    /**
     * mis à jour d'une location
     * @param id de la location à mettre à jour
     * @param location ses informations
     * @returns les données de la location mis à jour
     */
    updateLocation = (id: number, location: Location) => {
        return fetch(`${URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(location),
            headers: { 'content-Type': 'application/json' }
        })
            .then(res => res.json())
    }
}

export const serviceLocation = Object.freeze(new ServiceLocation())