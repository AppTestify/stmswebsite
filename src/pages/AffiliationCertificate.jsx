import { FaCertificate, FaUniversity, FaCheckCircle, FaDownload, FaEye } from 'react-icons/fa'

const AffiliationCertificate = () => {
  const certificateInfo = [
    {
      title: "University Affiliation",
      icon: <FaUniversity className="h-8 w-8" />,
      description: "Official affiliation with recognized university"
    },
    {
      title: "Accreditation Status",
      icon: <FaCheckCircle className="h-8 w-8" />,
      description: "Current accreditation status and validity period"
    },
    {
      title: "Recognition Details",
      icon: <FaCertificate className="h-8 w-8" />,
      description: "Government recognition and approval details"
    },
    {
      title: "Quality Assurance",
      icon: <FaEye className="h-8 w-8" />,
      description: "Quality standards and compliance certifications"
    }
  ]

  const certificates = [
    { 
      title: "University Affiliation Certificate", 
      type: "PDF", 
      size: "2.5 MB",
      date: "2024-01-15"
    },
    { 
      title: "Government Recognition Certificate", 
      type: "PDF", 
      size: "1.8 MB",
      date: "2024-01-10"
    },
    { 
      title: "Accreditation Certificate", 
      type: "PDF", 
      size: "3.2 MB",
      date: "2024-01-05"
    }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Affiliation Certificate
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Official certificates and documents proving our college's affiliation and recognition
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificate Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Important details about our college's affiliation and recognition status
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {certificateInfo.map((info, index) => (
              <div key={index} className="bg-emerald-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-emerald-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Available Certificates</h3>
            <p className="text-gray-600">Download official certificates and documents</p>
          </div>

          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-emerald-600">
                      <FaCertificate className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                      <p className="text-gray-600 text-sm">{cert.type} • {cert.size} • {cert.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-300">
                      <FaEye className="h-4 w-4" />
                      <span>View</span>
                    </button>
                    <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-300">
                      <FaDownload className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AffiliationCertificate
