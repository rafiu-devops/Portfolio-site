import React, { useEffect } from 'react';
import logo from '/assets/logo.png';

const Header = () => {
  useEffect(() => {
    // Mobile Menu Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavWrap = document.querySelector('#main-nav-wrap');
    const body = document.body;
    
    if (menuToggle && mainNavWrap) {
      const handleMenuToggle = (e) => {
        e.preventDefault();
        
        // Toggle active classes
        menuToggle.classList.toggle('is-clicked');
        mainNavWrap.classList.toggle('mobile-show');
        body.classList.toggle('nav-wrap-is-visible');
      };

      // Add click event listener
      menuToggle.addEventListener('click', handleMenuToggle);

      // Close menu when clicking on navigation links
      const navLinks = mainNavWrap.querySelectorAll('.smoothscroll');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          menuToggle.classList.remove('is-clicked');
          mainNavWrap.classList.remove('mobile-show');
          body.classList.remove('nav-wrap-is-visible');
        });
      });

      // Close menu when clicking outside
      const handleOutsideClick = (e) => {
        if (!mainNavWrap.contains(e.target) && !menuToggle.contains(e.target)) {
          menuToggle.classList.remove('is-clicked');
          mainNavWrap.classList.remove('mobile-show');
          body.classList.remove('nav-wrap-is-visible');
        }
      };

      document.addEventListener('click', handleOutsideClick);

      // Cleanup function
      return () => {
        menuToggle.removeEventListener('click', handleMenuToggle);
        navLinks.forEach(link => {
          link.removeEventListener('click', handleMenuToggle);
        });
        document.removeEventListener('click', handleOutsideClick);
      };
    }

    // Smooth scrolling for navigation links
    const smoothScrollLinks = document.querySelectorAll('.smoothscroll');
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

  }, []);

  return (
    <header>
      <div className="row">
        <div className="top-bar">
          {/* Mobile Menu Toggle Button */}
          <a className="menu-toggle" href="#" role="button" aria-label="Toggle Menu">
            <span>Menu</span>
          </a>

          {/* Logo */}
          <div className="logo">
            <a href="#intro" className="smoothscroll">
              <img src={logo} alt="FOLIO" width="200" height="70" />
            </a>
          </div>

          {/* Navigation Menu */}
          <nav id="main-nav-wrap">
            <ul className="main-navigation">
              <li className="current">
                <a className="smoothscroll" href="#intro" title="Home">Home</a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" title="About">About</a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume" title="Resume">Resume</a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio-section" title="Projects">Projects</a>
              </li>
              <li>
                <a className="smoothscroll" href="#services" title="Services">Services</a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact" title="Contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div> 
      </div> 
    </header>
  );
};

export default Header;