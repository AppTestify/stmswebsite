import Hero from './Hero'
import AboutSection from './AboutSection'
import FacilitiesSection from './FacilitiesSection'
import GalleryPreview from './GalleryPreview'
import Testimonials from './Testimonials'
import NewsNotices from './NewsNotices'
import FeaturesSection from './FeaturesSection'
import NewsEventsSection from './NewsEventsSection'
import StudentsCorner from './StudentsCorner'
import NewsTicker from '../../components/NewsTicker'

const Home = () => {
  return (
    <div>
      <Hero />
      <NewsTicker />
      <FeaturesSection />
      <NewsEventsSection />
      <NewsNotices />
      
      {/* <AboutSection /> */}
      {/* <FacilitiesSection />
      <GalleryPreview /> */}
      {/* <Testimonials /> */}
      <StudentsCorner />
      
    </div>
  )
}

export default Home
