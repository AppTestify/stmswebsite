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
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Entry Gate
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Main entrance with security and visitor management systems
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </div>
  )
}

export default EntryGate
