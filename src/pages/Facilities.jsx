import { Building, Users, Book, Trophy, GraduationCap } from 'lucide-react'

const FACILITIES = [
  {
    icon: Building,
    title: 'Classrooms',
    description: 'Well-ventilated classrooms equipped with desks and boards for effective learning.',
  },
  {
    icon: Book,
    title: 'Library',
    description: 'A growing collection of books and resources to support learner development.',
  },
  {
    icon: Users,
    title: 'Staff Rooms',
    description: 'Dedicated spaces for educators to prepare lessons and collaborate.',
  },
  {
    icon: GraduationCap,
    title: 'Computer Lab',
    description: 'Basic computer access for learners to develop digital skills.',
  },
  {
    icon: Trophy,
    title: 'Sports Field',
    description: 'Open grounds for soccer, athletics, and other sporting activities.',
  },
  {
    icon: Building,
    title: 'Administration Block',
    description: 'Office spaces for school management and administrative functions.',
  },
]

export default function Facilities() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1A3A8F 0%, #102060 100%)' }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Our Facilities</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Mary Ralake High School provides essential facilities to support the academic and holistic development of our learners.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="blue-bar mx-auto" />
            <h2 className="section-title">School Facilities</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our school provides a range of facilities to support teaching, learning, and extracurricular activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility) => (
              <div key={facility.title} className="card text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: '#E8EDFB' }}>
                  <facility.icon size={32} style={{ color: '#1A3A8F' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1A3A8F' }}>{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="section-pad" style={{ background: '#E8EDFB' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A3A8F' }}>Facility Development</h3>
            <p className="text-gray-600">
              Mary Ralake High School is continuously improving its facilities to provide the best possible learning environment for our learners. As a growing school, we are committed to expanding our infrastructure over time.
            </p>
            <p className="mt-4 text-sm" style={{ color: '#666' }}>
              Note: Specific details about facility capacity and equipment to be confirmed with the school.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}