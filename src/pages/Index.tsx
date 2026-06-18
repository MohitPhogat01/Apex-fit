import React, { useEffect } from 'react';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ClassesSection from '@/components/ClassesSection';
import TrainersSection from '@/components/TrainersSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { useLocation } from 'react-router-dom';

const Index = () => {
  // Set body class when component mounts
  useEffect(() => {
    document.body.classList.add('dark');
    
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  // Scroll to section if coming from another page
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // wait for render
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <SEO
        title="Premium Fitness & Wellness Center in Jaipur"
        description="Apex Fitness is Jaipur's premier fitness destination. State-of-the-art equipment, expert trainers, and diverse classes to help you transform your body and mind."
        canonical="/"
        ogType="website"
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <TrainersSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
