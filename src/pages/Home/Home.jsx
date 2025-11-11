import Hero from './Hero'
import AboutSection from './AboutSection'
import FacilitiesSection from './FacilitiesSection'
import GalleryPreview from './GalleryPreview'
import Testimonials from './Testimonials'
import NewsEventsSection from './NewsEventsSection'
import StudentsCorner from './StudentsCorner'
import ProspectusImages from './ProspectusImages'

const Home = () => {
  return (
    <div>
      <Hero />
      <NewsEventsSection />
      <ProspectusImages />
      
      {/* <AboutSection /> */}
      {/* <FacilitiesSection />
      <GalleryPreview /> */}
      {/* <Testimonials /> */}
      <StudentsCorner />
      
    </div>
  )
}

export default Home
