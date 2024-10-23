import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Contact />        
      <Footer />
    </div>
  );
}
export default LandingPage;
