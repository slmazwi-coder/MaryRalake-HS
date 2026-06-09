import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatbotWidget from './components/ChatbotWidget'
import Home from './pages/Home'
import About from './pages/About'
import { Staff } from './pages/Staff'
import { Documents } from './pages/Documents'
import { Achievements } from './pages/Achievements'
import { Sport } from './pages/Sport'
import { Activities } from './pages/Activities'
import { ExtraCurricular } from './pages/ExtraCurricular'
import { Admissions } from './pages/Admissions'
import { Contact } from './pages/Contact'
import { StudentLogin } from './pages/StudentLogin'
import { StudentPortal } from './pages/StudentPortal'
import Academics from './pages/Academics'
import Facilities from './pages/Facilities'
import Gallery from './pages/Gallery'
import News from './pages/News'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/extra-curricular" element={<ExtraCurricular />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/portal" element={<StudentPortal />} />
        </Routes>
        <Footer />
        <ChatbotWidget />
      </div>
    </BrowserRouter>
  )
}
