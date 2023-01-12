import React from "react";
import { Client } from "../creation/modele/modeleClient";

const URL: string = 'http://localhost:3000/clients'

class ServiceClient {

    /**
     * Récupère la liste de client
     * @returns liste client
     */
    findAllClient = () => {
        return fetch(URL).then(res => res.json())
    }

    /**
     * Création d'un client
     * @param client les informations pour sa création
     * @returns le client créer
     */
    createClient = (client: Client) => {
        return fetch(URL, {
            method: 'POST',
            body: JSON.stringify(client),
            headers: { 'content-Type': 'application/json' }
        })
            .then((res) => res.json())
    }

    /**
     * Suppression d'un client
     * @param id du client à supprimer
     * @returns rien si le client a bien été supprimé
     */
    deleteClient = (id: number) => {
        return fetch(`${URL}/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
    }

    /**
     * mis à jour d'un client
     * @param id du client à mettre à jour
     * @param client ses informations
     * @returns les données du client mis à jour
     */
    updateClient = (id: number, client: Client) => {
        return fetch(`${URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(client),
            headers: { 'content-Type': 'application/json' }
        })
            .then(res => res.json())
    }
}

export const serviceClient = Object.freeze(new ServiceClient())