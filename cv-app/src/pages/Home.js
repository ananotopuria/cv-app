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
  const userData = {
    name: "Anano Topuria",
    title: "Programmer. Creative. Innovator",
    description: "I'm a passionate and creative frontend developer with a strong foundation in HTML, CSS, and JavaScript. I excel at translating design concepts into responsive web applications that captivate users. My portfolio is a testament to my ability to bring ideas to life. I'm committed to continuous growth and am dedicated to enhancing my skills further.",
    avatar: avatar,
  };
  return (
    <div className="h-screen bg-cover bg-top" style={backgroundStyle}>
      <div className={`absolute inset-0 ${backgroundStyle.overlay}`}>
        <div className="h-screen flex flex-col justify-center gap-20 items-center">

        <PhotoBox
          name={userData.name}
          title={userData.title}
          description={userData.description}
          avatar={userData.avatar}
        />

        <Link to="/inner" className="bg-[#222935] text-[#fff] px-5 py-3 rounded-lg">
          Know More
        </Link>

        </div>
      </div>
    </div>
  );
}

export default Home;
