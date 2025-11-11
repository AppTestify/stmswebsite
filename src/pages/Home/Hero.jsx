import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight, FaGraduationCap, FaBook, FaUsers, FaCheckCircle, FaBullhorn } from 'react-icons/fa'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const navigate = useNavigate()

  const announcements = [
    "Admissions 2024-25: Applications are now open for Primary Teachers Education Course. Apply online at our website.",
    "Annual Sports Meet 2024: Registration for various sports events is now open. Contact the sports department for details.",
    "Library Hours Extended: The college library will remain open till 8 PM on weekdays for student convenience.",
    "Faculty Development Program: Workshop on modern teaching methodologies scheduled for next month.",
    "Campus Placement Drive: Leading schools will be visiting our campus for teacher recruitment. Prepare your portfolios.",
    "Cultural Festival 2024: Annual cultural festival 'Vidya Utsav' will be held next month. Registration forms available at the office.",
    "COLLEGE ACTIVITIES FOR THE ACADEMIC YEAR 2025 – 2026: Important academic activities and events scheduled for the upcoming academic year.",
    "SITTING TIMETABLE OF Second Unit Test 2025: Detailed timetable for the second unit test has been published. Check the notices section for complete schedule."
  ]

  const sliderData = [
    {
      id: 1,
      image: "/images/slider/slider11.webp",
    },
    {
      id: 2,
      image: "/images/slider/slider12.webp",
    },
    {
      id: 3,
      image: "/images/slider/slider13.webp",
    }
  ]

  const features = [
    {
      id: 1,
      title: "Quality Education",
      icon: FaGraduationCap,
      image: "/images/feature1.webp",
      points: [
        "Quality education and accredited programs.",
        "Experienced and qualified faculty.",
        "Strong emphasis on research and innovation."
      ]
    },
    {
      id: 2,
      title: "Infrastructure",
      icon: FaBook,
      image: "/images/feature2.webp",
      points: [
        "Modern classrooms and well-equipped labs.",
        "Library resources and online databases.",
        "Sports facilities and recreational areas."
      ]
    },
    {
      id: 3,
      title: "Empowering Educators",
      icon: FaUsers,
      image: "/images/feature3.webp",
      points: [
        "Cultural events and festivals.",
        "Sports competitions and events.",
        "Annual college fests and celebrations."
      ]
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [sliderData.length])

  // Auto-advance news ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [announcements.length])

  const handleNewsClick = () => {
    navigate('/notices')
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length)
  }

  return (
    <section className="relative overflow-hidden bg-gray-100">
      {/* Hero Carousel Section */}
      <div className="relative h-[50vh] bg-blue-900">
        {/* Decorative Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Image Slides */}
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-blue-900/40"></div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows - White */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-300 border border-white/30"
        >
          <FaChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-300 border border-white/30"
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

      {/* News Ticker Section */}
      <div 
        className="w-full bg-blue-700 text-white py-2.5 overflow-hidden cursor-pointer hover:bg-blue-800 transition-colors duration-300"
        onClick={handleNewsClick}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            {/* Megaphone Icon */}
            <div className="flex-shrink-0 mr-3">
              <FaBullhorn className="h-4 w-4 text-orange-300" />
            </div>
            
            {/* Scrolling Text */}
            <div className="flex-1 overflow-hidden">
              <div className="animate-scroll whitespace-nowrap">
                <span className="text-sm font-medium">
                  {announcements[currentNewsIndex]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Panels Section */}
      <div className="bg-white">
        {/* Red Header Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.id} className="bg-red-600 text-white py-4 px-6 flex items-center justify-center">
              <feature.icon className="h-6 w-6 mr-3" />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>

        {/* Feature Content with Images and Bullet Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white border-r border-gray-200 last:border-r-0">
              {/* Feature Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex'
                    }
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center absolute inset-0 bg-gray-100">
                  <div className="text-center text-gray-400">
                    <feature.icon className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Image coming soon</p>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="p-6">
                <ul className="space-y-3">
                  {feature.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
