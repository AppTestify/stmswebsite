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
      <section className="bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cycle Stand
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Secure and convenient bicycle parking facility for students
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>
    </div>
  )
}

export default CycleStand
