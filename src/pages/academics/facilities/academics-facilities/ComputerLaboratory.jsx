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
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with blue tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Computer Laboratory
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
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

          {/* Computer Lab Images Gallery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Computer Laboratory</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our state-of-the-art computer laboratory equipped with modern technology 
                and comfortable learning environment for digital education
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/computerLab/33-550x500.webp" 
                  alt="Computer Lab Workstation Setup" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaDesktop className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Workstation Setup</h3>
                  <p className="text-blue-200 text-sm">Modern computer workstations for students</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/computerLab/34-550x500.webp" 
                  alt="Computer Lab Learning Environment" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaUsers className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Learning Environment</h3>
                  <p className="text-blue-200 text-sm">Comfortable and spacious learning space</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/computerLab/35-550x500.webp" 
                  alt="Computer Lab Technology Setup" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaCog className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Technology Setup</h3>
                  <p className="text-blue-200 text-sm">Advanced computer systems and software</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/computerLab/clab-550x500.webp" 
                  alt="Computer Lab Overview" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaWifi className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Lab Overview</h3>
                  <p className="text-blue-200 text-sm">Complete computer laboratory facility</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lab Benefits */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Computer Lab Excels</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaDesktop className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Modern Technology</h4>
                  <p className="text-gray-600">
                    Latest computer systems with updated software for cutting-edge digital learning experiences
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaWifi className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">High-Speed Internet</h4>
                  <p className="text-gray-600">
                    Reliable and fast internet connectivity for research, online learning, and digital projects
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Learning</h4>
                  <p className="text-gray-600">
                    Spacious layout designed for group work, peer learning, and collaborative digital projects
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

export default ComputerLaboratory
