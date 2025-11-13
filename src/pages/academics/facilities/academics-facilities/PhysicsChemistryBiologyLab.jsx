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
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with orange tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-orange-800/80 to-orange-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Physics, Chemistry & Biology Lab
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto drop-shadow-md">
            Well-equipped laboratories for hands-on learning in science subjects
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PCB Lab Images Gallery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Science Laboratories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our well-equipped science laboratories designed for hands-on learning 
                in Physics, Chemistry, and Biology with modern equipment and safety standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/PCBLab/IMG_2243-500x500.webp" 
                  alt="Physics Laboratory Equipment" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaAtom className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Physics Lab</h3>
                  <p className="text-orange-200 text-sm">Advanced physics equipment and instruments</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/PCBLab/IMG_2244-500x500.webp" 
                  alt="Chemistry Laboratory Setup" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaFlask className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Chemistry Lab</h3>
                  <p className="text-orange-200 text-sm">Chemical apparatus and safety equipment</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/PCBLab/IMG_2245-500x500.webp" 
                  alt="Biology Laboratory Environment" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaMicroscope className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Biology Lab</h3>
                  <p className="text-orange-200 text-sm">Microscopes and biological specimens</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/PCBLab/IMG_2246-500x500.webp" 
                  alt="Science Laboratory Overview" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaDna className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Research Lab</h3>
                  <p className="text-orange-200 text-sm">Advanced research equipment and instruments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lab Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Laboratory Features</h2>
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

          {/* Lab Benefits */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Science Labs Excel</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaFlask className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Hands-On Learning</h4>
                  <p className="text-gray-600">
                    Practical experiments and demonstrations enhance theoretical knowledge with real-world applications
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaMicroscope className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Modern Equipment</h4>
                  <p className="text-gray-600">
                    State-of-the-art laboratory equipment and instruments for accurate scientific observations and experiments
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaAtom className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Safety Standards</h4>
                  <p className="text-gray-600">
                    Comprehensive safety protocols and equipment ensure secure learning environment for all students
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

export default PhysicsChemistryBiologyLab
