import React, { useState } from "react";
import MainContent from "./MainContent";
import PhotoBox from "./PhotoBox";
import avatar from "../assets/images/avatar.jpg";
import Nav  from "./Nav";
import ScrollToTopButton from "./ScrollToTopButton";

const InnerPageContent = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div
        className={`h-full bg-[#222935] text-[#667081] sm:w-[10rem]  md:w-[15rem] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex w-16 flex-col items-center justify-center  md:ml-10 sm:ml-8 mt-10">
        <PhotoBox imgSrc={avatar} fullName="Anano Topuria" />
        </div>
        <Nav/>
        <button
          onClick={toggleMenu}
          className="absolute right-[-2rem] top-4 p-4"
        >
          {isOpen ? (
            <span className="text-white bg-[#222935] p-1 rounded ">✖</span>
          ) : (
            <span className="text-white bg-[#222935] p-1 rounded">☰</span>
          )}
        </button>
      </div>
      <MainContent isOpen={!isOpen} />
      <ScrollToTopButton />
    </div>
  );
};

export default InnerPageContent;
