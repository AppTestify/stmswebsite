import { Link } from 'react-router-dom'
import { FaArrowRight, FaGraduationCap, FaUsers, FaAward, FaLightbulb } from 'react-icons/fa'

const AboutSection = () => {
  return (
    <section className="py-4 px-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-3xl font-serif font-bold text-gray-900 mb-3">
            About St. Teresa's Primary Teachers Education College
          </h2>
          <div className="w-20 h-0.5 bg-blue-600 mx-auto mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-base text-blue-900">
            <div>
              <p className=" leading-relaxed mb-4">
                St. Teresa's Primary Teachers Education College, Bettiah, West Champaran Bihar, is a Catholic Minority College managed by the members of International Catholic Women Religious Known as Sister of Mercy of the Holy Cross.
              </p>
              <p className=" leading-relaxed mb-4">
                Established with a vision to empower women through quality teacher education, our college has been a beacon of excellence in the field of primary teacher training. We are committed to providing holistic education that combines academic rigor with values-based learning.
              </p>
              <p className="leading-relaxed">
                Our institution focuses on developing competent, compassionate, and committed teachers who can make a significant impact in the field of education. We believe in nurturing not just academic excellence but also character building and social responsibility.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <FaGraduationCap className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">5000+</div>
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
            
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Learn More About Us
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          
          {/* Principal Image Section */}
          <div className="lg:col-span-1">
            <div className="bg-white  p-3 ">
              <img
                src="/images/principalsMessage.webp"
                alt="SR. PRAFULLA PANNA, Principal"
                className="w-full h-96 object-contain rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            <div className="mt-2 text-center">
              <h3 className="text-base md:text-lg font-serif text-gray-900 mb-2 font-semibold">
                SR. PRAFULLA PANNA
              </h3>
              <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Principal</p>
              <div className="w-16 h-px bg-gray-300 mx-auto mb-3"></div>
              <p className="text-xs text-gray-500 leading-relaxed">
                St. Teresa's Primary Teachers Education College
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Bettiah, West Champaran, Bihar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
