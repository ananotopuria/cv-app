// import React from "react";

// function PhotoBox({ name, title, description, avatar, nameFontSize, photoSize }) {
//   return (
//     <div className="mx-auto rounded-full flex flex-col justify-center items-center gap-5">
//       <div className={`mx-auto h-${photoSize} w-${photoSize} rounded-full border-2 border-white`}>
//         <img src={avatar} alt={name} className="rounded-full" />
//       </div>
//       <h2 className="text-center text-6xl font-semibold text-white" style={{ fontSize: nameFontSize }}>
//         {name}
//       </h2>
//       <p className="text-center text-white text-2xl">{title}</p>
//       <p className="text-center text-white w-1/2">{description}</p>
//     </div>
//   );
// }

// export default PhotoBox;

// import React from "react";

// function PhotoBox({ name, title, description, avatar, nameFontSize, isResponsive }) {
//   const photoSize = isResponsive
//     ? {
//         sm: "10",  // Set the size for small screens (sm)
//         md: "48",  // Set the size for medium screens (md)
//         lg: "64",  // Set the size for large screens (lg)
//       }
//     : "64";  // Default size when not responsive

//   return (
//     <div className="mx-auto rounded-full flex flex-col justify-center items-center gap-5">
//       <div className={`mx-auto h-${isResponsive ? photoSize.sm : photoSize} w-${isResponsive ? photoSize.sm : photoSize} rounded-full border-2 border-white`}>
//         <img src={avatar} alt={name} className="rounded-full" />
//       </div>
//       <h2 className="text-center text-6xl font-semibold text-white" style={{ fontSize: nameFontSize }}>
//         {name}
//       </h2>
//       <p className="text-center text-white text-2xl">{title}</p>
//       <p className="text-center text-white w-1/2">{description}</p>
//     </div>
//   );
// }

// export default PhotoBox;

// import React from "react";

// function PhotoBox({ name, title, description, avatar, nameFontSize, isResponsive }) {
//   return (
//     <div className="mx-auto rounded-full flex flex-col justify-center items-center gap-5">
//       {/* Show both photo and name on medium and large screens */}
//       <div className={`hidden sm:block mx-auto h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 xl:h-96 xl:w-96 rounded-full border-2 border-white`}>
//         <img src={avatar} alt={name} className="rounded-full" />
//       </div>

//       <h2 className="text-center text-6xl font-semibold text-white" style={{ fontSize: nameFontSize }}>
//         {name}
//       </h2>

//       {/* Show only the photo on small screens */}
//       {isResponsive.sm && (
//         <div className="block sm:hidden mx-auto h-32 w-32 rounded-full border-2 border-white">
//           <img src={avatar} alt={name} className="rounded-full" />
//         </div>
//       )}

//       <p className="text-center text-white text-2xl">{title}</p>
//       <p className="text-center text-white w-1/2">{description}</p>
//     </div>
//   );
// }

// export default PhotoBox;

// import React from "react";

// function PhotoBox({ name, title, description, avatar, nameFontSize, responsive, showNameOnSmall }) {
//   const containerClasses = `mx-auto rounded-full flex flex-col justify-center items-center gap-5 ${responsive ? "sm:flex" : ""}`;
//   const photoClasses = `mx-auto h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 xl:h-96 xl:w-96 rounded-full border-2 border-white`;

//   return (
//     <div className={containerClasses}>
//       {showNameOnSmall || responsive ? (
//         <div className={photoClasses}>
//           <img src={avatar} alt={name} className="rounded-full" />
//         </div>
//       ) : null}
//       {showNameOnSmall || responsive ? (
//         <h2 className={`text-center text-6xl font-semibold text-white ${responsive ? "sm:hidden" : ""}`} style={{ fontSize: nameFontSize }}>
//           {name}
//         </h2>
//       ) : null}
//       <p className="text-center text-white text-2xl">{title}</p>
//       <p className="text-center text-white w-1/2">{description}</p>
//     </div>
//   );
// }

// export default PhotoBox;

// import React from "react";

// function PhotoBox({
//   name,
//   title,
//   description,
//   avatar,
//   nameFontSize,
//   responsive,
//   photoSize,
//   showNameOnSmall
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
//       {!showNameOnSmall || !responsive ? ( 
//         <h2 className="text-center text-6xl font-semibold text-white display:none" style={{ fontSize: nameFontSize }}>
//           {name}
//         </h2>
//       ) : null}
//       <p className="text-center text-2xl text-white">{title}</p>
//       <p className="w-1/2 text-center text-white">{description}</p>
//     </div>
//   );
// }

// export default PhotoBox;

// import React from "react";

// function PhotoBox({
//   name,
//   title,
//   description,
//   avatar,
//   nameFontSize,
//   responsive,
//   photoSize,
//   showNameOnSmall,
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
//       {(showNameOnSmall || !responsive || photoSize.sm !== photoSize.sm) ? ( // Hide name on small screens only
//         <h2 className="text-center text-6xl font-semibold text-white" style={{ fontSize: nameFontSize }}>
//           {name}
//         </h2>
//       ) : null}
//       {(showNameOnSmall || !responsive) ? ( // Show text on small screens
//         <p className="text-center text-2xl text-white">{title}</p>
//       ) : null}
//       {(showNameOnSmall || !responsive) ? ( // Show text on small screens
//         <p className="w-1/2 text-center text-white">{description}</p>
//       ) : null}
//     </div>
//   );
// }

// export default PhotoBox;

// import React from "react";

// function PhotoBox({
//   name,
//   title,
//   description,
//   avatar,
//   nameFontSize,
//   responsive,
//   photoSize,
//   showNameOnSmall,
// }) {
//   const containerClasses = `mx-auto rounded-full flex flex-col justify-center items-center gap-5 ${
//     responsive ? "sm:flex" : ""
//   }`;
//   const photoClasses = `mx-auto 
//   h-${photoSize.sm} w-${photoSize.sm} sm:h-${photoSize.md} sm:w-${photoSize.md} md:h-${photoSize.lg} md:w-${photoSize.lg} lg:h-${photoSize.xl} lg:w-${photoSize.xl} xl:h-${photoSize.xxl} xl:w-${photoSize.xxl} 
//   rounded-full border-2 border-white`;

//   const shouldShowName = showNameOnSmall || !responsive;

//   return (
//     <div className={containerClasses}>
//       {responsive ? (
//         <div className={photoClasses}>
//           <img src={avatar} alt={name} className="rounded-full" />
//         </div>
//       ) : null}
//       {shouldShowName ? (
//         <h2 className="text-center text-6xl font-semibold text-white" style={{ fontSize: nameFontSize }}>
//           {name}
//         </h2>
//       ) : null}
//       {shouldShowName ? (
//         <p className="text-center text-2xl text-white">{title}</p>
//       ) : null}
//       {shouldShowName ? (
//         <p className="w-1/2 text-center text-white">{description}</p>
//       ) : null}
//     </div>
//   );
// }

// export default PhotoBox;

import React from "react";

function PhotoBox({
  name,
  title,
  description,
  avatar,
  nameFontSize,
  responsive,
  photoSize,
}) {
  const containerClasses = `mx-auto rounded-full flex flex-col justify-center items-center gap-5 ${
    responsive ? "sm:flex" : ""
  }`;
  const photoClasses = `mx-auto 
  h-${photoSize.sm} w-${photoSize.sm} sm:h-${photoSize.md} sm:w-${photoSize.md} md:h-${photoSize.lg} md:w-${photoSize.lg} lg:h-${photoSize.xl} lg:w-${photoSize.xl} xl:h-${photoSize.xxl} xl:w-${photoSize.xxl} 
  rounded-full border-2 border-white`;

  return (
    <div className={containerClasses}>
      {responsive ? (
        <div className={photoClasses}>
          <img src={avatar} alt={name} className="rounded-full" />
        </div>
      ) : null}
      {responsive && photoSize.sm !== "hidden" ? ( 
        <h2 className="text-center text-6xl font-semibold text-white" style={{ fontSize: nameFontSize }}>
          {name}
        </h2>
      ) : null}
      {responsive ? (
        <p className="text-center text-2xl text-white">{title}</p>
      ) : null}
      {responsive ? (
        <p className="w-1/2 text-center text-white">{description}</p>
      ) : null}
    </div>
  );
}

export default PhotoBox;
