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
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920)'
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
            Online Admission
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto drop-shadow-md">
            Apply online for admission to our college with a simple and convenient process
          </p>
        </div>
      </section>

      <section className="py-16 bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul>
          <li>Diploma in Elementary Education (Bihar DELED) is 2 years course.</li>
          <li>Admission process begins with entrance exam, after the result qualified students appear for councilling, and then college is allotted by BSEB Patna .</li>
        </ul>
      </section>
    </div>
  )
}

export default OnlineAdmission
