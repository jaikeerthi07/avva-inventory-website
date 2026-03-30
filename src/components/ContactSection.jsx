import React from 'react';
import { Mail, Globe, Phone, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="bg-primary rounded-[2rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="relative z-10 p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-white max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">Ready to Transform Your Business?</h2>
              <p className="text-blue-100 text-lg mb-10 font-medium leading-relaxed">
                Get in touch with us today to start your journey with Avva Inventory. Our team is ready to assist you.
              </p>
              
              <div className="space-y-6 flex flex-col items-center lg:items-start">
                <a href="https://www.v4sureitsolutions.com" target="_blank" rel="noreferrer" className="flex flex-col sm:flex-row items-center gap-4 group hover:text-accent transition-all duration-300">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md group-hover:bg-white/20 transition-all duration-300">
                    <Globe size={24} className="text-white" />
                  </div>
                  <span className="text-lg font-bold">www.v4sureitsolutions.com</span>
                </a>
                
                <a href="mailto:support@v4sureitsolutions.com" className="flex flex-col sm:flex-row items-center gap-4 group hover:text-accent transition-all duration-300">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md group-hover:bg-white/20 transition-all duration-300">
                    <Mail size={24} className="text-white" />
                  </div>
                  <span className="text-lg font-bold">support@v4sureitsolutions.com</span>
                </a>
                
                <a href="tel:9342301582" className="flex flex-col sm:flex-row items-center gap-4 group hover:text-accent transition-all duration-300">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md group-hover:bg-white/20 transition-all duration-300">
                    <Phone size={24} className="text-white" />
                  </div>
                  <span className="text-lg font-bold">+91 93423 01582</span>
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-auto flex-shrink-0">
              <div className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-sm mx-auto">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Chat with our Sales Team</h3>
                <p className="text-slate-600 mb-8 font-medium">Get instant answers to your questions over WhatsApp.</p>
                <a 
                  href="https://wa.me/919342301582?text=Hello%20V4Sure%20IT%20Solutions,%20I%20am%20interested%20in%20Avva%20Inventory."
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-green-500/30 hover:-translate-y-1"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
