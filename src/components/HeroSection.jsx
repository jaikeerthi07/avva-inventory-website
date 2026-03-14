import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-bold tracking-widest uppercase mb-8"
        >
          V4SURE IT SOLUTIONS
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-black text-primary tracking-tight mb-4"
        >
          Avva-Inventory
        </motion.h1>

        {/* Subtitle / Tagline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-slate-500 tracking-widest uppercase mb-10"
        >
          TAKE CONTROL OF YOUR INVENTORY
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed font-medium mb-12"
        >
          Streamline your stock management, sales, and purchases with our intelligent inventory control system. 
          Designed for businesses that value efficiency and accuracy.
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center"
        >
          <Link
            to="/live-demo"
            className="px-10 py-5 bg-[#1a365d] hover:bg-[#152c4d] text-white rounded-full font-bold text-lg md:text-xl transition-all shadow-xl shadow-slate-300"
          >
            3 Days Free Trial
          </Link>
        </motion.div>
      </div>

      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial from-blue-100 to-transparent blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
