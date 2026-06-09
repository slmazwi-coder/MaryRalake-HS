import { Link } from 'react-router-dom'
import { ArrowRight, Award, BookOpen, Users, Bell, Target, GraduationCap, Heart } from 'lucide-react'
import Hero from '../components/Hero'
import NewsSection from '../components/NewsSection'

const PILLARS = [
  { icon: GraduationCap, title: 'Academic Excellence', desc: 'Full CAPS/NSC curriculum from Grade 8 to Grade 12, preparing learners for the National Senior Certificate and beyond.' },
  { icon: Target,        title: 'Tie Ceremony Tradition', desc: 'Our celebrated Matric tie ceremony — a defining tradition that unites our school community each year.' },
  { icon: Heart,        title: 'No-Fee Education',      desc: 'A no-fee public school committed to providing quality education to every learner in our community.' },
  { icon: Users,         title: 'Community Values',     desc: 'A school rooted in respect, discipline, and pride — where every learner belongs and thrives.' },
]

const QUICK_LINKS = [
  { title: 'About Us', to: '/about', desc: 'Learn about our history, mission, and values' },
  { title: 'Academics', to: '/academics', desc: 'Explore our curriculum and subjects' },
  { title: 'Admissions', to: '/admissions', desc: 'Apply for the 2027 academic year' },
  { title: 'Gallery', to: '/gallery', desc: 'View photos from school events' },
]

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <NewsSection />

      {/* Notice banners */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                badge: 'Admissions 2027',
                title: 'Applications are now open',
                body:  'Submit your admission application for the 2027 academic year. We offer Grades 8-12 with the full CAPS/NSC curriculum.',
                to:    '/admissions',
                label: 'Apply now',
              },
              {
                badge: 'Tie Ceremony',
                title: 'Tie Ceremony Tradition',
                body:  'Celebrating our Matric class with pride. The Matric 2026 tie features a navy blue ink-splash design with the school crest.',
                to:    '/gallery',
                label: 'View gallery',
              },
            ].map(({ badge, title, body, to, label }) => (
              <div key={to} className="card flex gap-4 items-start"
                style={{ borderLeft: '4px solid #1A3A8F' }}>
                <div className="p-2.5 rounded-xl shrink-0" style={{ background: 'rgba(26,58,143,0.1)', color: '#1A3A8F' }}>
                  <Bell size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: 'rgba(26,58,143,0.1)', color: '#1A3A8F' }}>
                    {badge}
                  </span>
                  <h3 className="font-display font-bold text-lg mb-1" style={{ color: '#1A3A8F' }}>{title}</h3>
                  <p className="text-sm mb-3" style={{ color: '#4b5563' }}>{body}</p>
                  <Link to={to} className="text-sm font-semibold flex items-center gap-1" style={{ color: '#CC1A2A' }}>
                    {label} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad" style={{ background: '#E8EDFB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="blue-bar mx-auto" />
            <h2 className="section-title">Why Mary Ralake High School?</h2>
            <p className="mt-3 max-w-xl mx-auto text-sm" style={{ color: '#4b5563' }}>
              A school where every learner is seen, valued, and challenged to reach their full potential.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(26,58,143,0.1)', color: '#1A3A8F' }}>
                  <Icon size={24} />
                </div>
                <h3 className="font-display font-bold mb-2" style={{ color: '#1A3A8F' }}>{title}</h3>
                <p className="text-sm" style={{ color: '#4b5563' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="blue-bar mx-auto" />
            <h2 className="section-title">Explore Our School</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_LINKS.map(({ title, to, desc }) => (
              <Link key={to} to={to} className="card text-center group hover:shadow-xl transition-all">
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: '#1A3A8F' }}>{title}</h3>
                <p className="text-sm" style={{ color: '#4b5563' }}>{desc}</p>
                <div className="mt-4 flex items-center justify-center gap-1 text-sm font-semibold" style={{ color: '#CC1A2A' }}>
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Motto CTA */}
      <section style={{ background: '#1A3A8F', borderTop: '4px solid #CC1A2A', borderBottom: '4px solid #CC1A2A' }}>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="font-display font-black text-3xl sm:text-4xl mb-4" style={{ color: '#FFFFFF' }}>
            "Success Through Perseverance"
          </p>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Join the Mary Ralake High School family and discover what you're truly capable of.
          </p>
          <Link to="/admissions" className="btn-secondary text-base px-8 py-3">
            Start Your Application <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
