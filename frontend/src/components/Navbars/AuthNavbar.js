/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full flex items-center justify-between px-2 py-3 bg-blueGray-200">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link
              className="text-blueGray-500 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              <img
                src="/logo.png"
                alt="logo"
                className="inline-block mr-2"
                style={{ height: '50px', width: '50px' }} // Adjust size as needed
              />
              Unpaidfinance
            </Link>
          </div>
          <button
            className="text-blueGray-500 text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none ml-auto" // Changed ml-auto to move the button to the right
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link
                  className="text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/"
                >
                  Accueil
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/demande"
                >
                  Demandes
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/services"
                >
                  Services
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/faq"
                >
                  FAQ
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/About"
                >
                  A propos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
