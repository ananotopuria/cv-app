import React from "react";

function PhotoBox(props) {
  const view1 =
      <div className="app-section__panel--user">
          <img src={props.imgSrc} className="rounded-full" alt={`${props.fullName} avatar`} />
          <h3 className="max-w-600 hidden">{props.fullName}</h3>
          {props.children}
      </div>
  const view2 =
      <div className="flex flex-col justify-center items-center gap-4 mt-20">
          <img src={props.imgSrc} className="mx-auto border border-white rounded-full flex flex-col justify-center w-64" alt={`${props.fullName} avatar`} />
          <h1 className="text-white text-6xl font-semibold">{props.fullName}</h1>
          <h2 className="text-2xl text-white">{props.position}</h2>
          <div className="text-lg text-center text-white mx-[10rem]">{props.description}</div>
          {props.children}
      </div>
  if(props.position && props.description) return view2;
  else return view1;
}

export default PhotoBox;
