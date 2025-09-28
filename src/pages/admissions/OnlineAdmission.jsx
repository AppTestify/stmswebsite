import { FaUserPlus, FaFileAlt, FaUpload, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa'

const OnlineAdmission = () => {
  const admissionSteps = [
    {
      title: "Fill Application Form",
      icon: <FaFileAlt className="h-8 w-8" />,
      description: "Complete the online application form with accurate personal and academic details."
    },
    {
      title: "Upload Documents",
      icon: <FaUpload className="h-8 w-8" />,
      description: "Upload required documents including certificates, photographs, and identity proof."
    },
    {
      title: "Submit Application",
      icon: <FaCheckCircle className="h-8 w-8" />,
      description: "Review and submit your application for processing and verification."
    },
    {
      title: "Track Status",
      icon: <FaUserPlus className="h-8 w-8" />,
      description: "Monitor your application status and receive updates on admission progress."
    }
  ]

  const contactInfo = [
    {
      title: "Phone Support",
      icon: <FaPhone className="h-6 w-6" />,
      details: "+91-XXX-XXXX-XXX"
    },
    {
      title: "Email Support",
      icon: <FaEnvelope className="h-6 w-6" />,
      details: "admissions@college.edu"
    }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Online Admission
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Apply online for admission to our college with a simple and convenient process
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to complete your online admission application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {admissionSteps.map((step, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-green-600 mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-green-600">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{contact.title}</h4>
                    <p className="text-gray-600">{contact.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OnlineAdmission
