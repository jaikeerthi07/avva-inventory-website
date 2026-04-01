import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHomePage ? '#home' : '/' },
    { name: 'Features', href: isHomePage ? '#features' : '/#features' },
    { name: 'Pricing', href: isHomePage ? '#pricing' : '/#pricing' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isOpen ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100 py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center gap-2 md:gap-3 cursor-pointer group" onClick={closeMenu}>
            <div className="relative">
              <img src="/v4sure-logo.png" alt="V4Sure IT Solutions" className="h-10 md:h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col -gap-1">
              <span className="font-black text-base md:text-lg lg:text-xl tracking-tight text-primary leading-none">
                V4Sure
              </span>
              <span className="font-bold text-[10px] md:text-[12px] tracking-[0.2em] uppercase text-slate-500 leading-none">
                IT Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-primary font-semibold text-sm lg:text-base transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <Link 
              to="/live-demo"
              className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-sm lg:text-base transition-all hover:bg-primary-90 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Live Demo
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100/50 transition-all focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu content */}
        <motion.div 
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { height: 'auto', opacity: 1, display: 'block' },
            closed: { height: 0, opacity: 0, transitionEnd: { display: 'none' } }
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col space-y-2 py-8 px-4 border-t border-slate-100/50 mt-4">
            {navLinks.map((link, idx) => (
              <motion.a
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 }
                }}
                transition={{ delay: idx * 0.05, type: 'spring', stiffness: 300, damping: 24 }}
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-3xl font-black text-slate-900 hover:text-primary transition-all py-4 px-4 tracking-tighter rounded-2xl hover:bg-slate-50 flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
              </motion.a>
            ))}
            <motion.div
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: 20 }
              }}
              transition={{ delay: 0.3 }}
              className="pt-8 pb-4"
            >
              <Link 
                to="/live-demo" 
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center py-5 bg-primary text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-primary-20 active:scale-[0.98] transition-all"
              >
                Start Free Trial
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
