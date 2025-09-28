import { FaFingerprint, FaClock, FaUserCheck, FaChartBar } from 'react-icons/fa'

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
      <section className="bg-gradient-to-br from-violet-900 via-violet-800 to-violet-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Biometric Attendance
          </h1>
          <p className="text-xl text-violet-100 max-w-3xl mx-auto">
            Modern biometric attendance system for accurate tracking
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>
    </div>
  )
}

export default BiometricAttendance
