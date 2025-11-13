import { FaMusic, FaMicrophone, FaHeadphones, FaGuitar } from 'react-icons/fa'

const MusicRoom = () => {
  const musicFeatures = [
    {
      title: "Musical Instruments",
      icon: <FaGuitar className="h-8 w-8" />,
      description: "Various musical instruments for learning and practice"
    },
    {
      title: "Recording Studio",
      icon: <FaMicrophone className="h-8 w-8" />,
      description: "Professional recording equipment and facilities"
    },
    {
      title: "Audio Equipment",
      icon: <FaHeadphones className="h-8 w-8" />,
      description: "High-quality sound systems and audio equipment"
    },
    {
      title: "Music Education",
      icon: <FaMusic className="h-8 w-8" />,
      description: "Structured music education and training programs"
    }
  ]

  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with teal tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-teal-800/80 to-teal-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-teal-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Music Room
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto drop-shadow-md">
            Dedicated space for music education and cultural activities
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Music Room Images Gallery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Music Room</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our dedicated music room designed to inspire musical creativity, 
                education, and cultural activities with professional equipment and instruments
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/musicRoom/IMG_2253-500x500.webp" 
                  alt="Music Room Interior and Instruments" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaMusic className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Music Studio</h3>
                  <p className="text-teal-200 text-sm">Professional music room with instruments</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/musicRoom/IMG_2250-500x500.webp" 
                  alt="Music Room Learning Environment" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaGuitar className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Learning Space</h3>
                  <p className="text-teal-200 text-sm">Comfortable environment for music education</p>
                </div>
              </div>
            </div>
          </div>

          {/* Music Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Music Room Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {musicFeatures.map((feature, index) => (
                <div key={index} className="bg-teal-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-teal-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Music Benefits */}
          <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Music Room Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaMusic className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Musical Development</h4>
                  <p className="text-gray-600">
                    Nurtures musical talent, creativity, and appreciation through hands-on learning and practice
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaMicrophone className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional Training</h4>
                  <p className="text-gray-600">
                    Provides professional-grade equipment and facilities for serious music education and recording
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaGuitar className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Cultural Enrichment</h4>
                  <p className="text-gray-600">
                    Promotes cultural activities, performances, and appreciation of diverse musical traditions
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

export default MusicRoom
