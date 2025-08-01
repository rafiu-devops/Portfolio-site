import React from 'react';
import profileImage from "/assets/Profile.png";  // CORRECT PATH


const About = () => {
  return (
    <section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>

          <div className="intro-info">
            <div className="profile-image">
              <img src={profileImage} alt="Profile Picture" />
            </div>
            <div className="profile-text">
              <p className="lead">
                I'm Abdul Rafiu, a dedicated student currently pursuing a BS in Computer Science at Shaikh Ayaz University, Shikarpur.
                I'm passionate about technology, entrepreneurship, and continuous learning.
                Alongside my studies, I explore fields like e-commerce and web development.
                My goal is to build a successful future through skills, innovation, and hard work.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row about-content">
        <div className="skills-section">
          <h3 className="skill-title">Skills</h3>
          <p className="skill-intro">
            I have hands-on skills in web development, Microsoft Office, and creative design.
            I'm continuously learning to enhance my problem-solving and technical abilities.
          </p>

          <div className="skills-carousel">
            <h2 className="carousel-title">My Skills</h2>

            {/* Radio Buttons for Navigation */}
            <input type="radio" name="slider" id="slide1" defaultChecked />
            <input type="radio" name="slider" id="slide2" />
            <input type="radio" name="slider" id="slide3" />
            <input type="radio" name="slider" id="slide4" />
            <input type="radio" name="slider" id="slide5" />

            {/* Slides */}
            <div className="slides">
              <div className="slide">
                <div className="slide-title">Frontend</div>
                <div className="skills-grid">
                  <div className="skill-card"><i className="fab fa-html5"></i><span>HTML</span></div>
                  <div className="skill-card"><i className="fab fa-css3-alt"></i><span>CSS</span></div>
                  <div className="skill-card"><i className="fab fa-js"></i><span>JavaScript</span></div>
                  <div className="skill-card"><i className="fab fa-react"></i><span>React</span></div>
                </div>
              </div>

              <div className="slide">
                <div className="slide-title">Frontend</div>
                <div className="skills-grid">
                  <div className="skill-card"><i className="fab fa-bootstrap"></i><span>Bootstrap</span></div>
                  <div className="skill-card"><i className="fas fa-mobile-alt"></i><span>Responsive</span></div>
                </div>
              </div>

              <div className="slide">
                <div className="slide-title">Backend</div>
                <div className="skills-grid">
                  <div className="skill-card"><i className="fab fa-java"></i><span>JAVA</span></div>
                  <div className="skill-card"><i className="fab fa-php"></i><span>PHP</span></div>
                  <div className="skill-card"><i className="fab fa-node-js"></i><span>Node.js</span></div>
                  <div className="skill-card"><i className="fas fa-database"></i><span>MySQL</span></div>
                </div>
              </div>

              <div className="slide">
                <div className="slide-title">E-commerce Tools</div>
                <div className="skills-grid">
                  <div className="skill-card"><i className="fab fa-wordpress"></i><span>WordPress</span></div>
                  <div className="skill-card"><i className="fab fa-shopify"></i><span>Shopify</span></div>
                  <div className="skill-card"><i className="fas fa-globe"></i><span>SEO</span></div>
                  <div className="skill-card"><i className="fas fa-server"></i><span>Hosting Setup</span></div>
                </div>
              </div>

              <div className="slide">
                <div className="slide-title">Development Tools</div>
                <div className="skills-grid">
                  <div className="skill-card"><i className="fab fa-github"></i><span>GitHub</span></div>
                  <div className="skill-card"><i className="fas fa-code"></i><span>VS Code</span></div>
                  <div className="skill-card"><i className="fas fa-laptop-code"></i><span>IntelliJ</span></div>
                  <div className="skill-card"><i className="fas fa-database"></i><span>SQL</span></div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="carousel-nav">
              <label htmlFor="slide1"></label>
              <label htmlFor="slide2"></label>
              <label htmlFor="slide3"></label>
              <label htmlFor="slide4"></label>
              <label htmlFor="slide5"></label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
