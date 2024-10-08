import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white text-center py-4">
<div className="socialIcons">
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white hover:text-gray-500 mx-4" />
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-gray-500 mx-4" />
  </a>
  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} size="2x" className="text-white hover:text-gray-500 mx-4" />
  </a>
  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faYoutube} size="2x" className="text-white hover:text-gray-500 mx-4" />
  </a>
</div>

      <div className="footerBottom">
        <h2>Phone: +96655555555, Address: 13318</h2>
        <p className="font-bold">#assignment #recycling © 2024-25 / IMSIU / CCIS &trade;</p>
      </div>
    </footer>
  );
};

export default Footer;
