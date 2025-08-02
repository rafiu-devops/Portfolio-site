import React, { useState, useEffect, useRef } from 'react';

const PortfolioSection = () => {
  // State for video modals
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  
  // State for image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  
  // Refs for videos
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  // Portfolio Modal Functions
  const openModal = (modalId) => {
    setActiveModal(modalId);
    document.body.style.overflow = 'hidden';
    initializeImageCarousel(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
    resetCarousel();
  };

  // Video Modal Functions
  const openVideoModal = (modalNumber) => {
    setActiveVideoModal(modalNumber);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setActiveVideoModal(null);
    document.body.style.overflow = 'auto';
    
    // Pause and reset videos
    if (video1Ref.current) {
      video1Ref.current.pause();
      video1Ref.current.currentTime = 0;
    }
    if (video2Ref.current) {
      video2Ref.current.pause();
      video2Ref.current.currentTime = 0;
    }
  };

  // Image Carousel Functions
  const initializeImageCarousel = (modalId) => {
    setCurrentImageIndex(0);
    setTotalImages(1);
  };

  const changeImage = (direction) => {
    const newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < totalImages) {
      setCurrentImageIndex(newIndex);
    }
  };

  const resetCarousel = () => {
    setCurrentImageIndex(0);
    setTotalImages(0);
  };

  // Effect for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeVideoModal) {
          closeVideoModal();
        }
        if (activeModal) {
          closeModal();
        }
      }
      
      if (activeModal && totalImages > 1) {
        if (e.key === 'ArrowLeft') {
          changeImage(-1);
        } else if (e.key === 'ArrowRight') {
          changeImage(1);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeVideoModal, activeModal, totalImages, currentImageIndex]);

  // Effect for intersection observer (scroll animation)
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      projectCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  const projects = [
    {
      id: 1,
      image: "/assets/projects-banners/payroll.jpeg",
      category: "Java Development",
      title: "Payroll Management System",
      description: "A comprehensive Java-based solution for managing employee records and salary calculations, supporting both full-time and part-time employees with dynamic calculations.",
      tags: ["Java", "Java-FX", "UI Design", "Object Oriented Programming"],
      // Manual button configuration - you can customize these buttons
      buttons: [
        {
          text: "Watch Demo",
          type: "video",
          videoId: 1
        },
        {
          text: "Source Code",
          type: "link",
          url: "https://github.com/rafiu-devops/Payroll-Management-System"
        }
      ]
    },
    {
      id: 2,
      image: "/assets/projects-banners/expresion.png",
      category: "Java Development",
      title: "Expression conversion",
      description: "A comprehensive Java-based solution for managing employee records and salary calculations, supporting both full-time and part-time employees with dynamic calculations.",
      tags: ["Java", "Java-FX", "UI Design", "DSA"],
      // Custom buttons configuration
      buttons: [
        {
          text: "Watch Demo",
          type: "video",
          videoId: 2
        },
        {
          text: "Source Code",
          type: "link",
          url: "https://github.com/rafiu-devops/Stack-Expression-Conversion"
        }
      ]
    },
    {
      id: 3,
      image: "/assets/projects-banners/portfolio.jpg",
      category: "Web Development",
      title: "Client's Portfolio Website",
      description: "A modern, fully responsive portfolio website featuring clean design, client testimonials, and optimized performance for professional online presence.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      // Single button example
      buttons: []
    },
    {
      id: 4,
      image: "/assets/projects-banners/Fproject.png",
      category: "Web Development",
      title: "Food Ordering Platform",
      description: "A complete food ordering system with user-friendly interface, cart management, and seamless ordering process for restaurants.",
      tags: ["HTML", "CSS", "JavaScript", "React", "Payment Integration"],
      // Multiple buttons with different actions
      buttons: [
        {
          text: "Soon Will be live",
          type: "modal",
          modalId: "modal3"
        }
      ]
    },
    {
      id: 5,
      image: "/assets/projects-banners/Ecom.jpg",
      category: "E-commerce Management",
      title: "Online Store Management",
      description: "Comprehensive e-commerce store management including inventory control, order processing, and customer relationship management.",
      tags: ["Shopify", "WooCommerce", "Analytics", "SEO"],
      // Custom button names
      buttons: []
    },
    {
      id: 6,
      image: "/assets/projects-banners/VA.png",
      category: "Virtual Assistant",
      title: "Business Process Automation",
      description: "Streamlined business operations through automated processes, administrative support, and efficient workflow management.",
      tags: ["Automation", "CRM", "Data Entry", "Admin Support"],
      // No buttons example - empty array means no buttons will show
      buttons: []
    },
    {
      id: 7,
      image: "/assets/projects-banners/calculatorapp.jpeg",
      category: "Web Development",
      title: "Calculator Web Application",
      description: "Tailored web application with advanced features, user authentication, and database integration for specific business requirements.",
      tags: ["HTML", "CSS", "JavaScript"],
      // Live link and code buttons
      buttons: [
        {
          text: "View Live",
          type: "link",
          url: "https://rafiu-devops.github.io/calculator-web/"
        },
        {
          text: "Source Code",
          type: "link",
          url: "https://github.com/rafiu-devops/calculator-web"
        }
      ]
    }
  ];

  return (
    <>
      <section className="portfolio-section" id="portfolio-section">
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
        
        <div className="container">
          <div className="row section-intro">
            <h5>Portfolio</h5>
            <h2>My Latest Work Project's</h2>
            <p className="lead">
              Explore my diverse portfolio showcasing expertise in web development, 
              e-commerce management, and virtual assistant services. Each project 
              represents innovation, quality, and professional excellence.
            </p>
          </div>

          <div className="portfolio-grid">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => {
                  // Check if there's a modal button and handle click
                  const modalButton = project.buttons.find(btn => btn.type === 'modal');
                  if (modalButton) {
                    openModal(modalButton.modalId);
                  }
                }}
                style={{ 
                  cursor: project.buttons.some(btn => btn.type === 'modal') ? 'pointer' : 'default' 
                }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    {/* Render buttons based on manual configuration */}
                    {project.buttons.map((button, index) => (
                      <React.Fragment key={index}>
                        {button.type === 'video' && (
                          <button 
                            className="view-project-btn" 
                            onClick={(e) => {
                              e.stopPropagation();
                              openVideoModal(button.videoId);
                            }}
                          >
                            {button.text}
                          </button>
                        )}
                        
                        {button.type === 'link' && (
                          <button className="view-project-btn">
                            <a 
                              href={button.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {button.text}
                            </a>
                          </button>
                        )}
                        
                        {button.type === 'modal' && (
                          <button 
                            className="view-project-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(button.modalId);
                            }}
                          >
                            {button.text}
                          </button>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal 1 */}
      {activeVideoModal === 1 && (
        <div 
          className="video-modal show" 
          style={{ display: 'flex' }}
          onClick={(e) => e.target.classList.contains('video-modal') && closeVideoModal()}
        >
          <div className="video-modal-content">
            <button 
              className="video-close-btn" 
              aria-label="Close video modal"
              onClick={closeVideoModal}
            >
              &times;
            </button>
            <div className="video-container">
              <video 
                ref={video1Ref}
                controls
                onClick={(e) => e.stopPropagation()}
              >
                <source src="/assets/videos/Payroll-Management-System.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal 2 */}
      {activeVideoModal === 2 && (
        <div 
          className="video-modal show" 
          style={{ display: 'flex' }}
          onClick={(e) => e.target.classList.contains('video-modal') && closeVideoModal()}
        >
          <div className="video-modal-content">
            <button 
              className="video-close-btn" 
              aria-label="Close video modal"
              onClick={closeVideoModal}
            >
              &times;
            </button>
            <div className="video-container">
              <video 
                ref={video2Ref}
                controls
                onClick={(e) => e.stopPropagation()}
              >
                <source src="/assets/videos/infix-to-postfix-converter.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Regular Portfolio Modals */}
      {activeModal && (
        <div 
          className="modal active"
          onClick={(e) => e.target.classList.contains('modal') && closeModal()}
        >
          <div className="modal-content">
            <button 
              className="close-btn"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="modal-body">
              <h3>Project Details for {activeModal}</h3>
              <p>Modal content will be displayed here based on the selected project.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioSection;