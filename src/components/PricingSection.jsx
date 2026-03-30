import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

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
    <section id="pricing" className="py-16 md:py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-600 font-medium">
            Choose the perfect plan for your business size. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl bg-primary text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted ? 'md:scale-105 z-10' : 'scale-100'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span className="bg-accent text-slate-900 text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-black mb-2 text-white">
                  {plan.name}
                </h3>
                <p className="text-sm h-10 text-blue-100 font-medium">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="text-sm font-bold ml-1 text-blue-100">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                <div className="text-[10px] font-black uppercase tracking-widest mb-4 text-blue-200">
                  Includes:
                </div>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check 
                      size={20} 
                      className="mr-3 shrink-0 text-accent" 
                    />
                    <div className="flex justify-between w-full">
                      <span className="text-white text-sm font-medium">
                        {feature.name}
                      </span>
                      <span className="text-sm font-black text-blue-200">
                        {feature.details}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <Link 
                to="/live-demo"
                className="block w-full text-center py-4 rounded-xl font-bold text-base transition-all shadow-lg bg-accent text-slate-900 hover:bg-yellow-400 shadow-accent/20"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
