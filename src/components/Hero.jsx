import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const SLIDES = [
  { caption: 'Success Through Perseverance',     sub: 'Our School Motto' },
  { caption: 'Grades 8 – 12 Excellence',       sub: 'Full Secondary Education' },
  { caption: 'No-Fee Public School',            sub: 'Quality Education for All' },
  { caption: 'Tie Ceremony Tradition',          sub: 'Celebrating Our Matrics' },
  { caption: 'Admissions 2027 Open',            sub: 'Apply Now' },
]

const STATS = [
  { value: '8-12',  label: 'Grades Offered' },
  { value: 'NSC',  label: 'National Senior Certificate' },
  { value: 'No-Fee', label: 'Public School' },
  { value: 'CAPS', label: 'Aligned Curriculum' },
]

export default function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 5500)
    return () => clearInterval(t)
  }, [])

  const prev = () => setIdx(i => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIdx(i => (i + 1) % SLIDES.length)

  return (
    <section className="relative overflow-hidden diagonal-strip" style={{ minHeight: '88vh', background: '#1A3A8F' }}>

      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1A3A8F 0%, #102060 50%, #1A3A8F 100%)' }} />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #FFFFFF 0, #FFFFFF 1px, transparent 0, transparent 50%)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: '#CC1A2A' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center" style={{ minHeight: '78vh' }}>
        <div className="max-w-3xl pt-16 pb-8">

          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-6 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#CC1A2A' }} />
            {SLIDES[idx].sub}
          </div>

          <h1 className="font-display font-black mb-6 fade-up" style={{
            fontSize: 'clamp(2.25rem, 6vw, 4rem)',
            color: '#FFFFFF',
            lineHeight: 1.1,
          }}>
            {SLIDES[idx].caption}
          </h1>

          <p className="text-lg mb-8 max-w-xl delay-1 fade-up" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Empowering learners to achieve excellence through discipline, dedication, and community.
          </p>

          <div className="flex flex-wrap gap-3 delay-2 fade-up">
            <Link to="/about" className="btn-primary">
              Explore Our School <ArrowRight size={16} />
            </Link>
            <Link to="/admissions" className="btn-secondary">
              Apply Now
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
            aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="rounded-full transition-all"
                style={{
                  width: i === idx ? '24px' : '8px',
                  height: '8px',
                  background: i === idx ? '#CC1A2A' : 'rgba(255,255,255,0.4)',
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
            aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative z-10" style={{ background: 'rgba(16,32,96,0.8)', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {STATS.map(({ value, label }, i) => (
              <div
                key={i}
                className="py-5 px-4 text-center"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
              >
                <p className="font-display font-black text-2xl sm:text-3xl" style={{ color: '#FFFFFF' }}>{value}</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
