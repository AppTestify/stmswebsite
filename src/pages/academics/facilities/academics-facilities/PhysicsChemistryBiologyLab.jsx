import { FaFlask, FaMicroscope, FaAtom, FaDna } from 'react-icons/fa'

const PhysicsChemistryBiologyLab = () => {
  const labFeatures = [
    {
      title: "Physics Lab",
      icon: <FaAtom className="h-8 w-8" />,
      description: "Equipment for physics experiments and demonstrations"
    },
    {
      title: "Chemistry Lab",
      icon: <FaFlask className="h-8 w-8" />,
      description: "Chemical apparatus and safety equipment"
    },
    {
      title: "Biology Lab",
      icon: <FaMicroscope className="h-8 w-8" />,
      description: "Microscopes and biological specimens"
    },
    {
      title: "Research Tools",
      icon: <FaDna className="h-8 w-8" />,
      description: "Advanced research equipment and instruments"
    }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Physics, Chemistry & Biology Lab
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Well-equipped laboratories for hands-on learning in science subjects
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {labFeatures.map((feature, index) => (
              <div key={index} className="bg-orange-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-orange-600 mb-4 flex justify-center">
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

export default PhysicsChemistryBiologyLab
