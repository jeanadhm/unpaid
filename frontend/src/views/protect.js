import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Carousel from "./carrousel";
import { useState } from "react";

export default function Protect() {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  const faqData = [
    {
      question: "Comment puis-je demander un prêt non remboursable ?",
      answer: "Vous pouvez soumettre une demande de prêt non remboursable en remplissant le formulaire de demande sur notre site web. Assurez-vous de fournir toutes les informations requises avec précision."
    },
    {
      question: "Quels sont les critères d'admissibilité pour obtenir un prêt non remboursable ?",
      answer: "Nous évaluons chaque demande individuellement. Les principaux critères incluent la viabilité du projet, son impact sur la communauté et la capacité du demandeur à mettre en œuvre le projet avec succès."
    },
    {
      question: "Quelle est la période de traitement des demandes ?",
      answer: "Nous nous efforçons de traiter les demandes dans les plus brefs délais. Habituellement, vous pouvez vous attendre à recevoir une réponse dans les 2 à 4 semaines suivant la soumission de votre demande."
    },
    {
      question: "Puis-je utiliser le prêt non remboursable pour n'importe quel type de projet ?",
      answer: "Nous soutenons une variété de projets innovants qui ont un impact positif sur la société. Cependant, toutes les demandes sont évaluées individuellement pour garantir qu'elles répondent à nos critères de financement."
    },
    {
      question: "Est-ce que Unpaidfinance offre des prêts remboursables ?",
      answer: "Non, Unpaidfinance se spécialise dans les prêts non remboursables visant à soutenir des projets sociaux et communautaires sans exigence de remboursement."
    }
  ];
  return (
    <>
      <Navbar transparent />
      <main>
        <Carousel />
        <section className="bg-blueGray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white animate-bounce">
              Prévention des Arnaques et Sécurité Financière
            </h2>
            <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
              <p className="text-lg text-blueGray-500 leading-relaxed animate-fade-in">
                Chez Unpaidfinance, la sécurité et la tranquillité d'esprit de nos
                clients sont nos priorités absolues. Dans un monde où les arnaques
                financières deviennent de plus en plus sophistiquées, il est
                essentiel de rester vigilant et informé pour protéger vos
                finances. Voici quelques conseils et mesures que nous mettons en
                place pour garantir votre sécurité :
              </p>
              <ul className="text-lg text-blueGray-500 leading-relaxed animate-fade-in">
                <li>
                  <strong>Vérifiez l'Authenticité :</strong> Avant de partager des
                  informations personnelles ou financières, assurez-vous que vous
                  interagissez avec une source fiable. Recherchez notre logo
                  officiel et utilisez uniquement les canaux de communication
                  vérifiés de Unpaidfinance.
                </li>
                <li>
                  <strong>Protégez vos Informations :</strong> Ne partagez jamais
                  vos informations personnelles ou financières, telles que vos
                  numéros de compte ou de carte de crédit, avec des inconnus ou
                  sur des sites non sécurisés.
                </li>
                <li>
                  <strong>Méfiez-vous des Offres Trop Belles pour être Vraies :</strong>{" "}
                  Si une offre semble trop belle pour être vraie, elle l'est
                  probablement. Soyez sceptique face aux promesses de gains
                  rapides et faciles.
                </li>
                <li>
                  <strong>Utilisez des Mots de Passe Sécurisés :</strong> Créez des
                  mots de passe forts et uniques pour vos comptes en ligne, et
                  changez-les régulièrement. Évitez d'utiliser des informations
                  faciles à deviner, comme des dates de naissance ou des noms de
                  famille.
                </li>
                <li>
                  <strong>Soyez Vigilant face aux Phishing :</strong> Ne cliquez
                  jamais sur des liens ou pièces jointes dans des emails ou
                  messages suspects. Les arnaqueurs utilisent souvent le phishing
                  pour obtenir des informations sensibles.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-blueGray-800">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-8 text-white animate-bounce">
      Nos Mesures de Sécurité
    </h2>
    <div className="flex flex-wrap justify-center gap-8">
      <div className="w-full sm:w-auto p-4 bg-white rounded-full shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 flex flex-col items-center mb-4 sm:mb-0">
        <h3 className="text-base font-semibold mb-2 text-gray-800">
          Protection des Données
        </h3>
        <p className="text-sm text-gray-700 text-center">
          Nous utilisons des technologies de cryptage avancées pour protéger vos données personnelles et financières. Vos informations sont stockées en toute sécurité et ne sont jamais partagées sans votre consentement explicite.
        </p>
      </div>
      <div className="w-full sm:w-auto p-4 bg-white rounded-full shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 flex flex-col items-center mb-4 sm:mb-0">
        <h3 className="text-base font-semibold mb-2 text-gray-800">
          Authentification Multi-Facteurs
        </h3>
        <p className="text-sm text-gray-700 text-center">
          Pour renforcer la sécurité de vos comptes, nous proposons l'authentification multi-facteurs (MFA). Cette mesure ajoute une couche supplémentaire de protection en demandant une vérification supplémentaire lors de la connexion.
        </p>
      </div>
      <div className="w-full sm:w-auto p-4 bg-white rounded-full shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 flex flex-col items-center mb-4 sm:mb-0">
        <h3 className="text-base font-semibold mb-2 text-gray-800">
          Surveillance 24/7
        </h3>
        <p className="text-sm text-gray-700 text-center">
          Nos systèmes de sécurité surveillent en permanence les activités suspectes sur nos plateformes. En cas de détection de comportements inhabituels, des mesures immédiates sont prises pour protéger vos comptes.
        </p>
      </div>
      <div className="w-full sm:w-auto p-4 bg-white rounded-full shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 flex flex-col items-center mb-4 sm:mb-0">
        <h3 className="text-base font-semibold mb-2 text-gray-800">
          Éducation et Sensibilisation
        </h3>
        <p className="text-sm text-gray-700 text-center">
          Nous fournissons régulièrement des informations et des ressources pour vous aider à identifier et éviter les arnaques. Consultez notre blog et nos bulletins d'information pour rester informé des dernières menaces et des meilleures pratiques en matière de sécurité.
        </p>
      </div>
    </div>
  </div>
  <br /><br />
</section>



        <section className="bg-blueGray-800">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-8 text-white animate-bounce">FAQ - Foire Aux Questions</h2>
    <div className="max-w-3xl mx-auto">
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="bg-blueGray-900 text-white px-4 py-2 cursor-pointer flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <label className="cursor-pointer text-lg font-bold">{faq.question}</label>
            <span>{expanded === index ? '-' : '+'}</span>
          </div>
          {expanded === index && (
            <div className="bg-white text-blueGray-800 px-4 py-2 text-lg">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  </div>
  <br /> <br /> <br /> <br /> <br />
</section>


      </main>
    
      <Footer />
    </>
  );
}
