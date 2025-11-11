import { FaGraduationCap, FaBook, FaUsers, FaCheckCircle } from 'react-icons/fa'

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Quality Education",
      icon: FaGraduationCap,
      image: "/images/feature1.webp",
      points: [
        "Quality education and accredited programs",
        "Experienced and qualified faculty",
        "Strong emphasis on research and innovation"
      ],
      color: "blue"
    },
    {
      id: 2,
      title: "Modern Infrastructure",
      icon: FaBook,
      image: "/images/feature2.webp",
      points: [
        "Modern classrooms and well-equipped labs",
        "Library resources and online databases",
        "Sports facilities and recreational areas"
      ],
      color: "indigo"
    },
    {
      id: 3,
      title: "Empowering Educators",
      icon: FaUsers,
      image: "/images/feature3.webp",
      points: [
        "Cultural events and festivals",
        "Sports competitions and events",
        "Annual college fests and celebrations"
      ],
      color: "purple"
    }
  ]

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "text-blue-600",
      iconBg: "bg-blue-100",
      dot: "bg-blue-600"
    },
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      icon: "text-indigo-600",
      iconBg: "bg-indigo-100",
      dot: "bg-indigo-600"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "text-purple-600",
      iconBg: "bg-purple-100",
      dot: "bg-purple-600"
    }
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3 tracking-wide">
            Why Choose Our College
          </h2>
          <div className="w-20 h-0.5 bg-gray-400 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the excellence that sets us apart in teacher education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const colors = colorClasses[feature.color]
            return (
              <div 
                key={feature.id} 
                className={`bg-white rounded-lg border ${colors.border} hover:shadow-lg transition-all duration-300 overflow-hidden group`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center absolute inset-0">
                    <div className="text-center text-gray-400">
                      <feature.icon className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Image coming soon</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${colors.iconBg} rounded-lg mb-4`}>
                    <feature.icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-serif">
                    {feature.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {feature.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className={`h-5 w-5 ${colors.icon} flex-shrink-0 mt-0.5 mr-3`} />
                        <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
