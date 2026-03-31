import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const plans = [
    {
      name: 'Lite Plan',
      price: '₹1300',
      period: '/ Month',
      description: 'Perfect for small shops starting to digitalize.',
      features: [
        { name: 'Quick Setup', details: '₹900' },
        { name: 'Basic Server', details: '₹250' },
        { name: 'Basic Support', details: '₹150' }
      ],
      highlighted: false,
      cta: 'Choose Lite'
    },
    {
      name: 'Premium Pro Plan',
      price: '₹25000',
      period: '/ Lifetime',
      description: 'The ultimate investment for growing enterprises.',
      features: [
        { name: 'Complete Deployment', details: 'Free' },
        { name: 'Premium Server', details: '1 Year Free' },
        { name: 'Lifetime Support', details: 'Included' }
      ],
      highlighted: true,
      cta: 'Get Premium Pro',
      badge: 'Best Value'
    },
    {
      name: 'Pro Plan',
      price: '₹10300',
      period: '/ Year',
      description: 'Ideal for medium-sized growing businesses.',
      features: [
        { name: 'Professional Setup', details: '₹7300' },
        { name: 'Dedicated Server', details: '₹3000' },
        { name: 'Priority Support', details: 'Free' }
      ],
      highlighted: false,
      cta: 'Choose Pro'
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 leading-relaxed">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-fluid-h2 font-black text-slate-900 mb-6 tracking-tight"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium"
          >
            Choose the perfect plan for your business size. No hidden fees, just value.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-6 md:p-10 lg:p-12 rounded-4xl flex flex-col transition-all duration-500 hover:-translate-y-2 group bg-primary text-white shadow-[0_40px_100px_-15px_rgba(12,60,120,0.3)] ${
                plan.highlighted ? 'z-10 lg:scale-105 md:order-first lg:order-0' : ''
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-10 transform -translate-y-1/2">
                  <motion.span 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="bg-accent text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] py-2.5 px-6 rounded-full shadow-xl inline-block whitespace-nowrap"
                  >
                    {plan.badge}
                  </motion.span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-black mb-3 tracking-tight text-white">
                  {plan.name}
                </h3>
                <p className="text-sm md:text-base font-medium leading-relaxed opacity-80 min-h-[3rem] text-blue-100">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6 md:mb-10 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">
                  {plan.price}
                </span>
                <span className="text-lg font-bold text-blue-200">
                  {plan.period}
                </span>
              </div>

              <div className="flex-grow">
                <ul className="space-y-5 mb-12">
                  <div className="text-[11px] font-black uppercase tracking-[0.2em] mb-6 opacity-70 text-blue-300">
                    What's included:
                  </div>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start group/item">
                      <div className="mr-4 shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110 mb-1 bg-white/10">
                        <Check 
                          size={14} 
                          className="text-accent" 
                          strokeWidth={3}
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <span className="text-base font-bold leading-tight text-white">
                          {feature.name}
                        </span>
                        <span className="text-xs font-black uppercase tracking-wider mt-1 text-blue-200">
                          {feature.details}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                to="/live-demo"
                className="block w-full text-center py-5 rounded-3xl font-black text-lg transition-all shadow-xl active:scale-[0.98] bg-accent text-slate-900 hover:bg-yellow-400 shadow-accent-20 hover:shadow-accent-40"
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-primary-20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[25rem] h-[25rem] bg-accent-20 rounded-full blur-[80px] -z-10 opacity-30"></div>
    </section>
  );
};

export default PricingSection;
