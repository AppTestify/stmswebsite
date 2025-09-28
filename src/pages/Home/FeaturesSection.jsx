import { FaGraduationCap, FaBook, FaUsers } from 'react-icons/fa'

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Quality Education",
      icon: <FaGraduationCap className="h-8 w-8" />,
      image: "/images/feature1.webp",
      points: [
        "Quality education and accredited programs.",
        "Experienced and qualified faculty.",
        "Strong emphasis on research and innovation."
      ]
    },
    {
      id: 2,
      title: "Infrastructure",
      icon: <FaBook className="h-8 w-8" />,
      image: "/images/feature2.webp",
      points: [
        "Modern classrooms and well-equipped labs.",
        "Library resources and online databases.",
        "Sports facilities and recreational areas."
      ]
    },
    {
      id: 3,
      title: "Empowering Educators",
      icon: <FaUsers className="h-8 w-8" />,
      image: "/images/feature3.webp",
      points: [
        "Cultural events and festivals.",
        "Sports competitions and events.",
        "Annual college fests and celebrations."
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our College
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the excellence that sets us apart in teacher education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Banner */}
              <div className="bg-red-600 text-white py-4 px-6 flex items-center">
                <div className="mr-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback content if image fails to load */}
                <div className="hidden w-full h-full bg-gray-200 items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">{feature.icon}</div>
                    <p className="text-sm">Image coming soon</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <ul className="space-y-3">
                  {feature.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
