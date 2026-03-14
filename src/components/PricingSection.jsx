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
    <section id="pricing" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-600">
            Choose the perfect plan for your business size. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl ${
                plan.highlighted 
                ? 'bg-primary text-white shadow-2xl scale-100 md:scale-105 z-10' 
                : 'bg-white text-slate-900 shadow-xl border border-slate-100'
              } transition-transform duration-300`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span className="bg-accent text-slate-900 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm h-10 ${plan.highlighted ? 'text-blue-100' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-base font-medium ml-1 ${plan.highlighted ? 'text-blue-100' : 'text-slate-500'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                <div className={`text-sm font-semibold uppercase tracking-wider mb-4 ${plan.highlighted ? 'text-blue-200' : 'text-slate-400'}`}>
                  Includes:
                </div>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check 
                      size={20} 
                      className={`mr-3 shrink-0 ${plan.highlighted ? 'text-accent' : 'text-primary'}`} 
                    />
                    <div className="flex justify-between w-full">
                      <span className={plan.highlighted ? 'text-white text-sm md:text-base' : 'text-slate-700 text-sm md:text-base'}>
                        {feature.name}
                      </span>
                      <span className={`text-sm font-semibold ${plan.highlighted ? 'text-blue-200' : 'text-slate-900'}`}>
                        {feature.details}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <Link 
                to="/live-demo"
                className={`block w-full text-center py-4 rounded-xl font-semibold transition-colors ${
                  plan.highlighted
                  ? 'bg-accent text-slate-900 hover:bg-yellow-400'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
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
