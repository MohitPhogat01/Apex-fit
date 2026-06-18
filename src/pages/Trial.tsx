import React, { useEffect } from 'react';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Trial = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('dark');
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white mt-16">
      <SEO
        title="Start Your Free 7-Day Trial"
        description="Experience Apex Fitness with a free 7-day trial. No commitment required. Access all our premium facilities, classes, and expert trainers."
        canonical="/trial"
      />
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <Button variant="ghost" className="mb-8 text-white hover:bg-white/10" onClick={() => navigate('/')}> <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home </Button>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Start Your Free Trial</h1>
          <p className="text-gray-300 mb-8">Experience the premium fitness journey with our 7-day free trial. No commitment required.</p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["First Name", "Last Name"].map((l, i) => (
                <div key={l}><label className="block text-sm font-medium text-gray-300 mb-2">{l}</label><input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30" placeholder={i ? "Doe" : "John"} /></div>
              ))}
            </div>
            <div><label className="block text-sm font-medium text-gray-300 mb-2">Email</label><input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="john@example.com" /></div>
            <div><label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label><input type="tel" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="+1 (555) 000-0000" /></div>
            <div><label className="block text-sm font-medium text-gray-300 mb-2">Preferred Start Date</label><input type="date" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30" /></div>
            <Button className="w-full bg-gradient-to-r from-white to-gray-400 hover:from-gray-200 hover:to-gray-500 text-black px-6 py-6 text-lg">Start Your Free Trial</Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trial; 