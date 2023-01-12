import React from "react";
import { useEffect, useState } from "react";
import { Client } from "../modele/modeleClient";
import { serviceClient } from "../../service/serviceClient";
import ModificationClient from '../modification/modificationClient';
import { AddClient } from "../ajout/ajoutClient";

function AffichageClient() {

  /**
   * Défini l'état initial de client en prenant le modele client
   */
  const [client, setClient] = useState<Client>({ id: 0, nom: "", prenom: "", telephone: "", naissance: "", email: "" })

  /**
   * Liste des clients
   */
  const [clients, setClients] = useState<Client[]>([])

  /**
   * Récupère la liste des clients à l'initialisation de la modification
   */
  useEffect(() => {
    getAllClient()
  }, [])

  /**
   * Permet de récuperer tous les clients depuis le serviceClient
   */
  const getAllClient = () => {
    serviceClient.findAllClient().then(data => setClients(data))
  }

  /**
   * Permet de supprimer un client par son id
   * @param id du client à supprimer
   */
  const deleteClient = (id: number) => {
    serviceClient.deleteClient(id).then(() => getAllClient())
  }

  /**
   * Permet de créer un client
   * @param client créer
   */
  const addClient = (client: Client) => {
    serviceClient.createClient(client).then(() => getAllClient())
  }

  /**
   * Permet de mettre à jour un client
   * @param id du client à mettre à jour
   * @param client à mettre à jour
   */
  const updateClient = (id: number, client: Client) => {
    serviceClient.updateClient(id, client).then(() => getAllClient())
  }

  /**
   * Service pour la page client
   */
  return (
    <>
      <section>
        <div>
          <AddClient addClient={addClient} />
        </div>
        <div>
          {(clients) && clients.map((client: Client, index: number) => {
            return <ModificationClient key={index} client={client} deleteClient={deleteClient} updateClient={updateClient} />
          })}
        </div>
      </section>
    </>
  )
}

export default AffichageClient