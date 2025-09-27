import { Link } from 'react-router-dom'
import { FaArrowRight, FaGraduationCap, FaUsers, FaAward, FaLightbulb } from 'react-icons/fa'

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">
                About Us
              </h2> */}
              <p className="text-lg text-gray-600 leading-relaxed">
              St. Teresa’s Primary Teachers Education College, Bettiah, West Champaran Bihar, is a Catholic Minority College managed by the members of International catholic Women Religious Known as Sister of Mercy of the Holy Cross
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <FaGraduationCap className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Graduates</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaUsers className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-gray-600">Expert Faculty</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaAward className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaLightbulb className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                To provide quality teacher education that empowers students to become effective, 
                innovative, and compassionate educators who can contribute meaningfully to 
                the development of society.
              </p>
            </div>
            
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Learn More About Us
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="public/images/aboutschool.webp"
                alt="St. Teresa's College Building"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-lg"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaGraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Quality Education</div>
                  <div className="text-gray-600 text-sm">NCTE Approved</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaUsers className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Expert Faculty</div>
                  <div className="text-gray-600 text-sm">Highly Qualified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
