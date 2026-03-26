import React, { useState, useEffect } from 'react';
import { Menu, X, Package, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
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
            <img src="/v4sure-logo.png" alt="V4Sure IT Solutions" className="h-14 w-auto" />
            <span className="font-bold text-3xl tracking-tight text-primary">
              V4Sure IT Solutions
            </span>
          </Link>

          {/* Desktop Menu - Always Visible */}
          <div className="flex items-center space-x-8">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
