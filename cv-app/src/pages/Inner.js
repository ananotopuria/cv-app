import React from "react";
import Navigation from "../components/Navigation";
import MainContent from "../components/MainContent";

function Inner() {
  return (
    <div className="flex">
      <Navigation />
      <MainContent />
    </div>
  );
}

export default Inner;
