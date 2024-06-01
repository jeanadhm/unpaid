import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUsers, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';



// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Carousel from "./carrousel";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Carousel />
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    
                    <h6 className="text-xl font-semibold">
                      Soutien sans Remboursement
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Offrez votre aide financière à des causes qui vous
                      tiennent à cœur, sans jamais attendre de remboursement.
                      Notre plateforme encourage le partage et la solidarité
                      entre membres de la communauté.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    
                    
                    
                    <h6 className="text-xl font-semibold">
                      Engagement Communautaire
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Rejoignez notre communauté engagée où chacun peut
                      contribuer à soutenir des projets et des initiatives sans
                      aucune attente de retour. Ensemble, nous pouvons réaliser
                      de grandes choses et avoir un impact positif sur le monde
                      qui nous entoure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
    <div className="px-4 py-5 flex-auto">
      
      <h6 className="text-xl font-semibold">
        Plateforme d'Entraide Mutuelle
      </h6>
      <p className="mt-2 mb-4 text-blueGray-500">
        Notre plateforme fonctionne sur le principe de l'entraide
        mutuelle. Chaque geste de générosité compte, et chaque
        membre de notre communauté peut apporter son soutien à
        ceux dans le besoin sans aucune attente de réciprocité.
        Ensemble, nous pouvons créer un monde plus solidaire et
        bienveillant.
      </p>
    </div>
  </div>
</div>

            </div>

            <div className="bg-white py-5 flex justify-center">
              {" "}
              {/* Centrage horizontal */}
              <div
                className="container mx-auto px-1 md:px-4"
                style={{ height: "180px", width: "400px" }}
              >
                <div className="text-center">
                  <h2 className="text-xl font-semibold">
                    Donnez vie à vos projets.
                  </h2>
                  <p className="text-lg-blueGray-500">
                    Transformez vos projets en réalité grâce à notre assistance
                    financière.
                  </p>
                  <div className="mt-8">
      <Link to="/demande">
        <button className="bg-black hover:bg-blueGray-500 text-white font-bold py-2 px-4 rounded-full border border-black mr-4">
          Commencer
        </button>
      </Link>
      <Link to="/about">
        <button className="bg-white hover:bg-gray-200 text-blueGray-500 font-bold py-2 px-4 rounded-full border border-black">
          À propos
        </button>
      </Link>
    </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Projet en quête de soutien financier
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Besoin de financement pour concrétiser vos projets ? Notre
                  plateforme d'aide financière est là pour vous accompagner dans
                  la réalisation de vos rêves.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Que ce soit pour lancer une entreprise, financer des études ou
                  mener à bien un projet personnel, nous sommes là pour vous
                  soutenir. Faites-nous part de votre projet et ensemble,
                  faisons de vos ambitions une réalité.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    Un coup de pouce financier pour votre famille.
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    "Besoin d'aide financière pour votre famille ? Découvrez nos
                    solutions adaptées pour faire face aux imprévus, subvenir
                    aux besoins de vos proches ou réaliser vos projets. Trouvez
                    le soutien dont vous avez besoin pour traverser sereinement
                    les moments difficiles de la vie. Parcourez notre site et
                    trouvez la meilleure manière de soulager votre situation
                    financière."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center"> 
      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div className="px-6">
          <img
            alt="..."
            src={"https://media.istockphoto.com/id/1310533180/fr/photo/homme-adulte-%C3%A0-la-mode-gai-dans-le-cadre-de-ville.jpg?s=612x612&w=0&k=20&c=bcHVxsSAObt6h2R604K2btDMy-jSPyn2DeWLjI85lIE="}
            className="shadow-lg rounded-full mx-auto max-w-120-px"
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">Camille Dubois</h5>
            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
              Grâce à l'aide financière obtenue et aux conseils du site,
              nous avons pu construire notre maison familiale sans
              encombre. Nous sommes maintenant installés dans notre
              nouveau chez-nous, parfaitement adapté à nos besoins.
              Merci pour votre aide précieuse !
            </p>
            <div className="mt-6"></div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div className="px-6">
          <img
            alt="..."
            src={"https://media.istockphoto.com/id/882495390/fr/photo/bonheur.jpg?s=612x612&w=0&k=20&c=NHtvO42OL8daiVyrgBPlVc26Ifhv2U4NuOp9kAnONtQ="}
            className="shadow-lg rounded-full mx-auto max-w-120-px"
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">Marry Mccoy</h5>
            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
              My real estate project wouldn't have been possible without
              the financial help I received. Thanks to this support, I
              was able to invest in properties and build a legacy for
              the future. I am grateful to those who believed in my
              project and provided me with the means to make it happen.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div className="px-6">
          <img
            alt="..."
            src={"https://media.istockphoto.com/id/1056238428/fr/photo/portrait-de-femme-africaine-%C3%A9l%C3%A9gante-et-%C3%A9l%C3%A9gante.jpg?s=612x612&w=0&k=20&c=g-eLlrUnyYUueLh0LLGu1L8pFnuys8VncRcsr7Vro_Q="}
            className="shadow-lg rounded-full mx-auto max-w-120-px"
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">Charlotte Girard</h5>
            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
              Grâce à l'aide financière que j'ai reçue, j'ai pu réaliser
              mon rêve de construire mon propre ranch. Cela aurait été
              impossible sans ce soutien financier. Aujourd'hui, je suis
              fier de voir mes chevaux galoper dans de vastes prairies,
              et je suis reconnaissant envers ceux qui ont rendu cela
              possible.
            </p>
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
