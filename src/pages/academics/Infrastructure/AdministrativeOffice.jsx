import { FaBuilding, FaUsers, FaFileAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const AdministrativeOffice = () => {
  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with green tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/80 to-green-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-green-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Administrative Office
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto drop-shadow-md">
            Central administrative hub managing all college operations
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FaBuilding className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Administrative Office</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our administrative office serves as the central hub for all college operations, 
              providing efficient support services to students, faculty, and staff
            </p>
          </div>
          
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/administrative/IMG_2206-500x500.webp" 
                alt="Administrative Office Interior" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <FaBuilding className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Main Office</h3>
                <p className="text-green-200 text-sm">Professional workspace for administrative staff</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/administrative/IMG_2242-500x500.webp" 
                alt="Administrative Office Reception Area" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <FaUsers className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Reception Area</h3>
                <p className="text-green-200 text-sm">Welcoming space for student and visitor assistance</p>
              </div>
            </div>
          </div>
          
          {/* Services Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg hover:shadow-md transition-shadow duration-300">
              <FaFileAlt className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">
                Academic records, certificates, and official documentation services
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg hover:shadow-md transition-shadow duration-300">
              <FaUsers className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Services</h3>
              <p className="text-gray-600 text-sm">
                Admissions, enrollment, and student support services
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg hover:shadow-md transition-shadow duration-300">
              <FaPhone className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication</h3>
              <p className="text-gray-600 text-sm">
                Phone and email support for inquiries and assistance
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg hover:shadow-md transition-shadow duration-300">
              <FaClock className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600 text-sm">
                Regular business hours with extended support during peak periods
              </p>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Administrative Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-3">
                  <FaEnvelope className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">admin@college.edu</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <FaPhone className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <FaClock className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Mon-Fri: 9:00 AM - 5:00 PM</span>
                </div>
              </div>
              <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                Our administrative office is committed to providing excellent service to all members 
                of the college community. We handle admissions, academic records, financial aid, 
                and general inquiries with professionalism and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdministrativeOffice
