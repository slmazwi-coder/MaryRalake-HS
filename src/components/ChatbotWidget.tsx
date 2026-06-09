import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, GraduationCap } from 'lucide-react'

// Chatbot responses for Mary Ralake High School
const CHATBOT_RESPONSES = {
  greetings: [
    "Hi there! I'm the Mary Ralake High School assistant. Ask me anything about admissions, academics, the Tie Ceremony, school life, or how to contact us!",
  ],
  admissions: {
    apply: "Applications are handled directly at the school. Visit us in Maluti, Matatiele, Eastern Cape, 4730, or find us on Facebook: Mary Ralake high School. You'll need your latest school report, birth certificate, and a parent/guardian ID.",
    fee: "Mary Ralake High School is a no-fee public school — there are no tuition fees charged to learners.",
    grades: "We offer Grades 8 through 12.",
    documents: "For admission, you'll typically need: birth certificate or ID, latest school report, parent/guardian ID copy, and proof of residence.",
  },
  academics: {
    subjects: "We offer the full CAPS/NSC curriculum including Mathematics, English, Life Sciences, Physical Sciences, Geography, History, Business Studies, and Life Orientation, among others.",
    matric: "Yes! Matric preparation is a central focus at Mary Ralake HS. We support Grade 12 learners with revision programmes, structured assessments, and dedicated teaching to help every learner succeed in the NSC examinations.",
    curriculum: "We follow the National Senior Certificate (NSC) / CAPS curriculum, preparing learners for tertiary education, the world of work, and active citizenship.",
  },
  tieCeremony: {
    what: "The Tie Ceremony is one of our most cherished traditions. Each year, at the start of the Matric year, we hold a formal ceremony to welcome the Grade 12 class and present them with their Matric ties. It's a moment of pride for learners, parents, and the whole community.",
    matric2026: "The Matric 2026 tie is navy blue with an ink-splash design, embroidered with the school crest and 'MATRIC 2026'. It's a symbol of the commitment and pride of our Class of 2026.",
  },
  schoolHistory: {
    former: "Yes — Mary Ralake High School was previously known as Maluti Junior Secondary School (Maluti JSS). The school was upgraded to a full high school and renamed Mary Ralake High School.",
    location: "We're located in Maluti, Matatiele, in the Eastern Cape — within the Alfred Nzo West Education District.",
  },
  contact: {
    how: "You can visit us in Maluti, Matatiele, Eastern Cape, 4730, or find us on Facebook: Mary Ralake high School. For specific contact details, please check with the school directly.",
    where: "We're located in Maluti, Matatiele, in the Eastern Cape — within the Alfred Nzo West Education District.",
  },
  general: {
    motto: "Our motto is 'Success Through Perseverance' — it's the principle that guides everything we do.",
    colours: "Our school colours are royal blue, red, and white.",
    photos: "Our official school photographer is EverLasting Portraits.",
  },
}

const uid = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`

const QUICK_QUESTIONS = [
  'How do I apply for admission?',
  'Is there a school fee?',
  'What is the Tie Ceremony?',
  'What subjects do you offer?',
]

function findResponse(text) {
  const t = text.toLowerCase()
  
  // Greetings
  if (t.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
    return CHATBOT_RESPONSES.greetings[0]
  }
  
  // Admissions
  if (t.includes('apply') || t.includes('admission')) {
    if (t.includes('document')) return CHATBOT_RESPONSES.admissions.documents
    if (t.includes('fee')) return CHATBOT_RESPONSES.admissions.fee
    if (t.includes('grade')) return CHATBOT_RESPONSES.admissions.grades
    return CHATBOT_RESPONSES.admissions.apply
  }
  
  // Academics
  if (t.includes('subject')) return CHATBOT_RESPONSES.academics.subjects
  if (t.includes('matric') || t.includes('grade 12') || t.includes('examination')) return CHATBOT_RESPONSES.academics.matric
  if (t.includes('curriculum') || t.includes('caps') || t.includes('nsc')) return CHATBOT_RESPONSES.academics.curriculum
  
  // Tie Ceremony
  if (t.includes('tie ceremony') || t.includes('tie')) {
    if (t.includes('2026') || t.includes('matric 2026')) return CHATBOT_RESPONSES.tieCeremony.matric2026
    return CHATBOT_RESPONSES.tieCeremony.what
  }
  
  // School History
  if (t.includes('former') || t.includes('before') || t.includes('renamed') || t.includes('maluti jss')) {
    return CHATBOT_RESPONSES.schoolHistory.former
  }
  
  // Contact
  if (t.includes('contact') || t.includes('phone') || t.includes('email')) {
    if (t.includes('where') || t.includes('location') || t.includes('address')) return CHATBOT_RESPONSES.contact.where
    return CHATBOT_RESPONSES.contact.how
  }
  
  // General
  if (t.includes('motto')) return CHATBOT_RESPONSES.general.motto
  if (t.includes('colour') || t.includes('color')) return CHATBOT_RESPONSES.general.colours
  if (t.includes('photo') || t.includes('photographer')) return CHATBOT_RESPONSES.general.photos
  if (t.includes('where') || t.includes('location')) return CHATBOT_RESPONSES.schoolHistory.location
  
  // Fallback
  return "That's a great question! For more details, please visit us in Maluti, Matatiele, or find us on Facebook: Mary Ralake high School."
}

export default function ChatbotWidget() {
  const [open, setOpen]       = useState(false)
  const [input, setInput]     = useState('')
  const [messages, setMessages] = useState([{
    id: uid(), role: 'bot',
    text: CHATBOT_RESPONSES.greetings[0],
  }])
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 150) }, [open])

  const addMsg = (role, text) => setMessages(p => [...p, { id: uid(), role, text }])

  const send = (override) => {
    const text = (override ?? input).trim()
    if (!text) return
    addMsg('user', text)
    setInput('')
    
    // Simulate typing delay
    setTimeout(() => {
      const response = findResponse(text)
      addMsg('bot', response)
    }, 500)
  }

  return (
    <>
      {open && (
        <div className="fixed z-50 bottom-20 right-3 sm:right-6 flex flex-col"
          style={{
            width: 'min(375px, calc(100vw - 1.5rem))',
            height: 'min(560px, 72vh)',
            background: '#fff',
            borderRadius: '1.25rem',
            boxShadow: '0 24px 64px rgba(26,58,143,0.18)',
            border: '1px solid rgba(26,58,143,0.2)',
            overflow: 'hidden',
          }}>

          <div className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ background: '#1A3A8F', borderBottom: '3px solid #CC1A2A' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#FFFFFF' }}>
                <GraduationCap size={15} style={{ color: '#1A3A8F' }} />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight" style={{ color: '#FFFFFF' }}>Ask Mary Ralake</p>
                <p className="text-xs flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-green-400 inline-block" />
                  Your school assistant
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg transition-colors"
              style={{ color: '#FFFFFF' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '' }}>
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: '#F5F8FF' }}>
            {messages.map(m => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                  style={m.role === 'user'
                    ? { background: '#1A3A8F', color: '#FFFFFF' }
                    : { background: '#FFFFFF', color: '#374151', border: '1px solid rgba(26,58,143,0.15)' }
                  }>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {QUICK_QUESTIONS.map(q => (
                <button key={q} onClick={() => send(q)}
                  className="text-xs px-3 py-1.5 rounded-full transition-colors"
                  style={{ background: 'rgba(26,58,143,0.1)', color: '#1A3A8F', border: '1px solid rgba(26,58,143,0.2)' }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 px-3 py-3 shrink-0" style={{ borderTop: '1px solid rgba(26,58,143,0.12)' }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask a question..."
              className="flex-1 text-sm px-3 py-2 rounded-xl border outline-none"
              style={{ borderColor: 'rgba(26,58,143,0.2)' }}
            />
            <button onClick={() => send()}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
              style={{ background: '#1A3A8F', color: '#FFFFFF' }}
              disabled={!input.trim()}>
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(v => !v)}
        className="fixed z-50 bottom-4 right-3 sm:right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        style={{ background: '#1A3A8F', color: '#FFFFFF' }}
        aria-label="Chat">
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  )
}
