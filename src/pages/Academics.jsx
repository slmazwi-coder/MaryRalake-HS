import { Link } from 'react-router-dom'
import { BookOpen, Award, Users, Target } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

const SUBJECTS = [
  { name: 'Mathematics / Mathematical Literacy', category: 'Mathematics' },
  { name: 'English Home Language', category: 'Languages' },
  { name: 'First Additional Language', category: 'Languages' },
  { name: 'Sesotho / IsiXhosa (Home Language)', category: 'Languages' },
  { name: 'Life Sciences', category: 'Sciences' },
  { name: 'Physical Sciences', category: 'Sciences' },
  { name: 'Geography', category: 'Humanities' },
  { name: 'History', category: 'Humanities' },
  { name: 'Business Studies / Economics', category: 'Commerce' },
  { name: 'Life Orientation', category: 'General' },
]

const ACADEMIC_FOCUS = [
  'Structured NSC examination preparation from Grade 10',
  'Dedicated Grade 12 revision and support programmes',
  'Learner support and academic mentorship',
  'Internal assessments aligned to CAPS requirements',
  'Tie Ceremony tradition — formal recognition of the Matric class each year',
  'Community-connected learning and values education',
]

export default function Academics() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1A3A8F 0%, #102060 100%)' }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Curriculum & Academic Offering</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Mary Ralake High School offers the full National Senior Certificate (NSC) / CAPS curriculum, preparing learners from Grade 8 through Grade 12 for tertiary education, the world of work, and active citizenship.
          </p>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="blue-bar mx-auto" />
            <h2 className="section-title">Subjects Offered (NSC / CAPS)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUBJECTS.map((subject) => (
              <div key={subject.name} className="card flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#E8EDFB' }}>
                  <BookOpen size={24} style={{ color: '#1A3A8F' }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#1A1A1A' }}>{subject.name}</p>
                  <p className="text-xs" style={{ color: '#666' }}>{subject.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 italic">
              Additional subjects to be confirmed with school
            </p>
          </div>
        </div>
      </section>

      {/* Academic Focus Section */}
      <section className="section-pad" style={{ background: '#E8EDFB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="blue-bar" />
              <h2 className="section-title">Academic Focus & Matric Preparation</h2>
              <p className="mt-4 text-gray-600">
                We hold our learners to the highest standard — not because we expect perfection, but because we believe in what they are capable of.
              </p>

              <div className="mt-8 space-y-4">
                {ACADEMIC_FOCUS.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#1A3A8F' }}>
                      <Award size={14} style={{ color: '#FFFFFF' }} />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#1A3A8F' }}>Why Choose Mary Ralake HS?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#CC1A2A' }}>
                    <Target size={24} style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#1A1A1A' }}>Dedicated Support</h4>
                    <p className="text-sm text-gray-600">Our teachers provide individual attention and mentorship to help every learner succeed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#CC1A2A' }}>
                    <Users size={24} style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#1A1A1A' }}>Community Values</h4>
                    <p className="text-sm text-gray-600">We combine academic excellence with strong moral values and community pride.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: '#1A3A8F' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Mary Ralake High School?</h2>
          <p className="text-white/80 mb-8">
            Applications for the 2027 academic year are now open. We're a no-fee public school committed to quality education for all.
          </p>
          <Link to="/admissions" className="btn-secondary text-base px-8 py-3">
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}