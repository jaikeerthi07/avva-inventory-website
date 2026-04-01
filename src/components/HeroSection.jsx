import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/avvainventory_logo.jpeg';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 pb-10 md:pt-28 md:pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto container-padding relative z-10 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-4 md:mb-6 select-none"
        >
          <div className="relative group overflow-hidden">
            <img
              src={logo}
              alt="Avva Inventory Logo"
              className="h-24 sm:h-32 md:h-44 lg:h-56 w-auto object-contain mix-blend-multiply relative z-10 transition-transform duration-700 ease-out group-hover:scale-105 contrast-125 brightness-110 max-w-full"
            />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-fluid-h1 font-[900] text-primary tracking-tighter mb-2 md:mb-4 leading-[1.1] md:leading-[1.05]"
        >
          Avva Inventory
        </motion.h1>

        {/* Subtitle / Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-slate-400 tracking-[0.2em] md:tracking-[0.4em] uppercase mb-4 md:mb-6"
        >
          Smart Stock Management
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium mb-8 md:mb-10 px-4"
        >
          Streamline your stock management, sales, and purchases with our intelligent inventory control system.
          Designed for businesses that value <span className="text-black font-bold">efficiency</span> and <span className="text-black font-bold">accuracy</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 px-6 sm:px-0"
        >
          <Link
            to="/live-demo"
            className="w-full sm:w-auto px-10 py-5 md:px-12 md:py-6 bg-primary hover:bg-primary-90 text-white rounded-2xl md:rounded-3xl font-black text-lg md:text-xl transition-all shadow-2xl shadow-primary-20 hover:shadow-primary-40 hover:-translate-y-1 active:scale-[0.98]"
          >
            3 Days Free Trial
          </Link>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-amber-50/40 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] border border-slate-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-[10%] left-[15%] w-[150px] h-[150px] border border-primary/5 rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default HeroSection;
