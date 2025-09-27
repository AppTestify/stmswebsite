import { facilities } from '../data/facilities'
import { FaWifi, FaBook, FaDesktop, FaFlask, FaGamepad, FaUtensils, FaBed, FaShieldAlt } from 'react-icons/fa'

const Infrastructure = () => {
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Infrastructure & Facilities
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            State-of-the-art facilities designed to provide the best learning environment
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern infrastructure and world-class facilities for comprehensive learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => {
              const IconComponent = getIcon(facility.title)
              return (
                <div
                  key={facility.id}
                  className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{facility.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {facility.description}
                    </p>
                    
                    <div className="space-y-2">
                      {facility.features.map((feature, index) => (
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
        </div>
      </section>

      {/* Technology Infrastructure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern technology integration for enhanced learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaWifi className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wi-Fi Campus</h3>
              <p className="text-gray-600">High-speed internet connectivity throughout the campus</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-green-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaDesktop className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Boards</h3>
              <p className="text-gray-600">Interactive whiteboards in all classrooms</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-purple-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security System</h3>
              <p className="text-gray-600">CCTV surveillance and access control systems</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-yellow-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaBook className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Library</h3>
              <p className="text-gray-600">Online resources and e-books access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Tour */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Virtual Campus Tour
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our beautiful campus and modern facilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Experience Our Campus
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our campus is designed to provide a conducive learning environment with 
                modern facilities, green spaces, and state-of-the-art infrastructure. 
                Take a virtual tour to explore our beautiful campus.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaBook className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Central Library</h4>
                    <p className="text-gray-600">50,000+ books and digital resources</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaDesktop className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Computer Labs</h4>
                    <p className="text-gray-600">Modern computer facilities with latest software</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <FaGamepad className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sports Complex</h4>
                    <p className="text-gray-600">Comprehensive sports and recreation facilities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/campus-aerial.jpg"
                alt="Campus Aerial View"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Safety & Security
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ensuring a safe and secure environment for all students and staff
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-red-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Security</h3>
              <p className="text-gray-600">
                Round-the-clock security personnel and surveillance systems to ensure campus safety.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaWifi className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CCTV Surveillance</h3>
              <p className="text-gray-600">
                Comprehensive CCTV coverage across the entire campus for enhanced security.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaUtensils className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Health & Hygiene</h3>
              <p className="text-gray-600">
                Regular health check-ups and hygiene maintenance for student well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Infrastructure
