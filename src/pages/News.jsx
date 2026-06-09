import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { getNews } from '../lib/store'

export default function News() {
  const [news, setNews] = useState([])

  useEffect(() => {
    setNews(getNews())
  }, [])

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1A3A8F 0%, #102060 100%)' }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">News & Notices</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and announcements from Mary Ralake High School.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {news.length > 0 ? (
            <div className="space-y-8">
              {news.map((item) => (
                <article key={item.id} className="card flex flex-col md:flex-row gap-6">
                  {item.image && (
                    <div className="md:w-1/3 shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover rounded-xl"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(26,58,143,0.1)', color: '#1A3A8F' }}>
                        <Tag size={11} /> {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: '#666' }}>
                        <Calendar size={11} /> {item.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: '#1A3A8F' }}>
                      {item.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <p className="text-sm text-gray-500 mb-4">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#E8EDFB' }}>
                <Calendar size={40} style={{ color: '#1A3A8F' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1A3A8F' }}>No News Yet</h3>
              <p className="text-gray-500">Check back soon for updates from Mary Ralake High School.</p>
            </div>
          )}
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="section-pad" style={{ background: '#E8EDFB' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1A3A8F' }}>Ready to Join Us?</h2>
          <p className="text-gray-600 mb-6">
            Applications for the 2027 academic year are now open. Mary Ralake High School is a no-fee public school.
          </p>
          <Link to="/admissions" className="btn-primary">
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}