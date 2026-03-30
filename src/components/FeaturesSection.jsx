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
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Everything You Need to Scale
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-medium"
          >
            Avva Inventory comes packed with robust features designed to streamline your daily operations and boost efficiency.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 mix-blend-multiply ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
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
