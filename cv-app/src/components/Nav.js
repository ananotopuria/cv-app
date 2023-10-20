import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faPencil,
  faMagicWandSparkles,
  faSuitcase,
  faAddressBook,
  faComment,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className="p-8">
      <ul className="flex flex-col gap-7 sm:w-32 md:w-32">
        <li className="hidden sm:block ">
          <div className="cursor-pointer hover:text-[#26c27e]">
            <FontAwesomeIcon icon={faUser} />
            <span className="p-4">About Me</span>
          </div>
        </li>
        <li className="hidden sm:block">
          <div className="cursor-pointer hover:text-[#26c27e]">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span className="p-4">Education</span>
          </div>
        </li>
        <li className="hidden sm:block">
          <div className="cursor-pointer hover:text-[#26c27e]">
            <FontAwesomeIcon icon={faPencil} />
            <span className="p-3">Experience</span>
          </div>
        </li>
        <li className="hidden sm:block">
          <div className="cursor-pointer hover:text-[#26c27e]">
            <FontAwesomeIcon icon={faMagicWandSparkles} />
            <span className="p-4">Skills</span>
          </div>
        </li>
        <li className="hidden sm:block">
          <div className="cursor-pointer hover:text-[#26c27e]">
            <FontAwesomeIcon icon={faSuitcase} />
            <span className="p-4">Portfolio</span>
          </div>
        </li>
        <li className="hidden sm:block">
          <div className="cursor-pointer hover:text-[#26c27e]">
            <FontAwesomeIcon icon={faAddressBook} />
            <span className="p-4">Contacts</span>
          </div>
        </li>
        <li className="hidden sm:block">
          <div className="cursor-pointer hover:text-[#26c27e]">
            <FontAwesomeIcon icon={faComment} />
            <span className="p-4">Feedback</span>
          </div>
        </li>
        <li className="hidden sm:block">
          <Link
            to="/"
            className="absolute bottom-8 left-5 md:w-[9rem] lg:w-[10rem]"
          >
            <Button className="flex flex-row">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span className="p-2 md:p-4 lg:p-2">Go back</span>
            </Button>
          </Link>
        </li>
      </ul>
      <ul className="sm:hidden">
        <li className="nav-item">
          <FontAwesomeIcon
            icon={faUser}
            className="cursor-pointer py-2 hover:text-[#26c27e]"
          />
        </li>
        <li className="nav-item">
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="cursor-pointer py-2 hover:text-[#26c27e]"
          />
        </li>
        <li className="nav-item">
          <FontAwesomeIcon
            icon={faPencil}
            className="cursor-pointer py-2 hover:text-[#26c27e]"
          />
        </li>
        <li className="nav-item">
          <FontAwesomeIcon
            icon={faMagicWandSparkles}
            className="cursor-pointer py-2 hover:text-[#26c27e]"
          />
        </li>
        <li className="nav-item">
          <FontAwesomeIcon
            icon={faSuitcase}
            className="cursor-pointer py-2 hover:text-[#26c27e]"
          />
        </li>
        <li className="nav-item">
          <FontAwesomeIcon
            icon={faAddressBook}
            className="cursor-pointer py-2 hover:text-[#26c27e]"
          />
        </li>
        <li className="nav-item">
          <FontAwesomeIcon
            icon={faComment}
            className="cursor-pointer py-2 hover:text-[#26c27e]"
          />
        </li>
        <li className="nav-item absolute bottom-8 left-5">
          <Link
            to="/"
            className="cursor-pointer rounded-lg bg-[#26c17e] px-4 py-2 text-[#fff]"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
