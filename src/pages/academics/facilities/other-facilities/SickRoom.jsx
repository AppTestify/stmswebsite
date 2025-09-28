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
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sick Room
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Medical facility providing basic healthcare and first aid services
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>
    </div>
  )
}

export default SickRoom
