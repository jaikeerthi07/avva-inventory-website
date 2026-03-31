import React from 'react';
import { Mail, Globe, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-primary rounded-4xl md:rounded-[3.5rem] overflow-hidden shadow-2xl relative border border-primary-10"
        >
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          
          <div className="relative z-10 p-6 md:p-14 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20">
            <div className="text-white max-w-xl text-center lg:text-left flex-1">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-fluid-h2 font-black mb-6 leading-[1.1] tracking-tight"
              >
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-blue-100/80 text-lg md:text-xl mb-10 font-medium leading-relaxed"
              >
                Experience the next generation of inventory management. Our experts are ready to help you optimize your workflow.
              </motion.p>
              
              <div className="space-y-6 flex flex-col items-center lg:items-start w-full">
                {[
                  { icon: <Globe size={26} />, text: 'www.v4sureitsolutions.com', href: 'https://www.v4sureitsolutions.com' },
                  { icon: <Mail size={26} />, text: 'support@v4sureitsolutions.com', href: 'mailto:support@v4sureitsolutions.com' },
                  { icon: <Phone size={26} />, text: '+91 93423 01582', href: 'tel:9342301582' }
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
                    className="flex flex-col sm:flex-row items-center gap-3 group p-3 -m-3 rounded-2xl hover:bg-white/5 transition-all duration-300 w-full"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md group-hover:bg-white/20 transition-all duration-300 border border-white/10 group-hover:border-white/20 shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm sm:text-lg md:text-xl font-bold tracking-tight text-center sm:text-left break-all sm:break-normal">{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-auto flex-shrink-0 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ y: -8, rotate: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
                className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] text-center max-w-sm mx-auto border border-slate-100 w-full"
              >
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:scale-110 transition-transform">
                  <MessageCircle size={40} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Sales Support</h3>
                <p className="text-slate-500 mb-10 font-semibold leading-relaxed text-base">Get instant answers and personalized live demo on WhatsApp.</p>
                <a 
                  href="https://wa.me/919342301582?text=Hello%20V4Sure%20IT%20Solutions,%20I%20am%20interested%20in%20Avva%20Inventory."
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black py-5 px-8 rounded-2xl transition-all shadow-2xl shadow-green-500-20 hover:shadow-green-500-30 active:scale-[0.98]"
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
