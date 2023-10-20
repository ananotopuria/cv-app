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
import { Link as ScrollLink } from "react-scroll";

function Nav() {
  return (
    <div>
      <div className="p-8">
        <ul className="p- flex flex-col gap-7 sm:w-32 md:w-32">
          <li className="hidden sm:block">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faUser} />
              <span className="p-4">About Me</span>
            </ScrollLink>
          </li>
          <li className="hidden sm:block">
            <ScrollLink
              to="education"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faGraduationCap} />
              <span className="p-4">Education</span>
            </ScrollLink>
          </li>
          <li className="hidden sm:block">
            <ScrollLink
              to="experience"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faPencil} />
              <span className="p-3">Experience</span>
            </ScrollLink>
          </li>
          <li className="hidden sm:block">
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faMagicWandSparkles} />
              <span className="p-4">Skills</span>
            </ScrollLink>
          </li>
          <li className="hidden sm:block">
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faSuitcase} />
              <span className="p-4">Portfolio</span>
            </ScrollLink>
          </li>
          <li className="hidden sm:block">
            <ScrollLink
              to="contacts"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faAddressBook} />
              <span className="p-4">Contacts</span>
            </ScrollLink>
          </li>
          <li className="hidden sm:block">
            <ScrollLink
              to="feedback"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faComment} />
              <span className="p-4">Feedback</span>
            </ScrollLink>
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
      </div>
      <div>
        <ul className="sm:hidden flex flex-col gap-4 items-center">
          <li className="nav-item">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer  hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faUser} />
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="education"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faGraduationCap} />
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="experience"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faPencil} />
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faMagicWandSparkles} />
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faSuitcase} />
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="contacts"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faAddressBook} />
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="feedback"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-[#26c27e]"
            >
              <FontAwesomeIcon icon={faComment} />
            </ScrollLink>
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
      </div>
    </div>
  );
}

export default Nav;
