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
      </section>
    </div>
  )
}

export default Classroom
