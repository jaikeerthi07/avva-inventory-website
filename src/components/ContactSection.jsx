import React from 'react';
import { Mail, Globe, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-primary rounded-3xl md:rounded-[4rem] overflow-hidden shadow-2xl relative border border-primary/10"
        >
          {/* Decorative Orbs */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-accent rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
          
          <div className="relative z-10 p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-20">
            <div className="text-white flex-1 flex flex-col justify-center">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-fluid-h2 font-black mb-6 leading-[1.1] tracking-tight text-center lg:text-left"
              >
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-blue-100/80 text-lg md:text-xl mb-12 font-medium leading-relaxed text-center lg:text-left mx-auto lg:mx-0 max-w-lg lg:max-w-none"
              >
                Experience the next generation of inventory management. Our experts are ready to help you optimize your workflow.
              </motion.p>
              
              <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start">
                {[
                  { icon: <Globe size={24} />, text: 'www.v4sureitsolutions.com', href: 'https://www.v4sureitsolutions.com' },
                  { icon: <Mail size={24} />, text: 'support@v4sureitsolutions.com', href: 'mailto:support@v4sureitsolutions.com' },
                  { icon: <Phone size={24} />, text: '+91 93423 01582', href: 'tel:9342301582' }
                ].map((item, idx) => (
                  <motion.a 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    href={item.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-4 group p-2 -m-2 rounded-2xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md group-hover:bg-accent group-hover:text-slate-900 transition-all duration-500 border border-white/10 group-hover:border-transparent shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight">{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-1/3 flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 w-full text-center hover:bg-white/[0.15] transition-colors duration-500 shadow-2xl relative group overflow-hidden"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle size={40} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Sales Support</h3>
                <p className="text-blue-100/70 mb-10 font-semibold leading-relaxed text-base">Get instant answers and personalized live demo on WhatsApp.</p>
                <a 
                  href="https://wa.me/919342301582?text=Hello%20V4Sure%20IT%20Solutions,%20I%20am%20interested%20in%20Avva%20Inventory."
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black py-5 px-8 rounded-2xl transition-all shadow-xl shadow-green-500/20 hover:shadow-green-500/40 active:scale-[0.98]"
                >
                  <MessageCircle size={22} strokeWidth={2.5} />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
