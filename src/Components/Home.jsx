import React from 'react';
import Navbar  from './Navbar';
import Hero from './Hero';
import Testimonial from './Testimonial';
import Faq from './Faq';
import PartnerLogo from './PartnerLogo';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <PartnerLogo />
        <Testimonial />
        <Faq />        
        <Footer />
    </div>
  )
}

export default Home