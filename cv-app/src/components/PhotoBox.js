import React from "react";

function PhotoBox({ name, title, description, avatar }) {
  return (
    <div className="mx-auto rounded-full flex flex-col justify-center items-center
     gap-5">
      <div className="mx-auto h-48 w-48 rounded-full border-2 border-white">
        <img src={avatar} alt={name} className="rounded-full" />
      </div>
      <h2 className="text-center text-6xl font-semibold  text-white">{name}</h2>
      <p className="text-center text-white text-2xl">{title}</p>
      <p className="text-center text-white w-1/2">{description}</p>
    </div>
  );
}

export default PhotoBox;
