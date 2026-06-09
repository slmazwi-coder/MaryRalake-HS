import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { SCHOOL } from '../lib/store'

const NAV_LINKS = [
  { label: 'Home',         to: '/' },
  { label: 'About',       to: '/about' },
  { label: 'Academics',    to: '/academics' },
  { label: 'Facilities',   to: '/facilities' },
  { label: 'Admissions',  to: '/admissions' },
  { label: 'Gallery',     to: '/gallery' },
  { label: 'News',        to: '/news' },
  { label: 'Contact',     to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }          = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className="sticky top-0 z-50 transition-shadow duration-300"
      style={{
        background: '#FFFFFF',
        borderBottom: '3px solid #1A3A8F',
        boxShadow: scrolled ? '0 4px 24px rgba(26,58,143,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <Link to="/" className="flex items-center gap-3 group min-w-0">
            <div
              className="w-14 h-14 rounded-lg shrink-0 flex items-center justify-center"
              style={{ background: '#1A3A8F' }}
            >
              <span className="text-white font-bold text-xs">MR</span>
            </div>
            <div className="min-w-0">
              <p className="font-display text-base font-bold leading-tight truncate" style={{ color: '#1A3A8F' }}>
                MARY RALAKE HIGH SCHOOL
              </p>
              <p className="text-xs leading-tight mt-0.5" style={{ color: 'rgba(26,58,143,0.65)' }}>
                {SCHOOL.motto}
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150"
                style={
                  pathname === to
                    ? { background: '#1A3A8F', color: '#FFFFFF', fontWeight: 700 }
                    : { color: 'rgba(26,58,143,0.85)' }
                }
                onMouseEnter={e => {
                  if (pathname !== to) e.currentTarget.style.background = 'rgba(26,58,143,0.08)'
                }}
                onMouseLeave={e => {
                  if (pathname !== to) e.currentTarget.style.background = ''
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/student/login"
              className="hidden sm:inline-flex text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors"
              style={{ borderColor: '#1A3A8F', color: '#1A3A8F' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1A3A8F'; e.currentTarget.style.color = '#FFFFFF' }}
              onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '#1A3A8F' }}
            >
              Student Portal
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg"
              style={{ color: '#1A3A8F' }}
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div style={{ background: '#E8EDFB', borderTop: '1px solid rgba(26,58,143,0.2)' }}>
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="px-4 py-2.5 rounded-lg text-sm font-medium"
                style={
                  pathname === to
                    ? { background: '#1A3A8F', color: '#FFFFFF', fontWeight: 700 }
                    : { color: 'rgba(26,58,143,0.85)' }
                }
              >
                {label}
              </Link>
            ))}
            <Link
              to="/student/login"
              className="px-4 py-2.5 rounded-lg text-sm font-medium mt-1"
              style={{ color: '#1A3A8F', borderTop: '1px solid rgba(26,58,143,0.15)', paddingTop: '0.75rem' }}
            >
              Student Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
