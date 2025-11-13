import { FaRunning, FaFutbol, FaBasketballBall, FaVolleyballBall } from 'react-icons/fa'

const Playground = () => {
  const sports = [
    {
      name: "Football",
      icon: <FaFutbol className="h-8 w-8" />,
      description: "Full-size football field for matches and practice"
    },
    {
      name: "Basketball",
      icon: <FaBasketballBall className="h-8 w-8" />,
      description: "Basketball court with proper markings"
    },
    {
      name: "Volleyball",
      icon: <FaVolleyballBall className="h-8 w-8" />,
      description: "Volleyball court for recreational activities"
    },
    {
      name: "Running Track",
      icon: <FaRunning className="h-8 w-8" />,
      description: "Track for running and athletics"
    }
  ]

  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with green tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/80 to-green-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-green-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Playground
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto drop-shadow-md">
            Spacious playground with modern sports facilities for physical education and recreation
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Playground Images Gallery */}
          <div className="mb-16">
            {/* <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Playground Facilities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our modern playground with state-of-the-art sports facilities designed for 
                physical education, recreation, and competitive sports
              </p>
            </div> */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/playground/IMG_2174-550x500.webp" 
                  alt="Playground Sports Facilities" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaRunning className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Sports Ground</h3>
                  <p className="text-green-200 text-sm">Spacious area for various sports activities</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/playground/IMG_2177-550x500.webp" 
                  alt="Playground Equipment and Facilities" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaBasketballBall className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Sports Equipment</h3>
                  <p className="text-green-200 text-sm">Modern equipment for various sports</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/playground/IMG_2217-550x500.webp" 
                  alt="Playground Activities and Recreation" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaVolleyballBall className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Recreation Area</h3>
                  <p className="text-green-200 text-sm">Perfect space for outdoor activities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sports Facilities Section */}
          {/* <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Available Sports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sports.map((sport, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-green-600 mb-4 flex justify-center">
                    {sport.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{sport.name}</h3>
                  <p className="text-gray-600 text-sm">{sport.description}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Benefits Section */}
          {/* <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Our Playground</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaRunning className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Physical Development</h4>
                  <p className="text-gray-600">
                    Promotes physical fitness, coordination, and overall health among students
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaFutbol className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Team Building</h4>
                  <p className="text-gray-600">
                    Encourages teamwork, leadership skills, and healthy competition
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaBasketballBall className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Recreation</h4>
                  <p className="text-gray-600">
                    Provides a safe and enjoyable environment for leisure activities
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default Playground
