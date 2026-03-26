import React from 'react';
import { Package } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/v4sure-logo.png" alt="V4Sure IT Solutions" className="h-8 w-auto" />
              <span className="font-bold text-xl text-white tracking-tight">
                V4Sure IT Solutions
              </span>
            </div>

            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              A premium inventory management solution crafted to streamline your business operations and accelerate growth.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-accent transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-left">
            © 2026 V4Sure IT Solutions. All rights reserved.
          </p>
          <div className="text-slate-500 text-sm flex gap-6">
            <a href="https://www.v4sureitsolutions.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              www.v4sureitsolutions.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
