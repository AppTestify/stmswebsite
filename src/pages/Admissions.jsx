import { useState } from 'react'
import { FaDownload, FaCheckCircle, FaCalendarAlt, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    qualification: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const admissionSteps = [
    {
      step: 1,
      title: "Application Form",
      description: "Fill out the online application form with required details",
      icon: FaUser
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit required documents and certificates",
      icon: FaDownload
    },
    {
      step: 3,
      title: "Entrance Test",
      description: "Appear for the entrance examination",
      icon: FaCheckCircle
    },
    {
      step: 4,
      title: "Interview",
      description: "Personal interview with faculty members",
      icon: FaUser
    },
    {
      step: 5,
      title: "Admission Confirmation",
      description: "Complete admission formalities and fee payment",
      icon: FaCheckCircle
    }
  ]

  const feeStructure = [
    {
      course: "Bachelor of Education (B.Ed)",
      duration: "2 Years",
      tuitionFee: "₹25,000",
      otherFees: "₹5,000",
      total: "₹30,000"
    },
    {
      course: "Diploma in Elementary Education (D.El.Ed)",
      duration: "2 Years",
      tuitionFee: "₹20,000",
      otherFees: "₹4,000",
      total: "₹24,000"
    }
  ]

  const eligibilityCriteria = [
    {
      course: "B.Ed",
      requirements: [
        "Graduation in any discipline with minimum 50% marks",
        "Relaxation of 5% for SC/ST candidates",
        "Age limit: 21-35 years",
        "Valid entrance test score"
      ]
    },
    {
      course: "D.El.Ed",
      requirements: [
        "10+2 with minimum 50% marks",
        "Relaxation of 5% for SC/ST candidates",
        "Age limit: 18-30 years",
        "Valid entrance test score"
      ]
    }
  ]

  return (
    <div className="">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with indigo tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-indigo-800/80 to-indigo-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Admissions 2024-25
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto drop-shadow-md">
            Join St. Teresa's College and begin your journey in teacher education
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple and transparent admission process for all programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {admissionSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={step.step} className="text-center">
                  <div className="relative">
                    <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    {index < admissionSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>
                    )}
                  </div>
                  <div className="bg-indigo-100 p-4 rounded-lg mb-4">
                    <IconComponent className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Check if you meet the requirements for our programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {criteria.course}
                </h3>
                <ul className="space-y-4">
                  {criteria.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fee Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent and affordable fee structure for all programs
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Course</th>
                  <th className="px-6 py-4 text-left">Duration</th>
                  <th className="px-6 py-4 text-left">Tuition Fee</th>
                  <th className="px-6 py-4 text-left">Other Fees</th>
                  <th className="px-6 py-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{fee.course}</td>
                    <td className="px-6 py-4 text-gray-600">{fee.duration}</td>
                    <td className="px-6 py-4 text-gray-600">{fee.tuitionFee}</td>
                    <td className="px-6 py-4 text-gray-600">{fee.otherFees}</td>
                    <td className="px-6 py-4 font-bold text-indigo-600">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              * Fees are subject to change. Please contact the college for the latest fee structure.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300">
              <FaDownload className="mr-2" />
              Download Fee Structure
            </button>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apply Now
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to start your application process
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Interested *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select a course</option>
                    <option value="B.Ed">Bachelor of Education (B.Ed)</option>
                    <option value="D.El.Ed">Diploma in Elementary Education (D.El.Ed)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Educational Qualification *
                </label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your highest qualification"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Any additional information or questions"
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Need Help with Admissions?
            </h2>
            <p className="text-xl text-indigo-100">
              Contact our admission office for any queries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaPhone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-indigo-100">+91-XXXX-XXXXXX</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-indigo-100">admissions@stptedbettiah.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-indigo-100">Bettiah, West Champaran, Bihar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions
