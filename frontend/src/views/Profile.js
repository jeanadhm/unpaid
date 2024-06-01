import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Navbar from "components/Navbars/ConNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
  const [demandes, setDemandes] = useState([]);
  const username = localStorage.getItem("username");
  const history = useHistory();

  useEffect(() => {
    if (!username) {
      // Si le nom d'utilisateur n'est pas présent dans le localStorage, rediriger vers la page de connexion
      history.push("/login");
    } else {
      // Récupérer les données de demande pour l'utilisateur actuel depuis l'API en utilisant le nom d'utilisateur stocké
      axios.get(`http://localhost:5000/clients/${username}`)
        .then(response => {
          setDemandes(response.data);
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des demandes :", error);
        });
    }
  }, [username, history]);

  const handleLogout = () => {
    // Effacer le nom d'utilisateur du localStorage
    localStorage.removeItem("username");
    // Rediriger vers la page de connexion
    history.push("/login");
    // Rediriger vers la page d'accueil ("/")
    history.push("/");
  };

  return (
    <>
      <Navbar />
      <main className="profile-page">
        <section className="bg-blueGray-200 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4 mb-12">
                <div className="bg-white shadow-lg rounded-lg p-8">
                  <h2 className="text-3xl font-semibold text-blueGray-800 mb-4">
                   Ma demande
                  </h2>
                  {demandes.map(demande => (
                    <div key={demande.id} className="mb-8">
                      <h3 className="text-xl font-semibold mb-2">{demande.nom} {demande.prenom}</h3>
                      <p className="text-blueGray-600 mb-2">Email: {demande.email}</p>
                      <p className="text-blueGray-600 mb-2">Téléphone: {demande.telephone}</p>
                      <p className="text-blueGray-600 mb-2">Montant de la demande: {demande.montantDemande}</p>
                      <p className="text-blueGray-600 mb-2">Pays: {demande.pays}</p>
                      <p className="text-blueGray-600 mb-2">Devise: {demande.devise}</p>
                      <p className="text-blueGray-600 mb-2">Statut: {demande.statut}</p>
                    </div>
                  ))}
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleLogout}
                  >
                    Se déconnecter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
