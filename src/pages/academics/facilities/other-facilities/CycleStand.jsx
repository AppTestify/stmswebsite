import { FaBicycle, FaLock, FaShieldAlt, FaParking } from 'react-icons/fa'

const CycleStand = () => {
  const features = [
    {
      title: "Secure Parking",
      icon: <FaLock className="h-8 w-8" />,
      description: "Safe and secure parking for bicycles"
    },
    {
      title: "Covered Area",
      icon: <FaShieldAlt className="h-8 w-8" />,
      description: "Protected from weather conditions"
    },
    {
      title: "Bicycle Racks",
      icon: <FaBicycle className="h-8 w-8" />,
      description: "Dedicated bicycle racks and stands"
    },
    {
      title: "Parking Space",
      icon: <FaParking className="h-8 w-8" />,
      description: "Adequate space for all student bicycles"
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
        {/* Dark overlay with cyan tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/85 via-cyan-800/80 to-cyan-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Cycle Stand
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Secure and convenient bicycle parking facility for students
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cycle Stand Images Gallery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cycle Stand</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our secure and convenient bicycle parking facility designed to provide 
                safe storage and protection for student bicycles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/cycle stand/IMG_2171-500x500.webp" 
                  alt="Cycle Stand Parking Area" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaBicycle className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Parking Area</h3>
                  <p className="text-cyan-200 text-sm">Secure bicycle parking facility</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/cycle stand/IMG_2213-500x500.webp" 
                  alt="Cycle Stand Racks and Storage" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaLock className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Bicycle Racks</h3>
                  <p className="text-cyan-200 text-sm">Dedicated racks for secure storage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cycle Stand Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Cycle Stand Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-cyan-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-cyan-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cycle Stand Benefits */}
          <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Cycle Stand Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaShieldAlt className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Security & Safety</h4>
                  <p className="text-gray-600">
                    Provides secure parking with protection from weather and theft, ensuring student bicycles are safe
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaBicycle className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Convenience</h4>
                  <p className="text-gray-600">
                    Offers convenient and organized parking space for students who cycle to college
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaParking className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Environmental Support</h4>
                  <p className="text-gray-600">
                    Encourages eco-friendly transportation by providing dedicated facilities for bicycle users
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

export default CycleStand
