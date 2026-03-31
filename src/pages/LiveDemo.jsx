import React, { useState } from 'react';
import { Play, Key, MessageCircle, Mail, Phone, CheckCircle2, Package, Layout, Database, BarChart3, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LiveDemo = () => {
  const [activeTab, setActiveTab] = useState('demo');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project: 'Avva Inventory Management',
    requirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello V4Sure IT Solutions,\n\nI would like to request login credentials for the live demo.\n\n*Details:*\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Phone: ${formData.phone}\n- Company: ${formData.company}\n- Project: ${formData.project}\n- Requirements: ${formData.requirements || 'N/A'}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919342301582?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 md:pt-28 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight"
          >
            Explore <span className="text-primary">V4Sure</span> Live Demo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Click to open live demo projects or contact our team for exclusive access
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200 overflow-hidden border border-slate-100">
          <div className="flex border-b border-slate-100">
            <button
              onClick={() => setActiveTab('demo')}
              className={`flex-1 py-4 md:py-5 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 font-bold transition-all text-sm md:text-base ${
                activeTab === 'demo' 
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white' 
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Play size={18} fill={activeTab === 'demo' ? 'currentColor' : 'none'} />
              <span>Live Demo</span>
            </button>
            <button
              onClick={() => setActiveTab('access')}
              className={`flex-1 py-4 md:py-5 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 font-bold transition-all text-sm md:text-base ${
                activeTab === 'access' 
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white' 
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Key size={18} />
              <span>Get Access</span>
            </button>
          </div>

          <div className="p-6 md:p-12">
            {activeTab === 'demo' ? (
              /* Live Demo Projects Tab Content */
              <div className="text-center">
                <div className="mb-6 md:mb-8 flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200 animate-pulse">
                    <Play size={28} md:size={32} fill="currentColor" />
                  </div>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">Click to Open Live Demo Projects</h2>
                <p className="text-slate-500 mb-8 md:mb-12 text-sm md:text-base">Open any demo project in a new tab. Contact us for login credentials.</p>

                <div className="grid grid-cols-1 gap-6 md:gap-8 max-w-lg mx-auto">
                  {/* Avva Inventory Card */}
                  <div className="group relative bg-white border border-slate-100 rounded-2xl p-6 md:p-8 text-center transition-all hover:shadow-2xl hover:-translate-y-1">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Package size={28} md:size={32} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3">Avva Inventory Management</h3>
                    <p className="text-xs md:text-sm text-slate-500 mb-6 md:mb-8 font-medium">Intelligent inventory control for stock, sales, and purchase management systems.</p>
                    <a 
                      href="https://inventoryapp.v4sureitsolutions.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                    >
                      Open Demo <ChevronRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* Get Login Access Tab Content */
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Form Section */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                      <Key size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">Get Exclusive Login Access</h2>
                      <p className="text-sm text-slate-500">Fill this form and we'll send you personalized login credentials</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Work Email *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@company.com" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number *</label>
                        <input 
                          type="text" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Company Name *</label>
                        <input 
                          type="text" 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder="Your company name" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Which demo project do you want to access? *</label>
                      <select 
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all bg-white appearance-none"
                      >
                        <option value="">Select demo project</option>
                        <option value="Avva Inventory Management">Avva Inventory Management</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Additional Requirements (Optional)</label>
                      <textarea 
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        rows="4" 
                        placeholder="Tell us about your specific needs..." 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-blue-100">
                      Request Access
                    </button>
                  </form>
                </div>

                {/* Sidebar Section */}
                <div className="lg:w-80 space-y-8">
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                    <h3 className="font-bold text-slate-800 mb-6">Quick Access Methods</h3>
                    <div className="space-y-4">
                      <a 
                        href="https://wa.me/919342301582?text=I%20would%20like%20to%20request%20login%20credentials%20for%20Avva%20Inventory%20Live%20Demo." 
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 p-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all font-medium"
                      >
                        <MessageCircle size={20} />
                        WhatsApp for Instant Access
                      </a>
                      <a href="mailto:Support@v4sureitsolutions.com" className="flex items-center gap-3 p-3 bg-[#1a365d] text-white rounded-xl hover:bg-opacity-90 transition-all font-medium">
                        <Mail size={20} />
                        Support@v4sureitsolutions.com
                      </a>
                      <a href="tel:+919360458852" className="flex items-center gap-3 p-3 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-white transition-all font-bold">
                        <Phone size={20} />
                        Call for Support
                      </a>
                    </div>
                  </div>

                  <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6">
                    <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                      <Layout size={18} />
                      What You'll Get:
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Exclusive login credentials',
                        'Full access to all features',
                        'Personalized system tour',
                        'Dedicated support agent',
                        'Custom pricing quote'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-blue-800 font-medium">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
