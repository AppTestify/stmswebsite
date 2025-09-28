import { FaChalkboardTeacher, FaUsers, FaDesktop, FaLightbulb } from 'react-icons/fa'

const Classroom = () => {
  const features = [
    {
      title: "Smart Boards",
      icon: <FaDesktop className="h-8 w-8" />,
      description: "Interactive smart boards for modern teaching"
    },
    {
      title: "Seating Capacity",
      icon: <FaUsers className="h-8 w-8" />,
      description: "Comfortable seating for 40+ students"
    },
    {
      title: "Teaching Aids",
      icon: <FaChalkboardTeacher className="h-8 w-8" />,
      description: "Traditional blackboards and whiteboards"
    },
    {
      title: "Lighting",
      icon: <FaLightbulb className="h-8 w-8" />,
      description: "Proper lighting for optimal learning environment"
    }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Classroom
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Modern classrooms equipped with latest technology for effective teaching and learning
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Classroom Images Gallery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Modern Classrooms</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience our state-of-the-art classrooms designed to provide the best learning 
                environment with modern technology and comfortable seating
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/clasroom/1-550x500.webp" 
                  alt="Modern Classroom Interior" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaChalkboardTeacher className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Classroom 1</h3>
                  <p className="text-blue-200 text-sm">Modern learning environment</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/clasroom/2-550x500.webp" 
                  alt="Classroom with Smart Technology" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaDesktop className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Classroom 2</h3>
                  <p className="text-blue-200 text-sm">Smart technology integration</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/clasroom/3-550x500.webp" 
                  alt="Spacious Classroom Layout" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaUsers className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Classroom 3</h3>
                  <p className="text-blue-200 text-sm">Spacious and comfortable seating</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/clasroom/4-550x500.webp" 
                  alt="Well-lit Classroom Environment" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaLightbulb className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Classroom 4</h3>
                  <p className="text-blue-200 text-sm">Optimal lighting and ventilation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Classroom Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Classroom Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Environment Benefits */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Classrooms Excel</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaChalkboardTeacher className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Interactive Learning</h4>
                  <p className="text-gray-600">
                    Modern teaching aids and interactive boards enhance student engagement and learning outcomes
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Comfortable Environment</h4>
                  <p className="text-gray-600">
                    Spacious classrooms with comfortable seating ensure optimal learning conditions for all students
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaDesktop className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Technology Integration</h4>
                  <p className="text-gray-600">
                    Smart boards and digital tools prepare students for modern educational practices and technology
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

export default Classroom
