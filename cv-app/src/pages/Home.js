import { Link } from "react-router-dom";
import React from "react";
import PhotoBox from "../components/PhotoBox";
import avatar from "../assets/images/avatar.jpg";
import background from "../assets/images/background.png";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    overlay: "bg-black bg-opacity-60",
  };

  return (
    <div className="h-screen bg-cover bg-top" style={backgroundStyle}>
      <div className={`absolute inset-0 ${backgroundStyle.overlay}`}>
        <div className="flex h-screen flex-col items-center justify-center gap-20">
          <PhotoBox
            name="Anano Topuria"
            title="Title"
            description="Description goes here."
            avatar={avatar}
            nameFontSize="1rem" 
            responsive={true}
            photoSize={{
              sm: "32",
              md: "48",
              lg: "64",
              xl: "80",
              xxl: "96",
            }}
          />
          <Link
            to="/inner"
            className="rounded-lg bg-[#222935] px-5 py-3 text-[#fff]"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
