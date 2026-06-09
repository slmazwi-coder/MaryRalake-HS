import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Send, Facebook, Heart } from 'lucide-react';
import { getContact } from '../lib/store';

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  monThu: string;
  friday: string;
  district: string;
  municipality: string;
  facebook: string;
}

export const Contact = () => {
  const [info, setInfo] = useState<ContactInfo>(getContact());

  useEffect(() => {
    setInfo(getContact());
  }, []);

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="blue-bar" />
        <h1 className="section-title">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold mb-8" style={{ color: '#1A3A8F' }}>Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E8EDFB] rounded-xl" style={{ color: '#1A3A8F' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Physical Address</h3>
                  <p className="text-gray-600">{info.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E8EDFB] rounded-xl" style={{ color: '#1A3A8F' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600">{info.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E8EDFB] rounded-xl" style={{ color: '#1A3A8F' }}>
                  <Facebook size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Facebook</h3>
                  <p className="text-gray-600">Mary Ralake high School</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E8EDFB] rounded-xl" style={{ color: '#1A3A8F' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Office Hours</h4>
                  <p className="text-gray-600">Monday - Thursday: {info.monThu}</p>
                  <p className="text-gray-600">Friday: {info.friday}</p>
                </div>
              </div>
              <div className="bg-[#E8EDFB] rounded-xl p-4">
                <h4 className="font-bold mb-2" style={{ color: '#1A3A8F' }}>School District</h4>
                <p className="text-gray-600 text-sm">{info.district}</p>
                <p className="text-gray-600 text-sm">{info.municipality}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-8" style={{ color: '#1A3A8F' }}>Send us a Message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-[#1A3A8F]/20 outline-none"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-[#1A3A8F]/20 outline-none"
                  placeholder="Your phone number"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address (Optional)</label>
                <input
                  type="email"
                  className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-[#1A3A8F]/20 outline-none"
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Subject</label>
                <select className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-[#1A3A8F]/20 outline-none">
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions</option>
                  <option value="general">General Enquiry</option>
                  <option value="academic">Academic Records</option>
                  <option value="matric">Matric Information</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-[#1A3A8F]/20 outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-colors"
                style={{ background: '#1A3A8F' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#102060' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1A3A8F' }}
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Note about contact */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
            <Heart size={20} className="shrink-0 mt-0.5" style={{ color: '#1A3A8F' }} />
            <div>
              <p className="text-sm font-semibold" style={{ color: '#1A3A8F' }}>Note</p>
              <p className="text-sm text-gray-600 mt-1">
                Some contact details are still to be confirmed with the school. For the most up-to-date information, please follow us on Facebook: <strong>Mary Ralake high School</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
