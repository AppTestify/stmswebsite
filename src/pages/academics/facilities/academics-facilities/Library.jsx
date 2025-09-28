import { FaBook, FaBookOpen, FaSearch, FaUsers } from 'react-icons/fa'

const Library = () => {
  const libraryFeatures = [
    {
      title: "Book Collection",
      icon: <FaBook className="h-8 w-8" />,
      description: "Extensive collection of academic and reference books"
    },
    {
      title: "Reading Area",
      icon: <FaBookOpen className="h-8 w-8" />,
      description: "Quiet reading spaces for students"
    },
    {
      title: "Digital Resources",
      icon: <FaSearch className="h-8 w-8" />,
      description: "Online databases and digital library access"
    },
    {
      title: "Study Rooms",
      icon: <FaUsers className="h-8 w-8" />,
      description: "Group study rooms and individual study spaces"
    }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Library
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Comprehensive library with vast collection of books and digital resources
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Library Images Gallery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Library</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive library designed to support academic excellence 
                with extensive book collections, digital resources, and comfortable study spaces
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/library/IMG_2199-500x500.webp" 
                  alt="Library Interior and Book Collection" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaBook className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Library Interior</h3>
                  <p className="text-indigo-200 text-sm">Spacious library with extensive book collection</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/library/Library-500x500.webp" 
                  alt="Library Study Environment" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaBookOpen className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Study Environment</h3>
                  <p className="text-indigo-200 text-sm">Comfortable reading and study spaces</p>
                </div>
              </div>
            </div>
          </div>

          {/* Library Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Library Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {libraryFeatures.map((feature, index) => (
                <div key={index} className="bg-indigo-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-indigo-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Library Benefits */}
          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Library Excels</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaBook className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Hub</h4>
                  <p className="text-gray-600">
                    Extensive collection of academic books, reference materials, and digital resources for comprehensive learning
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaSearch className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Research Support</h4>
                  <p className="text-gray-600">
                    Advanced search facilities, online databases, and research tools to support academic projects and studies
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Study Environment</h4>
                  <p className="text-gray-600">
                    Quiet study spaces, group study rooms, and comfortable seating for individual and collaborative learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Library
