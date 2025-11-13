import Hero from './Hero'
import AboutSection from './AboutSection'
import FacilitiesSection from './FacilitiesSection'
import GalleryPreview from './GalleryPreview'
import Testimonials from './Testimonials'
import NewsEventsSection from './NewsEventsSection'
import StudentsCorner from './StudentsCorner'
import ProspectusImages from './ProspectusImages'
import QuickInfoBlocks from './QuickInfoBlocks'
import AccreditationIds from './AccreditationIds'
import NewProgrammes from './NewProgrammes'
import NoticesEvents from './NoticesEvents'
import PrincipalVisionMission from './PrincipalVisionMission'
import StatisticsSection from './StatisticsSection'
import CollegeCorner from './CollegeCorner'
import PWCNewsSection from './PWCNewsSection'
import NoticeTicker from '../../components/NoticeTicker'

const Home = () => {
  return (
    <div>
      {/* <NoticeTicker /> */}
      <Hero />
      <QuickInfoBlocks />
      {/* <AccreditationIds /> */}
      <AboutSection />
      <NewProgrammes />
      <NoticesEvents />
      <PrincipalVisionMission />
      {/* <PWCNewsSection /> */}
      
      {/* <CollegeCorner /> */}
      <GalleryPreview />
      <StatisticsSection />
      <StudentsCorner />
    </div>
  )
}

export default Home
