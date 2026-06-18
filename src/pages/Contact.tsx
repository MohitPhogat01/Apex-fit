
import React, { useEffect } from 'react';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const info = [
  { icon: MapPin, label: 'Address', value: <>123 Fitness Street<br />Gym City, GC 12345</> },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: Mail, label: 'Email', value: 'info@apexfitness.com' },
  { icon: Clock, label: 'Hours', value: <>Monday - Friday: 5:00 AM - 11:00 PM<br />Saturday - Sunday: 6:00 AM - 10:00 PM</> }
];

const Contact = () => {
  const navigate = useNavigate();
  useEffect(() => { document.body.classList.add('dark'); return () => document.body.classList.remove('dark'); }, []);
  return (
    <div className="min-h-screen bg-black text-white mt-16">
      <SEO
        title="Contact Us"
        description="Get in touch with Apex Fitness. We're here to help with any questions about our fitness programs, facilities, or membership options."
        canonical="/contact"
      />
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <Button variant="ghost" className="mb-8 text-white hover:bg-white/10" onClick={() => navigate('/')}> <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home </Button>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">Have questions? We're here to help. Reach out to us through any of the following channels.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["First Name", "Last Name"].map((l, i) => (
                    <div key={l}><label className="block text-sm font-medium text-gray-300 mb-2">{l}</label><input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30" placeholder={i ? "Doe" : "John"} /></div>
                  ))}
                </div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Email</label><input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="john@example.com" /></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Message</label><textarea className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 h-32" placeholder="How can we help you?" /></div>
                <Button className="w-full bg-gradient-to-r from-white to-gray-400 hover:from-gray-200 hover:to-gray-500 text-black px-6 py-6 text-lg">Send Message</Button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {info.map(({ icon: Icon, label, value }) => (
                    <div className="flex items-start" key={label}>
                      <Icon className="w-6 h-6 text-white mr-4 mt-1" />
                      <div><h3 className="font-medium mb-1">{label}</h3><p className="text-gray-300">{value}</p></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Location</h2>
                <div className="aspect-video bg-white/10 rounded-lg overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.0451763838296!2d75.72396477542098!3d26.965468657821418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db390d4e360a1%3A0x1c6bd2d4ef34fb7!2sGalaxy%20Science%20Institute!5e0!3m2!1sen!2sin!4v1747770312767!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;