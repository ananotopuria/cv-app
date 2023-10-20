import React, { forwardRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedinIn, faFacebook, faInstagram, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';

const Address = forwardRef((props, ref) => {
  const emailAddress = "anano.topuriaa@gmail.com";
  const phoneNumber = "(+995)555218953";
  const facebookLink = "https://www.facebook.com/anano.topuria.92/";
  const instagramLink = "https://www.instagram.com/ananotopuria/";
  const linkedinLink = "https://www.linkedin.com/in/anano-topuria-2b3173224/";
  const githubLink = "https://github.com/ananotopuria";
  const gitlabLink = "https://gitlab.com/ananotopuria";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="address text-gray-900 ">
      <div className="email mb-4 flex flex-col" onClick={handleEmailClick}>
        <span className="font-semibold  ">
          <FontAwesomeIcon icon={faEnvelope} className="text-[#26c17e] text-2xl" />
          <span className="ml-3 text-[#222935]">Email:</span>
        </span>
        <a href={`mailto:${emailAddress}`} className=" text-[#667081] ml-7">
          {emailAddress}
        </a>
      </div>
      <div className="phone mb-4 flex flex-col">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faPhone} className="text-[#26c17e] text-2xl" />
          <span className="ml-3 text-[#222935]">Phone:</span>
        </span>
        <a href={`tel:${phoneNumber}`} className="ml-7 text-[#667081]">
          {phoneNumber}
        </a>
      </div>
      <div className="linkedin mb-4 flex flex-col">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faLinkedinIn}  className="text-[#26c17e] text-2xl" />
          <span className="ml-3 text-[#222935]">LinkedIn:</span>
        </span>
        <a href={linkedinLink} className="ml-7 text-[#667081]">
          {linkedinLink}
        </a>
      </div>
      <div className="facebook mb-4 flex flex-col">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faFacebook} className="text-[#26c17e] text-2xl"/>
          <span className="ml-3 text-[#222935]">Facebook:</span>
        </span>
        <a href={facebookLink} className="ml-7 text-[#667081]">
          {facebookLink}
        </a>
      </div>
      <div className="instagram mb-4 flex flex-col">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faInstagram} className="text-[#26c17e] text-2xl" />
          <span className="ml-3 text-[#222935]">Instagram:</span>
        </span>
        <a href={instagramLink} className="ml-7 text-[#667081]">
          {instagramLink}
        </a>
      </div>
      <div className="github mb-4 flex flex-col">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faGithub} className="text-[#26c17e] text-2xl" />
          <span className="ml-3 text-[#222935]">GitHub:</span>
        </span>
        <a href={githubLink} className="ml-7 text-[#667081]">
          {githubLink}
        </a>
      </div>
      <div className="gitlab mb-4 flex flex-col">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faGitlab} className="text-[#26c17e] text-2xl" />
          <span className="ml-3 text-[#222935]">GitLab:</span>
        </span>
        <a href={gitlabLink} className="ml-7 text-[#667081]">
          {gitlabLink}
        </a>
      </div>
    </div>
  );
});

export default Address;
