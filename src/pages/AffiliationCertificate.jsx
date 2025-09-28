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
        <img src="/images/affilicationCertificate.webp" alt="Affiliation Certificate" className="w-full h-auto" />
      </section>
    </div>
  )
}

export default AffiliationCertificate
