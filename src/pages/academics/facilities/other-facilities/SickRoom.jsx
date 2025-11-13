import { FaBed, FaUserMd, FaPills, FaHeartbeat } from 'react-icons/fa'

const SickRoom = () => {
  const features = [
    {
      title: "Medical Beds",
      icon: <FaBed className="h-8 w-8" />,
      description: "Comfortable beds for rest and recovery"
    },
    {
      title: "Medical Staff",
      icon: <FaUserMd className="h-8 w-8" />,
      description: "Qualified medical personnel available"
    },
    {
      title: "First Aid",
      icon: <FaPills className="h-8 w-8" />,
      description: "First aid supplies and basic medications"
    },
    {
      title: "Health Monitoring",
      icon: <FaHeartbeat className="h-8 w-8" />,
      description: "Basic health monitoring equipment"
    }
  ]

  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with emerald tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-emerald-800/80 to-emerald-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Sick Room
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Medical facility providing basic healthcare and first aid services
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sick Room Image Gallery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sick Room</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our well-equipped medical facility designed to provide immediate 
                healthcare support, first aid services, and comfortable rest for students
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/sickRoom/IMG_2208.webp" 
                  alt="Sick Room Medical Facility" 
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaUserMd className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white font-semibold text-xl">Medical Facility</h3>
                  <p className="text-emerald-200 text-sm">Well-equipped sick room for student healthcare</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sick Room Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Sick Room Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-emerald-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-emerald-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sick Room Benefits */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Sick Room Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaBed className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Student Welfare</h4>
                  <p className="text-gray-600">
                    Ensures immediate medical attention and comfortable rest for students who feel unwell
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaUserMd className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional Care</h4>
                  <p className="text-gray-600">
                    Qualified medical staff provide professional healthcare services and emergency first aid
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaHeartbeat className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Health Monitoring</h4>
                  <p className="text-gray-600">
                    Basic health monitoring equipment and first aid supplies for immediate medical assistance
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

export default SickRoom
