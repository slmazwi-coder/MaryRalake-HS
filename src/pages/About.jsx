import { useEffect, useState } from 'react'
import { getAbout } from '../lib/store'
import { School, MapPin, Phone, Mail, Clock, Award } from 'lucide-react'

export default function About() {
  const [data, setData] = useState(null)
  useEffect(() => { setData(getAbout()) }, [])
  if (!data) return null

  return (
    <main className="flex-1 section-pad" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="blue-bar" />
        <h1 className="section-title mb-12">About Mary Ralake High School</h1>

        {/* History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2 className="font-display font-bold text-2xl mb-6" style={{ color: '#1A3A8F' }}>Our School</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
              {data.history.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          {/* Quick facts */}
          <div className="card p-8" style={{ background: '#1A3A8F' }}>
            <h3 className="font-display font-bold text-xl mb-6" style={{ color: '#FFFFFF' }}>School at a Glance</h3>
            <dl className="space-y-4">
              {[
                ['Phase',       'Secondary (Grades 8–12)'],
                ['Sector',      'Public School'],
                ['Fee Status',  'No-Fee Public School'],
                ['Province',    'Eastern Cape'],
                ['District',    'Alfred Nzo West Education District'],
                ['Municipality','Elundini Local Municipality'],
                ['Former Name', 'Maluti Junior Secondary School'],
                ['Location',    'Maluti, Matatiele, Eastern Cape, 4730'],
                ['Phone',       '[TO CONFIRM]'],
                ['Facebook',    'Mary Ralake high School'],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-xs font-bold uppercase tracking-widest w-28 shrink-0 mb-0.5 sm:mb-0 pt-0.5"
                    style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</dt>
                  <dd className="text-sm" style={{ color: '#FFFFFF' }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* School Crest & Vision Section */}
        <div className="mb-20">
          <h2 className="font-display font-bold text-2xl mb-6" style={{ color: '#1A3A8F' }}>Our Crest, Identity & Vision</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-8" style={{ background: '#E8EDFB' }}>
              <div className="w-32 h-32 rounded-lg flex items-center justify-center mx-auto mb-6" style={{ background: '#1A3A8F' }}>
                <span className="text-white font-bold text-2xl">MRHS</span>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Our crest is a royal blue shield with a red accent band and white detailing, built around the image of an open book:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Award size={16} className="shrink-0 mt-0.5" style={{ color: '#1A3A8F' }} />
                  <span><strong>Open Book</strong> — The pursuit of knowledge and academic excellence</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award size={16} className="shrink-0 mt-0.5" style={{ color: '#1A3A8F' }} />
                  <span><strong>Shield Shape</strong> — Protection, pride, and community support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award size={16} className="shrink-0 mt-0.5" style={{ color: '#CC1A2A' }} />
                  <span><strong>Royal Blue</strong> — Dignity, trust, and commitment to learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award size={16} className="shrink-0 mt-0.5" style={{ color: '#CC1A2A' }} />
                  <span><strong>Crimson Red</strong> — Energy, passion, and perseverance</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="card p-6">
                <h4 className="font-bold text-lg mb-2" style={{ color: '#1A3A8F' }}>School Vision</h4>
                <p className="text-gray-600 italic">
                  "To provide quality learning and assessment..."
                  <br />
                  <span className="text-sm text-gray-400">(Full vision statement to be completed by the school)</span>
                </p>
              </div>

              <div className="card p-6">
                <h4 className="font-bold text-lg mb-2" style={{ color: '#1A3A8F' }}>School Mission</h4>
                <p className="text-gray-600 italic">
                  [TO CONFIRM with school]
                </p>
              </div>

              <div className="card p-6" style={{ borderLeft: '4px solid #CC1A2A' }}>
                <h4 className="font-bold text-lg mb-2" style={{ color: '#1A3A8F' }}>School Motto</h4>
                <p className="text-2xl font-display font-bold" style={{ color: '#CC1A2A' }}>
                  "Success Through Perseverance"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { icon: School, value: '8-12', label: 'Grades' },
            { icon: Award, value: 'No-Fee', label: 'Public School' },
            { icon: MapPin, value: '2026', label: 'Matric Class' },
            { icon: Clock, value: 'Maluti', label: 'Eastern Cape' },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="card text-center py-6">
              <Icon size={28} className="mx-auto mb-2" style={{ color: '#1A3A8F' }} />
              <p className="text-2xl font-bold" style={{ color: '#1A3A8F' }}>{value}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>

        {/* Principal */}
        <div style={{ background: '#E8EDFB', border: '1px solid rgba(26,58,143,0.15)', borderRadius: '1.25rem', overflow: 'hidden' }}>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center p-10 text-center"
              style={{ background: '#1A3A8F', borderRight: '3px solid #CC1A2A' }}>
              <div className="w-24 h-24 rounded-full mb-4 flex items-center justify-center font-display font-black text-3xl"
                style={{ background: '#FFFFFF', color: '#1A3A8F' }}>
                {data.principal.name.split(' ').filter(w => w.length > 1).slice(0,2).map(w => w[0]).join('') || '??'}
              </div>
              <p className="font-display font-bold text-lg" style={{ color: '#FFFFFF' }}>{data.principal.name}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{data.principal.title}</p>
            </div>
            <div className="col-span-2 p-8 md:p-12 flex flex-col justify-center">
              <div className="font-display text-5xl leading-none mb-4 opacity-30 select-none" style={{ color: '#1A3A8F' }}>"</div>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
                {data.principal.message.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="font-display text-5xl leading-none mt-2 text-right opacity-30 select-none" style={{ color: '#1A3A8F' }}>"</div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
