import React from 'react';
// Remove React Icons imports
// import { FaLinkedinIn, FaGithub, FaUpwork, FaWhatsapp, FaLongArrowAltUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="row">

        {/* Social Links */}
        <div className="col-six tab-full pull-right social">
          <ul className="footer-social">
            <li>
              
               <a href="https://www.linkedin.com/in/abdul-rafiu-388662373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              
              <a  href="https://github.com/rafiu-devops"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              
               <a href="https://www.upwork.com/freelancers/~01d8b5242ce37cea85?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-upwork"></i>
              </a>
            </li>
            <li>
              
              <a  href="https://www.fiverr.com/mr_rafiu_09?public_mode=true"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'Poppins' }}
              >
                Fiverr
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="col-six tab-full">
          <div className="copyright">
            <span>© 2025.</span>
            <span>
              Design by <a href="#about">Abdul Rafiu</a>
            </span>
          </div>
        </div>

        {/* WhatsApp Floating Icon */}
        
         <a href="https://wa.me/923470139661"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;