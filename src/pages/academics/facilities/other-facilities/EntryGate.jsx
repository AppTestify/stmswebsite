import { FaIdCard, FaShieldAlt, FaSignInAlt } from 'react-icons/fa'

const EntryGate = () => {
  const features = [
    {
      title: "Main Entrance",
      icon: <FaShieldAlt className="h-8 w-8" />,
      description: "Main entry point to the college campus"
    },
    {
      title: "ID Verification",
      icon: <FaIdCard className="h-8 w-8" />,
      description: "Identity verification for visitors and students"
    },
    {
      title: "Security Check",
      icon: <FaShieldAlt className="h-8 w-8" />,
      description: "Security screening and access control"
    },
    {
      title: "Visitor Management",
      icon: <FaSignInAlt className="h-8 w-8" />,
      description: "Visitor registration and management system"
    }
  ]

  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with amber tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-amber-800/80 to-amber-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Entry Gate
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Main entrance with security and visitor management systems
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Entry Gate Images Gallery */}
          <div className="mb-16">
            {/* <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Entry Gate</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our main entrance designed to provide secure access control, 
                visitor management, and a welcoming gateway to our college campus
              </p>
            </div> */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/entryGate/EntryGate.webp" 
                  alt="Main Entry Gate to College Campus" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaShieldAlt className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Main Entrance</h3>
                  <p className="text-amber-200 text-sm">Secure main entry point to the campus</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/entryGate/EntryGate2.webp" 
                  alt="Entry Gate Security and Access Control" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaIdCard className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Security Checkpoint</h3>
                  <p className="text-amber-200 text-sm">Identity verification and access control</p>
                </div>
              </div>
            </div>
          </div>

          {/* Entry Gate Features Section */}
          {/* <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Entry Gate Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-amber-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-amber-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Entry Gate Benefits */}
          {/* <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Entry Gate Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaShieldAlt className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Campus Security</h4>
                  <p className="text-gray-600">
                    Ensures campus safety through controlled access, visitor verification, and security screening
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaIdCard className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Access Control</h4>
                  <p className="text-gray-600">
                    Maintains proper identification and access control for students, staff, and visitors
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaSignInAlt className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Visitor Management</h4>
                  <p className="text-gray-600">
                    Provides organized visitor registration and management system for campus entry
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

export default EntryGate
