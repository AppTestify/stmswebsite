import { FaGraduationCap, FaBook, FaUsers, FaClock, FaCertificate, FaCheckCircle } from 'react-icons/fa'

const Academics = () => {
  const programs = [
    {
      id: 1,
      title: "Bachelor of Education (B.Ed)",
      duration: "2 Years",
      eligibility: "Graduation in any discipline with 50% marks",
      intake: "50 Students",
      description: "A comprehensive program designed to prepare students for teaching at the secondary and higher secondary levels.",
      features: [
        "Modern Teaching Methods",
        "Practical Training",
        "Internship Program",
        "Research Project"
      ]
    },
    {
      id: 2,
      title: "Diploma in Elementary Education (D.El.Ed)",
      duration: "2 Years",
      eligibility: "10+2 with 50% marks",
      intake: "50 Students",
      description: "Specialized program for elementary education focusing on primary and upper primary teaching.",
      features: [
        "Child Psychology",
        "Elementary Teaching Methods",
        "Classroom Management",
        "Community Engagement"
      ]
    }
  ]

  const subjects = [
    {
      category: "Core Subjects",
      items: [
        "Educational Psychology",
        "Philosophy of Education",
        "Sociology of Education",
        "Educational Technology",
        "Curriculum Development",
        "Educational Assessment"
      ]
    },
    {
      category: "Methodology Subjects",
      items: [
        "Teaching of Mathematics",
        "Teaching of Science",
        "Teaching of Social Studies",
        "Teaching of English",
        "Teaching of Hindi",
        "Teaching of Art & Craft"
      ]
    },
    {
      category: "Practical Components",
      items: [
        "Micro Teaching",
        "Simulated Teaching",
        "School Internship",
        "Community Work",
        "Action Research",
        "Workshop Activities"
      ]
    }
  ]

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Academic Programs
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Comprehensive teacher education programs designed to prepare competent educators
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of teacher education programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <FaGraduationCap className="h-8 w-8 mr-3" />
                    <h3 className="text-2xl font-bold">{program.title}</h3>
                  </div>
                  <p className="text-blue-100">{program.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <FaClock className="h-5 w-5 text-blue-600 mr-2" />
                      <div>
                        <div className="font-semibold text-gray-900">Duration</div>
                        <div className="text-gray-600">{program.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="h-5 w-5 text-blue-600 mr-2" />
                      <div>
                        <div className="font-semibold text-gray-900">Intake</div>
                        <div className="text-gray-600">{program.intake}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Eligibility</h4>
                    <p className="text-gray-600">{program.eligibility}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <FaCheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Curriculum Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our curriculum is designed to provide comprehensive knowledge and practical skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subjects.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaBook className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <FaCheckCircle className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Assessment & Evaluation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Continuous assessment and comprehensive evaluation system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaBook className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Theory Papers</h3>
              <p className="text-gray-600">Written examinations covering all subjects</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Practical Work</h3>
              <p className="text-gray-600">Hands-on training and practical assignments</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaClock className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Internship</h3>
              <p className="text-gray-600">School-based teaching practice and training</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaCertificate className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certification</h3>
              <p className="text-gray-600">Recognition by NCTE and state university</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Faculty
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced and qualified faculty members dedicated to student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`/images/faculty/faculty-${index}.jpg`}
                  alt={`Faculty ${index}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Dr. Faculty Member {index}
                  </h3>
                  <p className="text-blue-600 mb-2">Professor</p>
                  <p className="text-gray-600 text-sm">
                    Specialization in Educational Psychology and Teaching Methods
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Academics
