import Hero from './Hero'
import AboutSection from './AboutSection'
import FacilitiesSection from './FacilitiesSection'
import GalleryPreview from './GalleryPreview'
import Testimonials from './Testimonials'
import NewsNotices from './NewsNotices'
import StudentsCorner from './StudentsCorner'
import NewsTicker from '../../components/NewsTicker'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      {/* <FacilitiesSection />
      <GalleryPreview /> */}
       <NewsNotices />
      <Testimonials />
      <StudentsCorner />
      <NewsTicker />
    </div>
  )
}

export default Home
