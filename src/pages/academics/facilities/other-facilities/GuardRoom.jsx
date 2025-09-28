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
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
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
