import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/avvainventory_logo.jpeg';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-32 lg:pt-40 lg:pb-48 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-0 select-none"
        >
          <div className="relative group overflow-hidden">
            <img
              src={logo}
              alt="Avva Inventory Logo"
              className="h-28 sm:h-40 md:h-64 lg:h-80 w-auto object-contain mix-blend-multiply relative z-10 transition-transform duration-700 ease-out group-hover:scale-105 mask-[linear-gradient(to_right,black_92%,transparent)] contrast-125 brightness-110 max-w-full"
            />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="-mt-6 md:-mt-12 text-fluid-h1 font-[900] text-primary tracking-tighter mb-4 md:mb-6 leading-[1.1] md:leading-[1.05]"
        >
          Avva Inventory
        </motion.h1>

        {/* Subtitle / Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm md:text-lg lg:text-xl font-bold text-slate-400 tracking-[0.2em] md:tracking-[0.4em] uppercase mb-8 md:mb-10"
        >
          Smart Stock Management
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-base md:text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium mb-8 md:mb-14 px-2"
        >
          Streamline your stock management, sales, and purchases with our intelligent inventory control system.
          Designed for businesses that value <span className="text-primary font-bold">efficiency</span> and <span className="text-primary font-bold">accuracy</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0"
        >
          <Link
            to="/live-demo"
            className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-primary hover:bg-primary-90 text-white rounded-2xl font-bold text-base md:text-lg transition-all shadow-xl shadow-primary-20 hover:shadow-primary-30 hover:-translate-y-1 active:scale-[0.98]"
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
