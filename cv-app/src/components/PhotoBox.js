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
