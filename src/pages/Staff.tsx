import React from 'react';
import { User, GraduationCap, Heart } from 'lucide-react';

const staffData = [
  { name: '[TO CONFIRM]', position: 'Principal', category: 'Leadership' },
  { name: '[TO CONFIRM]', position: 'Deputy Principal', category: 'Leadership' },
  { name: '[TO CONFIRM]', position: 'Head of Department', subject: 'CAPS Curriculum', category: 'Leadership' },

  { name: '[TO CONFIRM]', position: 'Class Teacher', subject: 'Grade 8', category: 'Class Teachers' },
  { name: '[TO CONFIRM]', position: 'Class Teacher', subject: 'Grade 9', category: 'Class Teachers' },
  { name: '[TO CONFIRM]', position: 'Class Teacher', subject: 'Grade 10', category: 'Class Teachers' },
  { name: '[TO CONFIRM]', position: 'Class Teacher', subject: 'Grade 11', category: 'Class Teachers' },
  { name: '[TO CONFIRM]', position: 'Class Teacher', subject: 'Grade 12', category: 'Class Teachers' },

  { name: '[TO CONFIRM]', position: 'School Administrator', category: 'Support Staff' },
  { name: '[TO CONFIRM]', position: 'Security Officer', category: 'Support Staff' },
];

const categories = ['Leadership', 'Class Teachers', 'Support Staff'];

const StaffCard = ({ member }: { member: typeof staffData[number] }) => (
  <div
    className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center p-6 text-center hover:-translate-y-1"
    style={{ background: '#FFFFFF', border: '1px solid #1A3A8F' }}
  >
    <div
      className="w-24 h-24 rounded-full flex items-center justify-center mb-4 overflow-hidden"
      style={{ background: '#E8EDFB', border: '3px solid #1A3A8F' }}
    >
      <User size={40} style={{ color: '#1A3A8F', opacity: 0.5 }} />
    </div>

    <h3 className="text-sm font-bold leading-tight" style={{ color: '#1A3A8F' }}>
      {member.name}
    </h3>
    <p className="text-xs font-semibold mt-1" style={{ color: '#CC1A2A' }}>
      {member.position}
    </p>
    {member.subject && (
      <span
        className="mt-2 inline-block text-xs font-medium px-3 py-1 rounded-full"
        style={{ background: '#E8EDFB', color: '#1A3A8F', border: '1px solid #1A3A8F' }}
      >
        {member.subject}
      </span>
    )}
  </div>
);

export const Staff = () => {
  const [activeCategory, setActiveCategory] = React.useState('Leadership');
  const filtered = staffData.filter(m => m.category === activeCategory);

  return (
    <div className="min-h-screen py-12 px-4" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <div className="blue-bar mx-auto" />
          <h1 className="text-4xl font-extrabold tracking-tight mb-3" style={{ color: '#1A3A8F' }}>
            Our Staff
          </h1>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Meet the dedicated team of educators and support staff at Mary Ralake High School.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
              style={
                activeCategory === cat
                  ? { background: '#1A3A8F', color: '#fff', boxShadow: '0 4px 12px rgba(26,58,143,0.35)' }
                  : { background: '#fff', color: '#1A3A8F', border: '1px solid rgba(26,58,143,0.4)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((member, i) => (
            <StaffCard key={i} member={member} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="card max-w-2xl mx-auto" style={{ borderTop: '4px solid #1A3A8F' }}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <GraduationCap size={20} style={{ color: '#1A3A8F' }} />
              <p className="text-sm font-semibold" style={{ color: '#1A3A8F' }}>Staff Information</p>
            </div>
            <p className="text-sm" style={{ color: '#4b5563' }}>
              Staff names will be updated as information is provided by the school.
              Contact us through our Facebook page: <strong>Mary Ralake high School</strong>
            </p>
          </div>
        </div>

        {/* Note about staff */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
            <Heart size={20} className="shrink-0 mt-0.5" style={{ color: '#1A3A8F' }} />
            <div>
              <p className="text-sm font-semibold" style={{ color: '#1A3A8F' }}>Note to Parents</p>
              <p className="text-sm text-gray-600 mt-1">
                Our dedicated teaching and support staff work tirelessly to ensure every learner receives the best possible education. We value the partnership between home and school in nurturing our children's potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
