import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faPencil,
  faMagicWandSparkles,
  faSuitcase,
  faAddressBook,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import MainContent from "./MainContent";
import PhotoBox from "./PhotoBox";
import avatar from "../assets/images/avatar.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div
        className={`h-screen bg-gray-200 sm:w-[10rem]  md:w-[10rem] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex w-16 flex-col items-center">
          <PhotoBox
            avatar={avatar}
            name="Anano Topuria"
            nameFontSize="1rem" 
            responsive={true} 
            photoSize={{
              sm: "hidden",
              md: "20",
              lg: "20",
              xl: "20",
              xxl: "20",
            }}
          />
        </div>
        <div className="p-4">
          <ul>
            <li className="hidden sm:block">
              <FontAwesomeIcon icon={faUser} /> About Me
            </li>
            <li className="hidden sm:block">
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </li>
            <li className="hidden sm:block">
              <FontAwesomeIcon icon={faPencil} /> Experience
            </li>
            <li className="hidden sm:block">
              <FontAwesomeIcon icon={faMagicWandSparkles} /> Skills
            </li>
            <li className="hidden sm:block">
              <FontAwesomeIcon icon={faSuitcase} /> Portfolio
            </li>
            <li className="hidden sm:block">
              <FontAwesomeIcon icon={faAddressBook} /> Contacts
            </li>
            <li className="hidden sm:block">
              <FontAwesomeIcon icon={faComment} /> Feedback
            </li>
          </ul>
          <ul className="sm:hidden">
            {" "}
            <li className="">
              <FontAwesomeIcon icon={faUser} />
            </li>
            <li className="">
              <FontAwesomeIcon icon={faGraduationCap} />
            </li>
            <li className="">
              <FontAwesomeIcon icon={faPencil} />
            </li>
            <li className="">
              <FontAwesomeIcon icon={faMagicWandSparkles} />
            </li>
            <li className="">
              <FontAwesomeIcon icon={faSuitcase} />
            </li>
            <li className="">
              <FontAwesomeIcon icon={faAddressBook} />
            </li>
            <li className="">
              <FontAwesomeIcon icon={faComment} />
            </li>
          </ul>
        </div>
        <button
          onClick={toggleMenu}
          className="absolute right-[-2rem] top-4 p-2"
        >
          {isOpen ? (
            <span className="text-gray-600">✖</span>
          ) : (
            <span className="text-gray-600">☰</span>
          )}
        </button>
      </div>
      <MainContent isOpen={!isOpen} />
    </div>
  );
};

export default Navigation;
