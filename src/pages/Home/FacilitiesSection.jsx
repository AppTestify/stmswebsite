import { Link } from 'react-router-dom'
import { facilities } from '../../data/facilities'
import { FaArrowRight, FaWifi, FaBook, FaDesktop, FaFlask, FaGamepad, FaUtensils, FaBed } from 'react-icons/fa'

const FacilitiesSection = () => {
  const getIcon = (title) => {
    const iconMap = {
      'Central Library': FaBook,
      'Computer Laboratory': FaDesktop,
      'Science Laboratory': FaFlask,
      'Smart Classrooms': FaWifi,
      'Auditorium': FaGamepad,
      'Sports Complex': FaGamepad,
      'Hostel Facilities': FaBed,
      'Cafeteria': FaUtensils
    }
    return iconMap[title] || FaBook
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide state-of-the-art infrastructure and modern facilities to ensure 
            the best learning environment for our students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {facilities.slice(0, 8).map((facility) => {
            const IconComponent = getIcon(facility.title)
            return (
              <div
                key={facility.id}
                className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {facility.description}
                  </p>
                  
                  <div className="space-y-2">
                    {facility.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center">
          <Link
            to="/infrastructure"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View All Facilities
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FacilitiesSection
