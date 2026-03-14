import React, { useState, useEffect } from 'react';
import { Menu, X, Package, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center gap-3 cursor-pointer">
            <img src="/v4sure-logo.png" alt="V4Sure IT Solutions" className="h-10 w-auto" />
            <span className="font-bold text-2xl tracking-tight text-primary">
              V4Sure IT Solutions
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
              className="text-slate-600 hover:text-primary font-medium transition-colors"
            >
              Live Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-lg absolute w-full z-40">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-600 hover:text-primary hover:bg-slate-50 px-3 py-2 rounded-md font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link 
              to="/live-demo"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-primary text-white px-5 py-3 rounded-xl font-bold hover:bg-primary-90 transition-all shadow-lg shadow-blue-100"
            >
              Explore Live Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
