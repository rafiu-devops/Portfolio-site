import React, { useEffect } from 'react';
import './styles/base.css';
import './styles/vendor.css';
import './styles/main.css';

// Import components
import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/projects';
import Services from './components/services';
import Contact from './components/contactform';
import Footer from './components/footer';

//import js files react based
import PortfolioJavaScript from './components/PortfolioJavaScript';
function App() {
  useEffect(() => {
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    // Correct paths for Vite (public folder ke liye)
    const scripts = [
      
      '/js-files/modernizr.js',
      '/js-files/pace.min.js', 
      '/js-files/jquery-2.1.3.min.js',
      '/js-files/plugins.js',
      
    ].map(loadScript);

    return () => {
      scripts.forEach(script => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>

       {/* React-based JavaScript functionality */}
      <PortfolioJavaScript />
     
      {/* Components */}
      <Header />
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;