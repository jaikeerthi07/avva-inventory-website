import React from 'react';
import { LineChart, BarChart3, AlertTriangle, ShoppingCart, PackageSearch, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Real-time Stock Tracking',
      description: 'Monitor your inventory levels instantly across all locations with live sync.',
      icon: <Activity size={24} className="text-primary" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Low Stock Alerts',
      description: 'Get automated notifications when items run low to prevent stockouts.',
      icon: <AlertTriangle size={24} className="text-amber-500" />,
      color: 'bg-amber-50'
    },
    {
      title: 'Sales & Purchase',
      description: 'Easily log both sales and purchases to keep your ledger up to date.',
      icon: <ShoppingCart size={24} className="text-green-500" />,
      color: 'bg-green-50'
    },
    {
      title: 'Product Management',
      description: 'Organize items with categories, variants, and detailed product profiles.',
      icon: <PackageSearch size={24} className="text-purple-500" />,
      color: 'bg-purple-50'
    },
    {
      title: 'Sales Reports',
      description: 'Generate comprehensive reports to understand your top-selling products.',
      icon: <BarChart3 size={24} className="text-pink-500" />,
      color: 'bg-pink-50'
    },
    {
      title: 'Smart Analytics',
      description: 'Visualize your business growth through interactive dashboard widgets.',
      icon: <LineChart size={24} className="text-indigo-500" />,
      color: 'bg-indigo-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 leading-relaxed">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-fluid-h2 font-black text-slate-900 mb-6"
          >
            Everything You Need to Scale
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed"
          >
            Avva Inventory comes packed with robust features designed to streamline your daily operations and boost efficiency.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group p-5 md:p-8 lg:p-10 rounded-2xl md:rounded-4xl border border-slate-100 bg-white hover:border-primary-20 hover:shadow-[0_20px_50px_rgba(12,60,120,0.05)] transition-all duration-500 hover:-translate-y-2 cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-[3rem]"></div>
              
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-8 mix-blend-multiply transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${feature.color} shadow-sm group-hover:shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base lg:text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
