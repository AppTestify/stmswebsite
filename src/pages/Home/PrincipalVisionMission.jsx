import { Link } from 'react-router-dom'
import { FaEye, FaBullseye, FaHeart, FaUsers, FaGraduationCap, FaArrowRight } from 'react-icons/fa'

const PrincipalVisionMission = () => {
  const coreValues = [
    "Faith in God",
    "Respect for Moral Uprightness",
    "Love and Compassion towards all",
    "Social Responsibility",

  ]

  return (
    <section className="py-9 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Principal's Message */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <img
                  src="/images/principalsMessage.webp"
                  alt="Principal"
                  className="w-full h-auto rounded-lg mb-4"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <h3 className="text-lg font-bold text-white mb-1">
                  Dr. Sister M. Rashmi A.C.
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Principal, St. Teresa's Primary Teachers Education College (Autonomous)
                </p>
                <Link
                  to="/principal-message"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                >
                  <span>View Profile</span>
                  <FaArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Vision, Mission, Core Values */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vision */}
            <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 border-l-4 border-blue-500 rounded-lg px-6 py-2">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <FaEye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our vision is rooted in the teachings of Jesus Christ and focused on academic excellence, 
                social responsibility, and women's empowerment. We strive to create an environment where 
                every student can achieve their full potential and contribute meaningfully to society.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 border-l-4 border-green-500 rounded-lg px-6 py-2">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 rounded-full p-3 mr-4">
                  <FaBullseye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Mission Statement</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to provide holistic development of women through quality education, 
                fostering values of integrity, compassion, and excellence. We are committed to 
                preparing our students to be effective educators and responsible citizens who 
                contribute to building a better society.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 border-l-4 border-purple-500 rounded-lg px-6 py-2">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 rounded-full p-3 mr-4">
                  <FaHeart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Core Values</h3>
              </div>
              <ul className="space-y-2">
                {coreValues.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <FaGraduationCap className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrincipalVisionMission

