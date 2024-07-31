// src/components/Footer.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-hsla(200, 80%, 69%, 1) p-4" style={{ width: '100%', height: 'auto' }}>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between text-black space-y-4 md:space-y-0 py-8 px-8">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>email@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>1234 Example St, City, Country</span>
          </div>
        </div>
        <div className="flex space-x-4 text-white">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
