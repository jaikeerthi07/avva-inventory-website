import React from 'react';
import { Mail, Globe, Phone, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="relative z-10 px-8 py-16 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-blue-100 text-lg mb-8">
                Get in touch with us today to start your journey with Avva Inventory. Our team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                <a href="https://www.v4sureitsolutions.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-accent transition-colors">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Globe size={24} className="text-white" />
                  </div>
                  <span className="text-lg font-medium">www.v4sureitsolutions.com</span>
                </a>
                
                <a href="mailto:support@v4sureitsolutions.com" className="flex items-center gap-4 hover:text-accent transition-colors">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Mail size={24} className="text-white" />
                  </div>
                  <span className="text-lg font-medium">support@v4sureitsolutions.com</span>
                </a>
                
                <a href="tel:9342301582" className="flex items-center gap-4 hover:text-accent transition-colors">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Phone size={24} className="text-white" />
                  </div>
                  <span className="text-lg font-medium">+91 93423 01582</span>
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-auto flex-shrink-0">
              <div className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-sm mx-auto">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Chat with our Sales Team</h3>
                <p className="text-slate-600 mb-8">Get instant answers to your questions over WhatsApp.</p>
                <a 
                  href="https://wa.me/919342301582?text=Hello%20V4Sure%20IT%20Solutions,%20I%20am%20interested%20in%20Avva%20Inventory."
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg shadow-green-500/30"
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
