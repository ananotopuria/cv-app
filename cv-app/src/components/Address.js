import React, { forwardRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedinIn, faFacebook, faInstagram, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';


const contactInfo = {
  email: {
    icon: faEnvelope,
    label: "Email:",
    value: "anano.topuriaa@gmail.com",
  },
  phone: {
    icon: faPhone,
    label: "Phone:",
    value: "(+995)555218953",
  },
  linkedin: {
    icon: faLinkedinIn,
    label: "LinkedIn:",
    value: "https://www.linkedin.com/in/anano-topuria-2b3173224/",
  },
  facebook: {
    icon: faFacebook,
    label: "Facebook:",
    value: "https://www.facebook.com/anano.topuria.92/",
  },
  instagram: {
    icon: faInstagram,
    label: "Instagram:",
    value: "https://www.instagram.com/ananotopuria/",
  },
  github: {
    icon: faGithub,
    label: "GitHub:",
    value: "https://github.com/ananotopuria",
  },
  gitlab: {
    icon: faGitlab,
    label: "GitLab:",
    value: "https://gitlab.com/ananotopuria",
  },
};

const Address = forwardRef((props, ref) => {
  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="address text-gray-900">
      {Object.keys(contactInfo).map((key) => (
        <div key={key} className={`${key} mb-4 flex flex-col`} onClick={() => handleLinkClick(contactInfo[key].value)}>
          <span className="font-semibold">
            <FontAwesomeIcon icon={contactInfo[key].icon} className="text-[#26c17e] text-2xl" />
            <span className="ml-3 text-[#222935]">{contactInfo[key].label}</span>
          </span>
          <a href={contactInfo[key].value} className="ml-7 text-[#667081]">
            {contactInfo[key].value}
          </a>
        </div>
      ))}
    </div>
  );
});

export default Address;