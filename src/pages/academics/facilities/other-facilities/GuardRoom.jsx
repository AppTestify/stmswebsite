import { FaShieldAlt, FaEye, FaPhone, FaUserShield } from 'react-icons/fa'

const GuardRoom = () => {
  const features = [
    {
      title: "Security Personnel",
      icon: <FaUserShield className="h-8 w-8" />,
      description: "Trained security guards for campus safety"
    },
    {
      title: "Surveillance",
      icon: <FaEye className="h-8 w-8" />,
      description: "CCTV monitoring and security systems"
    },
    {
      title: "Emergency Response",
      icon: <FaPhone className="h-8 w-8" />,
      description: "Quick response to emergencies and incidents"
    },
    {
      title: "Access Control",
      icon: <FaShieldAlt className="h-8 w-8" />,
      description: "Controlled access to college premises"
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
        {/* Dark overlay with red tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/85 via-red-800/80 to-red-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Guard Room
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Security control center ensuring safety and security of the campus
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-red-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default GuardRoom
