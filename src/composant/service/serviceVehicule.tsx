import React from "react";
import { Vehicule } from "../creation/modele/modelVehicule";

const URL: string = 'http://localhost:3000/vehicules'

class ServiceVehicule {

    /**
     * Récupère la liste de véhicule
     * @returns liste véhicule
     */
    findAllVehicule = () => {
        return fetch(URL).then(res => res.json())
    }

    /**
     * Création d'un véhicule
     * @param vehicule les informations pour sa création
     * @returns le véhicule créer
     */
    createVehicule = (vehicule: Vehicule) => {
        return fetch(URL, {
            method: 'POST',
            body: JSON.stringify(vehicule),
            headers: { 'content-Type': 'application/json' }
        })
            .then((res) => res.json())
    }

    /**
     * Suppression d'un véhicule
     * @param id du véhicule à supprimer
     * @returns rien si le véhicule a bien été supprimé
     */
    deleteVehicule = (id: number) => {
        return fetch(`${URL}/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
    }

    /**
     * mis à jour d'un véhicule
     * @param id du véhicule à mettre à jour
     * @param vehicule ses informations
     * @returns les données du véhicule mis à jour
     */
    updateVehicule = (id: number, vehicule: Vehicule) => {
        return fetch(`${URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(vehicule),
            headers: { 'content-Type': 'application/json' }
        })
            .then(res => res.json())
    }
}

export const serviceVehicule = Object.freeze(new ServiceVehicule())