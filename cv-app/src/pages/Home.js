import { Link } from "react-router-dom";
import PhotoBox from "../components/PhotoBox";
import avatar from "../assets/images/avatar.jpg";
import background from "../assets/images/background.png";
import Button from "../components/Button";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    overlay: "bg-black bg-opacity-60",
  };


  return (
    <div className="h-screen bg-cover bg-top" style={backgroundStyle}>
      <div className={`absolute inset-0 ${backgroundStyle.overlay}`}>
        <div className="flex h-screen flex-col items-center justify-center gap-5">
          <PhotoBox
            name="Anano Topuria"
            title="Programmer. Creative. Innovator"
            description="I'm a passionate and creative frontend developer with a strong foundation in HTML, CSS, and JavaScript. I excel at translating design concepts into responsive web applications that captivate users. My portfolio is a testament to my ability to bring ideas to life. I'm committed to continuous growth and am dedicated to enhancing my skills further."
            avatar={avatar}
            nameFontSize="3rem"
            responsive={true}
            photoSize={{
              sm: "48",
              md: "48",
              lg: "48",
              xl: "48",
              xxl: "48",
            }}
          />
          <Link to="/inner">
            <Button>Know More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
