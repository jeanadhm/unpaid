import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Carousel from "./carrousel";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://formspree.io/f/xayrzawe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.fullName,
                email: formData.email,
                message: formData.message
            })
        })
        .then(response => {
            if (response.ok) {
                alert("Message envoyé avec succès!");
                setFormData({ fullName: '', email: '', message: '' });
            } else {
                alert("Erreur lors de l'envoi du message.");
            }
        })
        .catch(error => {
            console.error("Erreur:", error);
            alert("Erreur lors de l'envoi du message.");
        });
    };

    return (
        <>
            <Navbar transparent />
            <main>
                <Carousel />
                <section className="pb-20 relative block bg-blueGray-800">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-800 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold text-white">
                                    Créez quelque chose d'extraordinaire
                                </h2>
                                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                                    Contribuez à des projets innovants qui transforment les communautés et impactent positivement la société.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-medal text-xl"></i>
                                </div>
                                <h6 className="text-xl mt-5 font-semibold text-white">
                                    Services d'Excellence
                                </h6>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Offrez des services de haute qualité pour accompagner les porteurs de projets dans la réalisation de leurs ambitions.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-poll text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Élargissez votre marché
                                </h5>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Favorisez l'expansion et la diversification des projets bénéficiaires pour répondre aux besoins variés de la société.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-lightbulb text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Temps de Lancement
                                </h5>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Accélérez le démarrage des initiatives en offrant un financement rapide et efficace pour concrétiser les idées innovantes.
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="flex justify-center mb-6">
                        <a
                                href="https://wa.me/+33774137802"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mr-2"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                            <a
                                href="https://web.facebook.com/profile.php?id=61560091142096&sk=about" // Remplacez YourPage par votre page Facebook réelle
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                        </div>
                    </div>
                </section>
                <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <h4 className="text-2xl font-semibold">
                                            Envie de collaborer avec nous ?
                                        </h4>
                                        <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                            Remplissez ce formulaire et nous vous répondrons dans les 24 heures.
                                        </p>
                                        <form onSubmit={handleSubmit}>
                                            <div className="relative w-full mb-3 mt-8">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="full-name"
                                                >
                                                    Nom Complet
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Nom Complet"
                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="email"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Email"
                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="message"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    rows="4"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Tapez un message..."
                                                />
                                            </div>
                                            <div className="text-center mt-6">
                                                <button
                                                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="submit"
                                                >
                                                    Envoyer le Message
                                                </button>
                                                <button
                                                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="reset"
                                                >
                                                    Annuler
                                                </button>
                                            </div>
                                        </form>
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
}
