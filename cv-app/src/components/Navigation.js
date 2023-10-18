import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`h-screen w-1/4 bg-gray-200 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <ul>
          <li className="hidden sm:block">
            <FontAwesomeIcon icon={faHome} /> Home
          </li>
          <li className="hidden sm:block">
            <FontAwesomeIcon icon={faUser} /> Profile
          </li>
          <li className="hidden sm:block">
            <FontAwesomeIcon icon={faCog} /> Settings
          </li>
        </ul>
        <ul className="sm:hidden">
          {" "}
          <li className="">
            <FontAwesomeIcon icon={faHome} /> 
          </li>
          <li className="">
            <FontAwesomeIcon icon={faUser} /> 
          </li>
          <li className="">
            <FontAwesomeIcon icon={faCog} /> 
          </li>
        </ul>
      </div>
      <button onClick={toggleMenu} className="absolute right-[-2rem] top-4 p-2">
        {isOpen ? (
          <span className="text-gray-600">✖</span>
        ) : (
          <span className="text-gray-600">☰</span>
        )}
      </button>
    </div>
  );
};

export default Navigation;
