import { FaFingerprint, FaClock, FaUserCheck, FaChartBar, FaExternalLinkAlt, FaTable, FaUsers, FaCalendarAlt } from 'react-icons/fa'

const BiometricAttendance = () => {
  const features = [
    {
      title: "Fingerprint Scanner",
      icon: <FaFingerprint className="h-8 w-8" />,
      description: "Advanced biometric fingerprint recognition system"
    },
    {
      title: "Time Tracking",
      icon: <FaClock className="h-8 w-8" />,
      description: "Accurate time tracking for attendance"
    },
    {
      title: "Student Verification",
      icon: <FaUserCheck className="h-8 w-8" />,
      description: "Secure student identification and verification"
    },
    {
      title: "Attendance Reports",
      icon: <FaChartBar className="h-8 w-8" />,
      description: "Detailed attendance reports and analytics"
    }
  ]

  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with violet tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/85 via-violet-800/80 to-violet-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-violet-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Biometric Attendance
          </h1>
          <p className="text-xl text-violet-100 max-w-3xl mx-auto drop-shadow-md">
            Modern biometric attendance system for accurate tracking
          </p>
        </div>
      </section>

      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Attendance Data</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access real-time attendance records and detailed analytics for all students
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-violet-50 to-violet-100 rounded-lg p-8 mb-8">
              <div className="text-center">
                <FaTable className="h-16 w-16 text-violet-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">September 2024 Attendance</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  View comprehensive attendance records for all students including daily attendance, 
                  percentage calculations, and detailed tracking for the current academic session.
                </p>
                <a 
                  href="https://docs.google.com/spreadsheets/d/1diFjNKOEjOrqVFataZO2fUaoNuP301pH1hdzKI8VZPs/edit?gid=0#gid=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View Attendance Records
                </a>
              </div>
            </div>

          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-violet-200">
                <div className="flex items-center">
                  <FaUsers className="h-8 w-8 text-violet-600 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Total Students</h4>
                    <p className="text-2xl font-bold text-violet-600">85+</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border border-violet-200">
                <div className="flex items-center">
                  <FaCalendarAlt className="h-8 w-8 text-violet-600 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Current Month</h4>
                    <p className="text-2xl font-bold text-violet-600">September 2024</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border border-violet-200">
                <div className="flex items-center">
                  <FaChartBar className="h-8 w-8 text-violet-600 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Attendance Tracking</h4>
                    <p className="text-2xl font-bold text-violet-600">Real-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Biometric System Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-violet-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-violet-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

        
          <div className="bg-gradient-to-r from-violet-50 to-violet-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Biometric System Excels</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-violet-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaFingerprint className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Accurate Tracking</h4>
                  <p className="text-gray-600">
                    Advanced biometric technology ensures precise attendance tracking with fingerprint recognition
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-violet-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaUserCheck className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Secure Identification</h4>
                  <p className="text-gray-600">
                    Prevents proxy attendance and ensures only registered students can mark their presence
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-violet-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaChartBar className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Detailed Analytics</h4>
                  <p className="text-gray-600">
                    Comprehensive reports and analytics help track student attendance patterns and performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default BiometricAttendance
