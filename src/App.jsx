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

// Infrastructure Pages
import CollegeView from './pages/academics/Infrastructure/CollegeView'
import Auditorium from './pages/academics/Infrastructure/Auditorium'
import AdministrativeOffice from './pages/academics/Infrastructure/AdministrativeOffice'
import PrincipalsOffice from './pages/academics/Infrastructure/PrincipalsOffice'
import Playground from './pages/academics/Infrastructure/Playground'
import Classroom from './pages/academics/Infrastructure/Classroom'
import GalleryRoom from './pages/academics/Infrastructure/GalleryRoom'

// Academic Facilities Pages
import ComputerLaboratory from './pages/academics/facilities/academics-facilities/ComputerLaboratory'
import PhysicsChemistryBiologyLab from './pages/academics/facilities/academics-facilities/PhysicsChemistryBiologyLab'
import Library from './pages/academics/facilities/academics-facilities/Library'
import ArtCraftCenter from './pages/academics/facilities/academics-facilities/ArtCraftCenter'
import MusicRoom from './pages/academics/facilities/academics-facilities/MusicRoom'

// Other Facilities Pages
import CycleStand from './pages/academics/facilities/other-facilities/CycleStand'
import GuardRoom from './pages/academics/facilities/other-facilities/GuardRoom'
import SickRoom from './pages/academics/facilities/other-facilities/SickRoom'
import EntryGate from './pages/academics/facilities/other-facilities/EntryGate'
import OtherFacilities from './pages/academics/facilities/other-facilities/OtherFacilities'
import BiometricAttendance from './pages/academics/facilities/other-facilities/BiometricAttendance'

// Academics Pages
import Activities2024_2025 from './pages/academics/Activities2024-2025'
import FeeStructure from './pages/academics/FeeStructure'

// Admissions Pages
import WhyChooseOurCollege from './pages/admissions/WhyChooseOurCollege'
import OnlineAdmission from './pages/admissions/OnlineAdmission'

// Gallery Pages
import Photos from './pages/gallery/Photos'
import Videos from './pages/gallery/Videos'

// Other Pages
import AnnualReport from './pages/AnnualReport'
import AffiliationCertificate from './pages/AffiliationCertificate'

// Activities Pages
import Awards from './pages/activities/Awards'
import Rangoli from './pages/activities/competitions/Rangoli'
import SoloDance from './pages/activities/competitions/SoloDance'
import Cooking from './pages/activities/Cooking'
import Picnic from './pages/activities/Picnic'
import Gardening from './pages/activities/Gardening'

// DELED Council
import DeledCouncilWebsite from './pages/DeledCouncilWebsite'

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
          
          {/* Infrastructure Routes */}
          <Route path="academics/infrastructure/college-view" element={<CollegeView />} />
          <Route path="academics/infrastructure/auditorium" element={<Auditorium />} />
          <Route path="academics/infrastructure/administrative-office" element={<AdministrativeOffice />} />
          <Route path="academics/infrastructure/principals-office" element={<PrincipalsOffice />} />
          <Route path="academics/infrastructure/playground" element={<Playground />} />
          <Route path="academics/infrastructure/classroom" element={<Classroom />} />
          <Route path="academics/infrastructure/gallery-room" element={<GalleryRoom />} />
          
          {/* Academic Facilities Routes */}
          <Route path="academics/facilities/academics-facilities/computer-laboratory" element={<ComputerLaboratory />} />
          <Route path="academics/facilities/academics-facilities/physics-chemistry-biology-lab" element={<PhysicsChemistryBiologyLab />} />
          <Route path="academics/facilities/academics-facilities/library" element={<Library />} />
          <Route path="academics/facilities/academics-facilities/art&craft" element={<ArtCraftCenter />} />
          <Route path="academics/facilities/academics-facilities/musicroom" element={<MusicRoom />} />
          
          {/* Other Facilities Routes */}
          <Route path="academics/facilities/other-facilities/cycle-stand" element={<CycleStand />} />
          <Route path="academics/facilities/other-facilities/guard-room" element={<GuardRoom />} />
          <Route path="academics/facilities/other-facilities/sick-room" element={<SickRoom />} />
          <Route path="academics/facilities/other-facilities/entry-gate" element={<EntryGate />} />
          <Route path="academics/facilities/other-facilities/other-facilities" element={<OtherFacilities />} />
          <Route path="academics/facilities/other-facilities/biometric-attendance" element={<BiometricAttendance />} />
          
          {/* Academics Routes */}
          <Route path="academics/activities-2024-2025" element={<Activities2024_2025 />} />
          <Route path="academics/fee-structure" element={<FeeStructure />} />
          
          {/* Admissions Routes */}
          <Route path="admissions/why-choose-our-college" element={<WhyChooseOurCollege />} />
          <Route path="admissions/online-admission" element={<OnlineAdmission />} />
          
          {/* Gallery Routes */}
          <Route path="gallary/photos" element={<Photos />} />
          <Route path="gallary/videos" element={<Videos />} />
          
          {/* Other Routes */}
          <Route path="annual-report" element={<AnnualReport />} />
          <Route path="affiliation-certificate" element={<AffiliationCertificate />} />
          
          {/* Activities Routes */}
          <Route path="activities/awards" element={<Awards />} />
          <Route path="activities/competitions/rangoli" element={<Rangoli />} />
          <Route path="activities/competitions/solo-dance" element={<SoloDance />} />
          <Route path="activities/cooking" element={<Cooking />} />
          <Route path="activities/picnic" element={<Picnic />} />
          <Route path="activities/gardening" element={<Gardening />} />
          
          {/* DELED Council Route */}
          <Route path="deled-council-website" element={<DeledCouncilWebsite />} />
          
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
