import React, { useState, useEffect } from 'react';
import { Menu, X, Package, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center gap-2 md:gap-3 cursor-pointer" onClick={closeMenu}>
            <img src="/v4sure-logo.png" alt="V4Sure IT Solutions" className="h-10 md:h-14 w-auto" />
            <span className="font-bold text-xl md:text-3xl tracking-tight text-primary">
              V4Sure
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link 
              to="/live-demo"
              className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold transition-all hover:bg-primary-90"
            >
              Live Demo
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu content */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-bold text-slate-600 hover:text-primary transition-colors px-2"
              >
                {link.name}
              </a>
            ))}
            <Link 
              to="/live-demo" 
              onClick={closeMenu}
              className="w-full text-center py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/20"
            >
              3 Days Free Trial
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
