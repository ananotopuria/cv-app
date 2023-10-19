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
    <div className="address text-gray-900">
      <div className="email mb-4" onClick={handleEmailClick}>
        <span className="font-semibold">
          <FontAwesomeIcon icon={faEnvelope} className="text-green-500" />
          Email:
        </span>
        <a href={`mailto:${emailAddress}`} className="ml-2">
          {emailAddress}
        </a>
      </div>
      <div className="phone mb-4">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faPhone} className="text-green-500" />
          Phone:
        </span>
        <a href={`tel:${phoneNumber}`} className="ml-2">
          {phoneNumber}
        </a>
      </div>
      <div className="linkedin mb-4">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faLinkedinIn}  className="text-green-500" />
          LinkedIn:
        </span>
        <a href={linkedinLink} className="ml-2">
          {linkedinLink}
        </a>
      </div>
      <div className="facebook mb-4">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faFacebook} className="text-green-500"/>
          Facebook:
        </span>
        <a href={facebookLink} className="ml-2">
          {facebookLink}
        </a>
      </div>
      <div className="instagram">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faInstagram} className="text-green-500" />
          Instagram:
        </span>
        <a href={instagramLink} className="ml-2">
          {instagramLink}
        </a>
      </div>
      <div className="github">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faGithub} className="text-green-500" />
          GitHub:
        </span>
        <a href={githubLink} className="ml-2">
          {githubLink}
        </a>
      </div>
      <div className="gitlab">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faGitlab} className="text-green-500" />
          GitLab:
        </span>
        <a href={gitlabLink} className="ml-2">
          {gitlabLink}
        </a>
      </div>
    </div>
  );
});

export default Address;
