import React from 'react';

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-overlay"></div>

      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>Hello, Welcome Here</h5>
            <h1>I'm Abdul Rafiu.</h1>

            <p className="intro-position">
              <span>Web Developer</span>
              <span>Virtual-Assistant</span>
            </p>

            <a className="button stroke smoothscroll" href="#about" title="More About Me">
              More About Me
            </a>
          </div>
        </div>
      </div>

      {/* Intro Social */}
      <ul className="intro-social">
        <li>
          <a href="abdulrafiu215@gmail.com" target="_blank" rel="noopener noreferrer" title="Send Email">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/abdul-rafiu-388662373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/rafiu-devops" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.upwork.com/freelancers/~01d8b5242ce37cea85?mp_source=share" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-upwork"></i>
          </a>
        </li>
        <li>
          <a href="https://www.fiverr.com/mr_rafiu_09?public_mode=true" target="_blank" rel="noopener noreferrer"
            style={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'Poppins' }} >Fiverr</a>
        </li>
      </ul>
    </section>
  );
};

export default Intro;
