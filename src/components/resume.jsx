import React from "react";

const ResumeSection = () => {
  return (
    <section id="resume" className="grey-section">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Resume</h5>
          <h1>More of my credentials.</h1>
          <p className="lead">
            Explore more about my academic background, technical skills, and
            project experience. This section highlights my journey,
            achievements, and what I bring to the table.
          </p>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Work Experience</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">
            {/* Project 1 */}
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fas fa-code"></i>
              </div>
              <div className="timeline-header">
                <h3>Personal Projects</h3>
                <p>2024 – Present</p>
              </div>
              <div className="timeline-content">
                <h4>Website-Development</h4>
                <p>
                  Worked on multiple self-driven projects using HTML, CSS,
                  JavaScript, PHP, and React JS. Built landing pages, business
                  websites, and Ecommerce store designs to enhance practical
                  development skills.
                </p>
              </div>
            </div>

          
            {/* Project 2 */}
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fas fa-user-check"></i>
              </div>
              <div className="timeline-header">
                <h3>Freelance Tasks</h3>
                <p>2024 – Present</p>
              </div>
              <div className="timeline-content">
                <h4>Virtual Assistant</h4>
                <p>
                  Completed small tasks like Canva designing, data entry, and
                  Shopify product listing for clients. Improved
                  communication, task management, and problem-solving through
                  real-world tasks.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fas fa-store"></i>
              </div>
              <div className="timeline-header">
                <h3>E-commerce Projects</h3>
                <p>2024 – Present</p>
              </div>
              <div className="timeline-content">
                <h4>Shopify & WordPress</h4>
                <p>
                  Designed demo Shopify stores with customized themes and
                  product pages. Practiced tasks like product listing, basic
                  order handling, and customer messaging simulations. Gained
                  hands-on experience in store setup, branding, and visual
                  presentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Education</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">
            {/* Education 1 */}
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="timeline-header">
                <h3>BS Computer Science</h3>
                <p>2024 – Present</p>
              </div>
              <div className="timeline-content">
                <h4>Shaikh Ayaz University, Shikarpur</h4>
                <p>
                  Currently pursuing Bachelor's in Computer Science with focus on
                  web development, programming, and digital innovation.
                </p>
              </div>
            </div>

            {/* Education 2 */}
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="timeline-header">
                <h3>Diploma in Information Technology</h3>
                <p>2023 – 2024</p>
              </div>
              <div className="timeline-content">
                <h4>Sindh College Of Science & Technology, Sukkur</h4>
                <p>
                  Completed a one-year diploma covering basic computer
                  applications, MS Office, internet, and system usage.
                </p>
              </div>
            </div>

            {/* Education 3 */}
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="timeline-header">
                <h3>E-commerce Course</h3>
                <p>2024</p>
              </div>
              <div className="timeline-content">
                <h4>Aptech Institue Sukkur</h4>
                <p>
                  Learned product hunting, store setup, and basics of online
                  selling platforms including Shopify and Daraz.
                </p>
              </div>
            </div>

            {/* Education 4 */}
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fas fa-code"></i>
              </div>
              <div className="timeline-header">
                <h3>Web Development</h3>
                <p>2025</p>
              </div>
              <div className="timeline-content">
                <h4>Sukkur IBA University</h4>
                <p>
                  Completed a short course focused on HTML, CSS, JavaScript, and
                  responsive design. Gained hands-on experience in building
                  real-world websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row button-section">
        <div className="col-twelve">
          <a href="#contact" className="button stroke smoothscroll">
            Hire Me
          </a>
          <a
            href="Resume by rafiu.pdf"
            download="AbdulRafiu-CV.pdf"
            target="_blank"
            className="button button-primary"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
