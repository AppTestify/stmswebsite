import { FaMicrophone, FaUsers } from 'react-icons/fa'

const Auditorium = () => {
  return (
    <div className="">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Auditorium
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            State-of-the-art auditorium equipped with modern facilities
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FaMicrophone className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Auditorium Facilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art auditorium provides the perfect venue for conferences, seminars, 
              cultural events, and academic presentations with modern audio-visual equipment
            </p>
          </div>
          
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/audotoriam/A1-500x500.webp" 
                alt="Auditorium Interior View" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <FaMicrophone className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Main Auditorium</h3>
                <p className="text-purple-200 text-sm">Spacious seating with modern acoustics</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/audotoriam/A2-500x500.webp" 
                alt="Auditorium Stage and Seating" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <FaUsers className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Stage Area</h3>
                <p className="text-purple-200 text-sm">Professional stage with advanced lighting</p>
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <FaMicrophone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Audio System</h3>
              <p className="text-gray-600">
                High-quality sound system with wireless microphones and professional audio mixing
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <FaUsers className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Seating Capacity</h3>
              <p className="text-gray-600">
                Comfortable seating for large audiences with excellent visibility from all angles
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">AV</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visual Equipment</h3>
              <p className="text-gray-600">
                Modern projection systems and LED displays for presentations and multimedia content
              </p>
            </div>
          </div>
          
          {/* Additional Info Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Auditorium Features</h3>
              <p className="text-gray-600 max-w-4xl mx-auto">
                Our auditorium is equipped with cutting-edge technology and designed to accommodate 
                various events including academic conferences, cultural programs, guest lectures, 
                and student presentations. The facility features climate control, accessibility 
                features, and professional-grade equipment to ensure every event is a success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Auditorium
