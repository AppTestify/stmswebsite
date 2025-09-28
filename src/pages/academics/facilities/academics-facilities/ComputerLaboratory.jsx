import { FaDesktop, FaWifi, FaUsers, FaCog } from 'react-icons/fa'

const ComputerLaboratory = () => {
  const labFeatures = [
    {
      title: "Computer Systems",
      value: "50+",
      icon: <FaDesktop className="h-6 w-6" />,
      description: "Modern computers with latest software"
    },
    {
      title: "Internet Connectivity",
      value: "High Speed",
      icon: <FaWifi className="h-6 w-6" />,
      description: "Reliable internet connection for research"
    },
    {
      title: "Seating Capacity",
      value: "50 Students",
      icon: <FaUsers className="h-6 w-6" />,
      description: "Comfortable seating for all students"
    },
    {
      title: "Software",
      value: "Latest",
      icon: <FaCog className="h-6 w-6" />,
      description: "Educational and productivity software"
    }
  ]

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Computer Laboratory
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Modern computer lab equipped with latest technology for digital learning and research
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {labFeatures.map((feature, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.value}</h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Lab Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <FaDesktop className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Computer Lab Image Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComputerLaboratory
