import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const imageSlides = [
    {
      id: 1,
      image: "/images/slider/slider11.webp",
      title: "St. Teresa's College",
      subtitle: "Primary Teachers Education College",
      description: "Shaping the future of education through excellence in teacher training"
    },
    {
      id: 2,
      image: "/images/slider/slider12.webp",
      title: "Modern Infrastructure",
      subtitle: "State-of-the-Art Facilities",
      description: "World-class facilities designed for comprehensive learning experience"
    },
    {
      id: 3,
      image: "/images/slider/slider13.webp",
      title: "Academic Excellence",
      subtitle: "Quality Education",
      description: "Comprehensive programs designed to prepare competent educators"
    },
    {
      id: 4,
      image: "/images/slider/slider14.webp",
      title: "Student Life",
      subtitle: "Vibrant Campus Community",
      description: "Engaging student activities and enriching campus life"
    },
    {
      id: 5,
      image: "/images/slider/slider15.webp",
      title: "Admissions Open",
      subtitle: "Join Our Community",
      description: "Applications are now open for the academic year 2024-25"
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageSlides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [imageSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imageSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imageSlides.length) % imageSlides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const currentSlideData = imageSlides[currentSlide]

  return (
    <section className="relative overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-56 md:h-96 lg:h-screen">
        {/* Image Slides */}
        {imageSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>
        ))}

        {/* Content Overlay */}
        {/* <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
             
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                  {currentSlideData.title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-100 drop-shadow-lg">
                  {currentSlideData.subtitle}
                </h2>
                <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto drop-shadow-lg">
                  {currentSlideData.description}
                </p>
              </div>
              
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/admissions"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Apply Now
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-300 backdrop-blur-sm border border-white/20"
                >
                  Learn More
                </Link>
              </div>
              
             
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <Link
                  to="/notices"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white transition-colors duration-300"
                >
                  <div className="text-sm font-medium">Latest Notices</div>
                </Link>
                <Link
                  to="/gallery"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white transition-colors duration-300"
                >
                  <div className="text-sm font-medium">Photo Gallery</div>
                </Link>
                <Link
                  to="/academics"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white transition-colors duration-300"
                >
                  <div className="text-sm font-medium">Academics</div>
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white transition-colors duration-300"
                >
                  <div className="text-sm font-medium">Contact Us</div>
                </Link>
              </div>
            </div>
          </div>
        </div> */}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-300"
        >
          <FaChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-300"
        >
          <FaChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {imageSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
