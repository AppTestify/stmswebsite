import { Link } from 'react-router-dom'
import { FaArrowRight, FaYoutube, FaInfoCircle } from 'react-icons/fa'

const PWCNewsSection = () => {
  const sections = [
    {
      id: 1,
      title: "PWC NEWS",
      description: "Stay updated with the latest news and announcements",
      image: "/images/feature1.webp",
      path: "/notices",
      icon: FaInfoCircle,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Our YouTube Channel PWC E-content",
      description: "Access educational content and resources",
      image: "/images/feature2.webp",
      path: "/gallary/videos",
      icon: FaYoutube,
      gradient: "from-red-500 to-red-600"
    },
    {
      id: 3,
      title: "ABOUT PWC",
      description: "Learn more about our college and its history",
      image: "/images/feature3.webp",
      path: "/about",
      icon: FaInfoCircle,
      gradient: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.path}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                    <section.icon className="h-16 w-16 text-gray-400" />
                  </div>
                  
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-bold text-lg mb-2">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  {/* College Logo Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <img
                      src="/images/schoolLogo.webp"
                      alt="College Logo"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {section.description}
                  </p>
                  <div className={`inline-flex items-center space-x-2 text-white bg-gradient-to-r ${section.gradient} px-4 py-2 rounded-lg font-medium text-sm group-hover:shadow-md transition-shadow`}>
                    <span>View More</span>
                    <FaArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PWCNewsSection

