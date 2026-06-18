import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const data = {
    social: [{ icon: Facebook }, { icon: Twitter }, { icon: Instagram }],
    links: ["Home", "About Us", "Classes", "Trainers", "Pricing", "Contact"].map(
      (name, i) => ({ name, href: `#${name.toLowerCase().replace(" ", "")}` })
    ),
    contact: [
      { icon: MapPin, text: "123 Fitness Street, Workout City, WC 12345" },
      { icon: Phone, text: "(123) 456-7890" },
      { icon: Mail, text: "info@apexfitness.com" }
    ]
  };
  
  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 z-0">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="grid-footer" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid-footer)" />
          </svg>
        </div>
        {[
          "top-1/4 left-1/4 h-64 w-64 bg-white/10 blur-3xl",
          "bottom-1/4 right-1/4 h-96 w-96 bg-gray-400/20 blur-3xl animation-delay-1000",
          "top-3/4 right-1/3 h-40 w-40 bg-white/10 blur-2xl animation-delay-2000"
        ].map((cls, i) => <div key={i} className={`absolute rounded-full animate-float ${cls}`}></div>)}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Logo & Social */}
          <div className="space-y-6">
            <a href="#" className="inline-block">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                APEX<span className="text-white">FITNESS</span>
              </span>
            </a>
            <p className="text-gray-300">Your premier fitness destination for transformation and results. Join us on the journey to a better you.</p>
            <div className="flex space-x-4">
              {data.social.map((s, i) => (
                <a key={i} href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 group">
                  <s.icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {data.links.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />{link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {data.contact.map((item, i) => (
                <li key={i} className="flex items-start group">
                  <item.icon className="h-5 w-5 text-white mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to get special offers and news about upcoming events.</p>
            <div className="space-y-3 relative">
              <Input type="email" placeholder="Your email" 
                className="bg-white/10 border-white/20 focus:border-white/40 text-white placeholder-gray-400 backdrop-blur-sm" />
              {showPopup && (
                <div className="text-center bottom-full mb-10 px-6 py-2 bg-gray-200 text-gray-800 rounded-md shadow-lg border border-gray-300 animate-fade-in">
                  Thank you for subscribing!
                </div>
              )}
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm group" 
                onClick={(e) => {e.preventDefault(); setShowPopup(true); setTimeout(() => setShowPopup(false), 3000);}}>
                Subscribe <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Apex Fitness. All rights reserved.</p>
          <p className="text-gray-400 mt-2 text-sm">
            Made with <Heart className="inline-block w-4 h-4 text-red-500 fill-red-500 mx-1" /> by{' '}
            <a href="https://flux8labs.com" target="_blank" rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors">Flux8Labs</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;