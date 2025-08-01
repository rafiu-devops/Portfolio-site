import React, { useState } from "react";

const ContactSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    // Let the form submit naturally to FormSubmit.co
    // Show popup after a delay (simulate success response)
    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Contact</h5>
          <h1>I&apos;d Love To Hear From You.</h1>
          <p className="lead">
            Have a project in mind or need my services? Feel free to reach out —
            I&apos;m just a message away!
          </p>
        </div>
      </div>

      <div className="row contact-form">
        <div className="col-twelve">
          <form
            name="contactForm"
            id="contactForm"
            action="https://formsubmit.co/a04e2545b875d074c93f3f55bd7191db"
            method="POST"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <div className="form-field">
                <input
                  name="name"
                  type="text"
                  id="contactName"
                  placeholder="Name"
                  minLength="2"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  name="email"
                  type="email"
                  id="contactEmail"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  name="subject"
                  type="text"
                  id="contactSubject"
                  placeholder="Subject"
                />
              </div>
              <div className="form-field">
                <textarea
                  name="message"
                  id="contactMessage"
                  placeholder="Message"
                  rows="10"
                  required
                ></textarea>
              </div>

              {/* Hidden Fields */}
              <input type="hidden" name="_captcha" value="false" />

              <div className="form-field">
                <button className="submitform" type="submit">
                  Submit
                </button>
                {loading && (
                  <div id="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div>
                  </div>
                )}
              </div>
            </fieldset>
          </form>

          {/* Thank You Popup */}
          {showPopup && (
            <div
              id="thankYouPopup"
              style={{
                display: "block",
                background: "#000",
                color: "#00ffff",
                padding: "20px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            >
              Thank you! Your message has been sent.
            </div>
          )}
        </div>
      </div>

      <div className="row contact-info">
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-pin"></i>
          </div>
          <h5>Where to find me</h5>
          <p>Pakistan, Sukkur Sindh</p>
        </div>

        <div className="col-four tab-full collapse">
          <div className="icon">
            <i className="icon-mail"></i>
          </div>
          <h5>Email Me At</h5>
          <p>abdulrafiu215@gmail.com</p>
        </div>

        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-phone"></i>
          </div>
          <h5>Call Me At</h5>
          <p>Phone: (+92) 3470139661</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
