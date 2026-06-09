import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook } from 'lucide-react'
import { SCHOOL } from '../lib/store'

export default function Footer() {
  return (
    <footer style={{ background: '#102060', borderTop: '4px solid #1A3A8F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: '#1A3A8F' }}
              >
                <span className="text-white font-bold text-sm">MRHS</span>
              </div>
              <div>
                <p className="font-display text-xl font-bold leading-tight" style={{ color: '#FFFFFF' }}>
                  Mary Ralake HS
                </p>
                <p className="text-xs italic leading-tight mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {SCHOOL.motto}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61572826877060"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.1)', color: '#CC1A2A' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#CC1A2A'; e.currentTarget.style.color = '#FFFFFF' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#CC1A2A' }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#CC1A2A', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {[
                ['Home',         '/'],
                ['About',        '/about'],
                ['Academics',    '/academics'],
                ['Admissions',   '/admissions'],
                ['Gallery',      '/gallery'],
                ['Contact',      '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-[#CC1A2A] transition-colors"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#CC1A2A' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#CC1A2A', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>{SCHOOL.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="shrink-0" />
                <span>{SCHOOL.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ width: 15 }}></span>
                <span className="break-all">Facebook: {SCHOOL.facebook}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#CC1A2A', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              School Hours
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <li className="flex justify-between gap-4"><span>Mon – Thu</span><span className="font-medium">{SCHOOL.hoursWeek}</span></li>
              <li className="flex justify-between gap-4"><span>Friday</span><span className="font-medium">{SCHOOL.hoursFri}</span></li>
              <li className="flex justify-between gap-4"><span>Sat – Sun</span><span className="font-medium">Closed</span></li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>
          <p>&copy; {new Date().getFullYear()} Mary Ralake High School. All Rights Reserved.</p>
          <p>Alfred Nzo West Education District, Eastern Cape</p>
        </div>

      </div>
    </footer>
  )
}
