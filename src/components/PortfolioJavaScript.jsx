import React, { useState, useEffect, useRef } from 'react';

const PortfolioJavaScript = () => {
  // State variables
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [statsAnimated, setStatsAnimated] = useState(false);

  // Menu Toggle Functions (based on original jQuery code)
  const handleMenuToggleClick = (e) => {
    if (e.target.closest('.menu-toggle')) {
      e.preventDefault();
      
      const toggleButton = e.target.closest('.menu-toggle');
      const nav = document.querySelector('.main-navigation');
      
      // Toggle the clicked state on button
      toggleButton.classList.toggle('is-clicked');
      
      // Toggle navigation visibility with slideToggle effect
      if (nav) {
        if (nav.style.display === 'none' || nav.style.display === '') {
          nav.style.display = 'block';
          setIsMenuOpen(true);
        } else {
          nav.style.display = 'none';
          setIsMenuOpen(false);
        }
      }
    }
  };

  const handleNavItemClick = (e) => {
    if (e.target.closest('.main-navigation li a')) {
      const toggleButton = document.querySelector('.menu-toggle');
      const nav = document.querySelector('.main-navigation');
      
      // Update the toggle button state
      if (toggleButton) {
        toggleButton.classList.toggle('is-clicked');
      }
      
      // Fade out the navigation panel
      if (nav) {
        nav.style.display = 'none';
        setIsMenuOpen(false);
      }
    }
  };

  // FitText Effect (replacing jQuery fitText)
  useEffect(() => {
    const handleLoad = () => {
      const loader = document.getElementById("loader");
      const preloader = document.getElementById("preloader");
      
      if (loader && preloader) {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
          setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => {
              preloader.style.display = "none";
            }, 300);
          }, 300);
        }, 500);
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Menu functionality based on original jQuery code
  useEffect(() => {
    // Initialize menu state
    const nav = document.querySelector('.main-navigation');
    if (nav && !isMenuOpen) {
      nav.style.display = 'none';
    }
  }, []);

  // Watch for menu state changes
  useEffect(() => {
    const nav = document.querySelector('.main-navigation');
    const toggleButton = document.querySelector('.menu-toggle');
    
    if (nav) {
      if (isMenuOpen) {
        nav.style.display = 'block';
      } else {
        nav.style.display = 'none';
      }
    }
    
    if (toggleButton) {
      if (isMenuOpen) {
        toggleButton.classList.add('is-clicked');
      } else {
        toggleButton.classList.remove('is-clicked');
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const introH1 = document.querySelector('#intro h1');
      if (introH1) {
        const resizeText = () => {
          const windowWidth = window.innerWidth;
          let fontSize = Math.max(42, Math.min(84, windowWidth / 15));
          introH1.style.fontSize = fontSize + 'px';
        };
        
        resizeText();
        window.addEventListener('resize', resizeText);
        
        return () => window.removeEventListener('resize', resizeText);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Owl Carousel Effect (if you're using owl carousel)
  useEffect(() => {
    const owlSlider = document.getElementById("owl-slider");
    if (owlSlider && window.$) {
      window.$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom: [
          [0, 1],
          [700, 2],
          [960, 3]
        ],
        navigationText: false
      });
    }
  }, []);

  // Alert Boxes Handler
  useEffect(() => {
    const handleAlertClose = (e) => {
      if (e.target.classList.contains('close') && e.target.closest('.alert-box')) {
        e.target.closest('.alert-box').style.opacity = '0';
        setTimeout(() => {
          e.target.closest('.alert-box').style.display = 'none';
        }, 500);
      }
    };

    document.addEventListener('click', handleAlertClose);
    return () => document.removeEventListener('click', handleAlertClose);
  }, []);

  // Stats Counter with Waypoint
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          
          const stats = entry.target.querySelectorAll('.stat-count');
          stats.forEach(stat => {
            const finalValue = parseInt(stat.textContent);
            let currentValue = 0;
            const increment = finalValue / 100;
            
            const timer = setInterval(() => {
              currentValue += increment;
              if (currentValue >= finalValue) {
                stat.textContent = finalValue;
                clearInterval(timer);
              } else {
                stat.textContent = Math.ceil(currentValue);
              }
            }, 40);
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.9,
      rootMargin: '0px 0px -10% 0px'
    });

    const statsSection = document.getElementById('stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [statsAnimated]);

  // Masonry Effect
  useEffect(() => {
    const containerProjects = document.getElementById('folio-wrapper');
    
    if (containerProjects) {
      const initMasonry = () => {
        if (window.imagesLoaded && window.Masonry) {
          window.imagesLoaded(containerProjects, () => {
            new window.Masonry(containerProjects, {
              itemSelector: '.folio-item',
              resize: true
            });
          });
        }
      };

      const images = containerProjects.querySelectorAll('img');
      if (images.length === 0) {
        initMasonry();
      } else {
        let loadedImages = 0;
        images.forEach(img => {
          if (img.complete) {
            loadedImages++;
          } else {
            img.onload = () => {
              loadedImages++;
              if (loadedImages === images.length) {
                initMasonry();
              }
            };
          }
        });
        if (loadedImages === images.length) {
          initMasonry();
        }
      }
    }
  }, []);

  // Highlight current section in navigation
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeSection = entry.target;
          const activeLink = document.querySelector(`#main-nav-wrap a[href="#${activeSection.id}"]`);
          
          // Remove current class from all nav items
          document.querySelectorAll('#main-nav-wrap li').forEach(li => {
            li.classList.remove('current');
          });
          
          // Add current class to active link
          if (activeLink) {
            activeLink.parentElement.classList.add('current');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.25,
      rootMargin: '0px 0px -75% 0px'
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smooth Scrolling
  const handleSmoothScroll = (e) => {
    if (e.target.classList.contains('smoothscroll')) {
      e.preventDefault();
      
      const target = e.target.getAttribute('href');
      const targetElement = document.querySelector(target);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL hash
        setTimeout(() => {
          window.location.hash = target;
        }, 800);
      }
    }
  };

  // Contact Form Handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setShowThankYou(true);
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Failed to send message.');
    } finally {
      setFormSubmitting(false);
    }
  };

 // Back to Top Button
  useEffect(() => {
    const handleScroll = () => {
      const headerSearch = document.getElementById('header-search');
      const shouldShow = window.pageYOffset >= 300;
      
      if (!headerSearch || !headerSearch.classList.contains('is-visible')) {
        setShowBackToTop(shouldShow);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Event Listeners
  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e) => {
      // Escape key
      if (e.key === 'Escape') {
        // Close mobile menu on escape
        if (isMenuOpen) {
          setIsMenuOpen(false);
          const toggleButton = document.querySelector('.menu-toggle');
          const nav = document.querySelector('.main-navigation');
          
          if (toggleButton) {
            toggleButton.classList.remove('is-clicked');
          }
          if (nav) {
            nav.style.display = 'none';
          }
        }
      }
    };

    // Smooth scroll click
    const handleSmoothScrollClick = (e) => {
      handleSmoothScroll(e);
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleSmoothScrollClick);
    document.addEventListener('click', handleMenuToggleClick);
    document.addEventListener('click', handleNavItemClick);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleSmoothScrollClick);
      document.removeEventListener('click', handleMenuToggleClick);
      document.removeEventListener('click', handleNavItemClick);
    };
  }, [isMenuOpen]);

  // Placeholder plugin replacement (modern browsers handle this automatically)
  useEffect(() => {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      if (!input.placeholder && input.getAttribute('data-placeholder')) {
        input.placeholder = input.getAttribute('data-placeholder');
      }
    });
  }, []);

  // Global functions for use in HTML
  useEffect(() => {
    // Make functions globally available
    window.handleFormSubmit = handleFormSubmit;

    // Cleanup
    return () => {
      delete window.handleFormSubmit;
    };
  }, []);

  // Console log for verification
  useEffect(() => {
    console.log("React Portfolio JS loaded (without portfolio section)");
    console.log("Menu toggle functionality added");
    console.log("Form handling functionality added");
    console.log("Navigation and scroll functionality added");
  }, []);

  return (
    <>
   {/* Go To Top Button - Matching your original HTML structure */}
      {showBackToTop && (
        <div id="go-top">
          <a 
            className="smoothscroll" 
            title="Back to Top" 
            href="#top"
            onClick={scrollToTop}
            style={{ cursor: 'pointer' }}
          >
            <i className="fas fa-long-arrow-alt-up"></i>
          </a>
        </div>
      )}
      {/* Thank You Popup */}
      {showThankYou && (
        <div 
          id="thankYouPopup"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }}
        >
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully.</p>
            <button onClick={() => setShowThankYou(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Submit Loader */}
      {formSubmitting && (
        <div 
          id="submit-loader"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '5px',
            zIndex: 10000
          }}
        >
          Sending...
        </div>
      )}

      {/* Debug Info */}
      <div id="debugInfo" style={{ display: 'none' }}>
        Menu Status: {isMenuOpen ? 'Open' : 'Closed'}
      </div>
    </>
  );
};

export default PortfolioJavaScript;