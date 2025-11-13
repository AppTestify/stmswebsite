import { FaGraduationCap, FaAward, FaUsers, FaBook, FaChalkboardTeacher, FaTrophy, FaCertificate, FaUserGraduate } from 'react-icons/fa'

const TeamsQualification = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      position: "Principal",
      qualification: "Ph.D. in Education, M.Ed., B.Ed.",
      experience: "15+ Years",
      specialization: "Educational Leadership",
      achievements: ["Best Principal Award 2023", "Published 25+ Research Papers"],
      image: "/images/faculty/principal.jpg"
    },
    {
      id: 2,
      name: "Prof. Rajesh Kumar",
      position: "Vice Principal",
      qualification: "M.Ed., B.Ed., M.A. (English)",
      experience: "12+ Years",
      specialization: "English Language Teaching",
      achievements: ["State Level Teacher Award", "Curriculum Development Expert"],
      image: "/images/faculty/vice-principal.jpg"
    },
    {
      id: 3,
      name: "Dr. Sunita Singh",
      position: "Head of Department - Education",
      qualification: "Ph.D. in Psychology, M.Ed., B.Ed.",
      experience: "18+ Years",
      specialization: "Educational Psychology",
      achievements: ["National Recognition for Research", "15+ Publications"],
      image: "/images/faculty/hod-education.jpg"
    },
    {
      id: 4,
      name: "Prof. Anjali Verma",
      position: "Senior Lecturer",
      qualification: "M.Ed., B.Ed., M.A. (Mathematics)",
      experience: "10+ Years",
      specialization: "Mathematics Education",
      achievements: ["Innovative Teaching Methods", "Student Success Mentor"],
      image: "/images/faculty/senior-lecturer.jpg"
    }
  ]

  const departments = [
    {
      name: "Education Department",
      head: "Dr. Sunita Singh",
      faculty: 8,
      programs: ["B.Ed", "D.El.Ed", "Certificate Courses"],
      achievements: ["100% Pass Rate", "State Recognition", "Research Excellence"]
    },
    {
      name: "English Department",
      head: "Prof. Rajesh Kumar",
      faculty: 6,
      programs: ["Language Teaching", "Communication Skills", "Literature"],
      achievements: ["Language Lab Excellence", "Student Competitions", "Publication Support"]
    },
    {
      name: "Mathematics Department",
      head: "Prof. Anjali Verma",
      faculty: 5,
      programs: ["Mathematics Education", "Problem Solving", "Analytical Skills"],
      achievements: ["Innovative Teaching", "Student Achievements", "Competition Winners"]
    },
    {
      name: "Science Department",
      head: "Dr. Meera Patel",
      faculty: 7,
      programs: ["Science Education", "Laboratory Skills", "Research Methods"],
      achievements: ["Well-Equipped Labs", "Research Projects", "Practical Excellence"]
    }
  ]

  const qualifications = [
    {
      category: "Academic Qualifications",
      requirements: [
        "Minimum M.Ed. degree for teaching positions",
        "Ph.D. preferred for senior positions",
        "B.Ed. or D.El.Ed. for specialized courses",
        "Relevant subject specialization"
      ]
    },
    {
      category: "Professional Experience",
      requirements: [
        "Minimum 3 years teaching experience",
        "Experience in teacher education preferred",
        "Research and publication background",
        "Administrative experience for leadership roles"
      ]
    },
    {
      category: "Skills & Competencies",
      requirements: [
        "Excellent communication skills",
        "Modern teaching methodologies",
        "Technology integration in education",
        "Student mentoring and counseling"
      ]
    },
    {
      category: "Continuous Development",
      requirements: [
        "Regular participation in workshops",
        "Research and publication activities",
        "Professional development programs",
        "Industry collaboration and networking"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with purple/indigo tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/85 via-indigo-700/80 to-purple-600/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Our Teams & Qualifications
            </h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto drop-shadow-md">
              Meet our dedicated faculty and learn about the qualifications that make us exceptional
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Distinguished Faculty
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced educators committed to excellence in teacher education
            </p>
          </div>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {facultyMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                      <FaUserGraduate className="h-10 w-10 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-purple-600 font-semibold mb-2">
                        {member.position}
                      </p>
                      <p className="text-sm text-gray-600">
                        {member.experience} Experience
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <FaGraduationCap className="h-4 w-4 mr-2 text-purple-600" />
                        Qualifications
                      </h4>
                      <p className="text-sm text-gray-600">{member.qualification}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <FaBook className="h-4 w-4 mr-2 text-purple-600" />
                        Specialization
                      </h4>
                      <p className="text-sm text-gray-600">{member.specialization}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <FaTrophy className="h-4 w-4 mr-2 text-purple-600" />
                        Key Achievements
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {member.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Departments Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Departments
            </h3>
            <p className="text-lg text-gray-600">
              Specialized departments working together for comprehensive education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <FaChalkboardTeacher className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{dept.name}</h4>
                    <p className="text-sm text-gray-600">Head: {dept.head}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Faculty Members:</span>
                    <span className="font-semibold">{dept.faculty}</span>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Programs:</p>
                    <div className="flex flex-wrap gap-2">
                      {dept.programs.map((program, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Achievements:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {dept.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Qualifications Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Faculty Qualifications & Requirements
            </h3>
            <p className="text-lg text-gray-600">
              Our commitment to excellence through qualified and experienced faculty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map((qual, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <FaCertificate className="h-5 w-5 mr-2 text-purple-600" />
                  {qual.category}
                </h4>
                <ul className="space-y-2">
                  {qual.requirements.map((req, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Statistics Section */}
      {/* <section className="py-16 bg-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Faculty Excellence in Numbers
            </h3>
            <p className="text-lg text-purple-100">
              Our commitment to quality education through qualified faculty
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaUsers className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-purple-100 text-sm">Faculty Members</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaGraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-purple-100 text-sm">Ph.D. Holders</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-100 text-sm">Years Combined Experience</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaBook className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-purple-100 text-sm">Research Publications</div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default TeamsQualification
