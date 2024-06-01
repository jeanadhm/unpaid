import React from "react";
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();

  const handleLogout = () => {
    // Effacer le nom d'utilisateur du localStorage
    localStorage.removeItem("username");
    // Rediriger vers la page de connexion
    history.push("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blueGray-100">
      <button
        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={handleLogout}
      >
        Se déconnecter
      </button>
    </div>
  );
}