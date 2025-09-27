import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const sliderData = [
    {
      id: 1,
      leftPanel: {
        background: "from-yellow-400 to-orange-500",
        image: "/images/schoolLogo.webp",
        quote: "Education is the foundation upon which we build our future. Let your mind be full of determination for the greater good and indulge in any work that benefits the community."
      },
      centerImage: "/images/slider/slider11.webp",
      rightPanel: {
        background: "from-orange-500 to-white",
        image: "/images/principalsMessage.webp",
        quote: "Together with mother's milk, we nurture love for education and excellence. Let your mind be full of determination for the greater good."
      }
    },
    {
      id: 2,
      leftPanel: {
        background: "from-yellow-400 to-orange-500",
        image: "/images/aboutschool.webp",
        quote: "Excellence in education through dedication and commitment to nurturing young minds."
      },
      centerImage: "/images/slider/slider12.webp",
      rightPanel: {
        background: "from-orange-500 to-white",
        image: "/images/historyofcollege.webp",
        quote: "Building a legacy of academic excellence and character development."
      }
    },
    {
      id: 3,
      leftPanel: {
        background: "from-yellow-400 to-orange-500",
        image: "/images/pro1.webp",
        quote: "Modern facilities and innovative teaching methods for comprehensive learning."
      },
      centerImage: "/images/slider/slider13.webp",
      rightPanel: {
        background: "from-orange-500 to-white",
        image: "/images/pro2.webp",
        quote: "Preparing future educators with knowledge, skills, and values."
      }
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [sliderData.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length)
  }

  const currentData = sliderData[currentSlide]

  return (
    <section className="relative overflow-hidden bg-gray-100">
      {/* Full Width Image Slider */}
      <div className="relative h-screen">
        {/* Image Slides */}
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.centerImage})` }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-colors duration-300"
        >
          <FaChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-colors duration-300"
        >
          <FaChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {sliderData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
