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
              <p className="leading-relaxed mb-4">
                Established in 1926 and operated by the Sisters of Mercy of the Holy Cross, St. Teresa's Primary Teachers Training College is an international minority educational institution. Its guiding motto is "Truth and Service."
              </p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Milestones:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-semibold text-blue-600 mr-2">1926:</span>
                    <span>The college was founded.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-blue-600 mr-2">1927:</span>
                    <span>Classes began within St. Teresa's Girls' School.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-blue-600 mr-2">1972:</span>
                    <span>The institution was renamed St. Teresa's Primary Teachers' Education College.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-blue-600 mr-2">1997:</span>
                    <span>It received recognition from the National Council for Minority Education. In the same year, the eligibility for its 2-year training program was raised from Matriculation (10th) to Higher Secondary (12th grade).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-blue-600 mr-2">1997-1998:</span>
                    <span>The college gained affiliation with the Bihar School Examination Board and recognition from the ERC (Eastern Regional Council) of NCTE.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* <div className="grid grid-cols-2 gap-6">
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
            </div> */}
            
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
