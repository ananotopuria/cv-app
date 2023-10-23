import React from "react";

// function PhotoBox({
//   name,
//   title,
//   description,
//   avatar,
//   nameFontSize,
//   responsive,
//   photoSize,
// }) {
//   const containerClasses = `mx-auto rounded-full flex flex-col justify-center items-center gap-5 ${
//     responsive ? "sm:flex" : ""
//   }`;
//   const photoClasses = `mx-auto 
//   h-${photoSize.sm} w-${photoSize.sm} sm:h-${photoSize.md} sm:w-${photoSize.md} md:h-${photoSize.lg} md:w-${photoSize.lg} lg:h-${photoSize.xl} lg:w-${photoSize.xl} xl:h-${photoSize.xxl} xl:w-${photoSize.xxl} 
//   rounded-full border-2 border-white`;

//   return (
//     <div className={containerClasses}>
//       {responsive ? (
//         <div className={photoClasses}>
//           <img src={avatar} alt={name} className="rounded-full" />
//         </div>
//       ) : null}
//       {responsive && photoSize.sm !== "hidden" ? ( 
//         <h2 className="text-center text-6xl font-semibold text-white" style={{ fontSize: nameFontSize }}>
//           {name}
//         </h2>
//       ) : null}
//       {responsive ? (
//         <p className="text-center text-2xl text-white">{title}</p>
//       ) : null}
//       {responsive ? (
//         <p className="w-1/2 text-center text-white">{description}</p>
//       ) : null}
//     </div>
//   );
// }


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
