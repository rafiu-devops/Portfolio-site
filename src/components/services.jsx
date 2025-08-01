import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    icon: "icon-earth",
    title: "Business Website Development",
    description:
      "I design responsive and modern websites using HTML, CSS, JavaScript, and PHP. Whether you're a small business, freelancer, or startup, I can create a clean and user-friendly website that fits your brand. Your website will be fast, mobile-friendly, and easy to manage.",
  },
  {
    icon: "icon-window",
    title: "Virtual Assistant",
    description:
      "I assist with eCommerce tasks, banner design, data entry, email handling, and research. Can manage Shopify listings, customer queries, or even help in document formatting. Flexible and reliable support for entrepreneurs, students, and businesses. Skilled in both creative and technical virtual tasks.",
  },
  {
    icon: "icon-paint-brush",
    title: "Microsoft Office Services",
    description:
      "I offer clean formatting in MS Word, Excel formulas & automation, and stylish PowerPoint slides. Can also handle data entry, PDF conversions, and Access database work. Useful for students, professionals, and small businesses.",
  },
  {
    icon: "icon-toggles",
    title: "Shopify Store Design",
    description:
      "I create professional Shopify stores with custom themes, homepage layouts, and product pages. Includes logo placement, branding elements, and mobile-friendly design. Perfect for new businesses wanting a strong online start.",
  },
  {
    icon: "icon-image",
    title: "Landing Page Design",
    description:
      "I design clean and attractive landing pages for products or services. Focus on user experience and call-to-action to boost conversions. Great for ad campaigns, special offers, or sign-up pages.",
  },
  {
    icon: "icon-chat",
    title: "Facebook & Instagram Ads Setup",
    description:
      "I help small businesses run basic ads on Facebook and Instagram. Includes audience selection, ad design suggestions, and setup guidance. Best for startups wanting to test ad performance at low cost.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services">
      <div className="overlay"></div>
      
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>SERVICES</h5>
          <h1>What Can I Do For You?</h1>
          <p className="lead">
            Take a look at some of my featured projects and creative work. Each piece reflects
            my skills, passion, and dedication to quality and innovation.
          </p>
        </div>
      </div>

      <div className="row services-content">
        <div className="col-twelve">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
            }}
            autoplay={{ 
              delay: 4000,
              disableOnInteraction: false 
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
            className="services-list"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service">
                  <span className="icon">
                    <i className={service.icon}></i>
                  </span>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p className="desc">{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;