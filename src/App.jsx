import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Infrastructure from './pages/Infrastructure'
import Admissions from './pages/Admissions'
import Gallery from './pages/Gallery'
import Notices from './pages/Notices'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import CollegeAnthem from './pages/CollegeAnthem'
import Prospectus from './pages/Prospectus'
import TeamsQualification from './pages/TeamsQualification'
import PrincipalMessage from './pages/PrincipalMessage'
import VisionMission from './pages/VisionMission'
import History from './pages/History'
import Error404 from './pages/Error404'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="notices" element={<Notices />} />
          <Route path="contact" element={<Contact />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="college-anthem" element={<CollegeAnthem />} />
          <Route path="prospectus" element={<Prospectus />} />
          <Route path="teams-qualification" element={<TeamsQualification />} />
          <Route path="principal-message" element={<PrincipalMessage />} />
          <Route path="vision-mission" element={<VisionMission />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
