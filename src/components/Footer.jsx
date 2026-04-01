import React from 'react';
import { Package } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-14 md:pt-24 pb-10 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-20">
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src="/v4sure-logo.png" alt="V4Sure IT Solutions" className="h-10 md:h-12 w-auto relative z-10 transition-transform group-hover:scale-110" />
              </div>
              <div className="flex flex-col -gap-1">
                <span className="font-black text-xl md:text-2xl tracking-tight text-white leading-none">
                  V4SURE
                </span>
                <span className="font-bold text-[10px] md:text-[12px] tracking-[0.2em] uppercase text-slate-400 leading-none">
                  IT Solutions
                </span>
              </div>
            </div>

            <p className="text-slate-400 max-w-md mb-8 leading-relaxed text-lg text-center md:text-left">
              Transforming businesses through intelligent inventory solutions. Streamline your operations with Avva Inventory.
            </p>

            <div className="flex items-center gap-6">
              {/* Add social icons if needed later */}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold text-xl mb-8 tracking-tight">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-accent transition-all hover:translate-x-1 inline-block font-medium">Home</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-accent transition-all hover:translate-x-1 inline-block font-medium">Features</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-accent transition-all hover:translate-x-1 inline-block font-medium">Pricing</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-accent transition-all hover:translate-x-1 inline-block font-medium">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold text-xl mb-8 tracking-tight">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-accent transition-all hover:translate-x-1 inline-block font-medium">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-accent transition-all hover:translate-x-1 inline-block font-medium">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-slate-500 text-base font-medium">
            © 2026 V4Sure IT Solutions. Built for excellence.
          </p>
          <div className="text-slate-400 text-base flex flex-col sm:flex-row gap-4 sm:gap-8 items-center font-bold">
            <a href="https://www.v4sureitsolutions.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              www.v4sureitsolutions.com
            </a>
          </div>
        </div>
      </div>

      {/* Decorative background for footer */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-0 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
