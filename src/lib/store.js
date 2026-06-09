// ── Storage helpers ────────────────────────────────────────────────────────
const get = (key, fallback) => {
  try {
    const raw = localStorage.getItem(`mrhs_${key}`)
    return raw ? JSON.parse(raw) : fallback
  } catch { return fallback }
}

const set = (key, value) => {
  try { localStorage.setItem(`mrhs_${key}`, JSON.stringify(value)) } catch {}
}

// ── School constants ────────────────────────────────────────────────────────
export const SCHOOL = {
  name:       'Mary Ralake High School',
  short:      'Mary Ralake HS',
  motto:      'Success Through Perseverance',
  emis:       '[TO CONFIRM]',
  address:    'Maluti, Matatiele, Eastern Cape, 4730',
  postal:     '[TO CONFIRM]',
  phone:      '[TO CONFIRM]',
  cell:       '[TO CONFIRM]',
  email:      '[TO CONFIRM]',
  province:   'Eastern Cape',
  district:   'Alfred Nzo West Education District',
  municipality: 'Elundini Local Municipality',
  sector:     'Public',
  feeStatus:  'No-Fee Public School',
  grades:     'Grade 8 – Grade 12',
  formerName: 'Maluti Junior Secondary School (Maluti JSS)',
  facebook:   'Mary Ralake high School',
  photographer: 'EverLasting Portraits',
  hoursWeek:  '07:30 – 15:30',
  hoursFri:   '07:30 – 13:00',
  coords:     { lat: -30.3, lng: 28.9 },
}

// ── Default data ─────────────────────────────────────────────────────────
const DEFAULT_NEWS = [
  {
    id: '1',
    title: '2027 Admissions Now Open',
    date: '2026-06-01',
    excerpt: 'Applications for Grade 8–12 admission for the 2027 academic year are now open at Mary Ralake High School.',
    body: 'Mary Ralake High School is accepting applications for the 2027 academic year. We are a no-fee public school offering Grades 8 through 12 with the full CAPS/NSC curriculum.',
    image: '',
    category: 'Admissions',
  },
  {
    id: '2',
    title: 'Matric 2026 Tie Ceremony',
    date: '2026-03-15',
    excerpt: 'The Class of 2026 received their matric ties in a proud ceremony celebrating their journey to Grade 12.',
    body: 'Mary Ralake High School celebrated the Class of 2026 with a memorable tie ceremony. Learners received their custom-designed matric ties with the navy blue ink-splash design, embroidered with the school crest and MATRIC 2026.',
    image: '',
    category: 'Events',
  },
  {
    id: '3',
    title: 'School Upgrade Complete',
    date: '2026-01-15',
    excerpt: 'Mary Ralake High School is now a fully-fledged secondary school offering Grades 8-12.',
    body: 'Formerly known as Maluti Junior Secondary School (Maluti JSS), our school has been upgraded to a full high school. We now proudly serve learners from Grade 8 through Grade 12.',
    image: '',
    category: 'News',
  },
]

const DEFAULT_ABOUT = {
  history: [
    'Mary Ralake High School is a public secondary school located in Maluti, Matatiele, in the Eastern Cape. We operate under the Alfred Nzo West Education District within the Elundini Local Municipality.',
    'Formerly known as Maluti Junior Secondary School, Mary Ralake High School has grown into a full secondary school — proudly offering Grades 8 through 12 and building a new chapter of academic achievement and community pride.',
    'Our motto — "Success Through Perseverance" — captures the spirit of everything we do. We believe that success is not a gift but an outcome of consistent effort, discipline, and resilience.',
    'We are a no-fee public school, committed to providing quality education to every learner in our community, regardless of their background.',
  ],
  principal: {
    name: '[TO CONFIRM]',
    title: 'Principal',
    message: [
      'Welcome to Mary Ralake High School. We believe every learner carries within them the capacity for greatness. Our role is to unlock it — through discipline, love, and unwavering belief in their potential.',
      'At Mary Ralake HS, we value respect, responsibility, and pride in our school community. Our motto — Success Through Perseverance — inspires us to rise up each day and pursue progress in everything we do.',
    ],
  },
}

const DEFAULT_RESULTS = {
  '2026': {
    passRate: 0,
    bachelors: 0,
    bachelorRate: 0,
    distinctions: 0,
    wrote: 0,
    subjects: [],
  },
  '2025': { passRate: 0, bachelors: 0, bachelorRate: 0, distinctions: 0, wrote: 0, subjects: [] },
  '2024': { passRate: 0, bachelors: 0, bachelorRate: 0, distinctions: 0, wrote: 0, subjects: [] },
}

const DEFAULT_ACTIVITIES = [
  { id: '1', name: 'Soccer',    category: 'Sport',    description: 'Boys and girls teams competing at district and regional level.',      image: '' },
  { id: '2', name: 'Netball',   category: 'Sport',    description: 'Competitive teams across all age groups.',                           image: '' },
  { id: '3', name: 'Athletics', category: 'Sport',    description: 'Track and field development and inter-district competition.',         image: '' },
  { id: '4', name: 'Choir',     category: 'Culture',  description: 'Celebrating our heritage through choral music.',                     image: '' },
  { id: '5', name: 'Drama',     category: 'Culture',  description: 'Performances celebrating culture, language, and community.',         image: '' },
  { id: '6', name: 'Debating',  category: 'Academic', description: 'Building critical thinking and public speaking skills.',              image: '' },
  { id: '7', name: 'Spelling Bee', category: 'Academic', description: 'Language enrichment and vocabulary building.',                    image: '' },
]

const DEFAULT_HALL = [
  { id: '1', name: 'Top Achiever', title: 'Best Matric Learner', year: '2026', desc: '', image: '' },
  { id: '2', name: 'Top Achiever', title: '2nd Best Matric Learner', year: '2026', desc: '', image: '' },
  { id: '3', name: 'Top Achiever', title: '3rd Best Matric Learner', year: '2026', desc: '', image: '' },
]

const DEFAULT_CONTACT = {
  address: SCHOOL.address,
  postal:  SCHOOL.postal,
  phone:   SCHOOL.phone,
  cell:    SCHOOL.cell,
  email:   SCHOOL.email,
  monThu:  '07:30 – 15:30',
  friday:  '07:30 – 13:00',
  hoursWeek: SCHOOL.hoursWeek,
  hoursFri:  SCHOOL.hoursFri,
  district: 'Alfred Nzo West Education District',
  municipality: 'Elundini Local Municipality',
  facebook: SCHOOL.facebook,
}

// ── Getters / Setters ───────────────────────────────────────────────────────
export const getNews       = ()      => get('news',       DEFAULT_NEWS)
export const setNews       = (v)     => set('news',       v)
export const getAbout      = ()      => get('about',      DEFAULT_ABOUT)
export const setAbout      = (v)     => set('about',      v)
export const getActivities = ()      => get('activities', DEFAULT_ACTIVITIES)
export const setActivities = (v)     => set('activities', v)
export const getHallOfFame = ()      => get('hall',       DEFAULT_HALL)
export const setHallOfFame = (v)     => set('hall',       v)
export const getContact    = ()      => get('contact',    DEFAULT_CONTACT)
export const setContact    = (v)      => set('contact',    v)
export const getDocuments  = ()      => get('documents',  [])
export const setDocuments  = (v)     => set('documents',  v)
export const getApplications = ()    => get('applications', [])
export const setApplications = (v)   => set('applications', v)
export const getResultsByYear = (y)  => get(`results_${y}`, DEFAULT_RESULTS[y] || null)
export const setResultsByYear = (y, v) => set(`results_${y}`, v)
export const getAchievers = (y)      => get(`achievers_${y}`, [])
export const setAchievers = (y, v)   => set(`achievers_${y}`, v)

// ── Auth ────────────────────────────────────────────────────────────
export const isAuthenticated = () => localStorage.getItem('mrhs_auth') === 'true'
export const login  = (pw) => { if (pw === 'admin2026') { localStorage.setItem('mrhs_auth', 'true'); return true } return false }
export const logout = ()   => localStorage.removeItem('mrhs_auth')

// ── IDs ────────────────────────────────────────────────────────────
export const generateId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`

export const generateStudentNumber = (year) => {
  const key = `mrhs_ctr_${year}`
  const n = Number(localStorage.getItem(key) || 0) + 1
  localStorage.setItem(key, String(n))
  return `${year}-${String(n).padStart(6, '0')}`
}

export const calcAvg = (marks = []) => {
  if (!marks.length) return 0
  return Math.round((marks.reduce((s, m) => s + (m.mark || 0), 0) / marks.length) * 10) / 10
}
