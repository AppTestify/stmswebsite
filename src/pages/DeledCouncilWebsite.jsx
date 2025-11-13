import { FaExternalLinkAlt, FaGraduationCap, FaBook, FaUsers, FaCertificate } from 'react-icons/fa'

const DeledCouncilWebsite = () => {
  const councilInfo = [
    {
      title: "Official Website",
      icon: <FaExternalLinkAlt className="h-8 w-8" />,
      description: "Access the official DELED Council website for latest updates"
    },
    {
      title: "Course Information",
      icon: <FaBook className="h-8 w-8" />,
      description: "Detailed information about DELED courses and curriculum"
    },
    {
      title: "Student Portal",
      icon: <FaUsers className="h-8 w-8" />,
      description: "Student login and access to academic resources"
    },
    {
      title: "Certification",
      icon: <FaCertificate className="h-8 w-8" />,
      description: "Information about DELED certification and recognition"
    }
  ]

  const quickLinks = [
    { title: "DELED Council Homepage", url: "https://deledcouncil.org" },
    { title: "Student Login Portal", url: "https://student.deledcouncil.org" },
    { title: "Course Registration", url: "https://registration.deledcouncil.org" },
    { title: "Examination Schedule", url: "https://exam.deledcouncil.org" }
  ]

  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with blue tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            DELED Council Website
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
            Access the official DELED Council website for course information and student resources
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Council Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Important information about DELED Council and its services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {councilInfo.map((info, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h3>
            <p className="text-gray-600">Direct access to important DELED Council resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickLinks.map((link, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{link.title}</h4>
                    <p className="text-gray-600 text-sm">{link.url}</p>
                  </div>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="h-4 w-4" />
                    <span>Visit</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DeledCouncilWebsite
