import { FaCalendarAlt, FaTrophy, FaUsers, FaGraduationCap, FaBuilding, FaStar, FaAward, FaHeart, FaQuoteLeft } from 'react-icons/fa'

const History = () => {
  const milestones = [
    {
      year: "1995",
      title: "Foundation",
      description: "St. Teresa's Primary Teachers Education College was established with a vision to provide quality teacher education in Bihar.",
      icon: FaBuilding,
      color: "from-blue-500 to-blue-600"
    },
    {
      year: "2000",
      title: "First Graduation",
      description: "Our first batch of B.Ed students graduated, marking the beginning of our journey in producing quality educators.",
      icon: FaGraduationCap,
      color: "from-green-500 to-green-600"
    },
    {
      year: "2005",
      title: "Recognition & Accreditation",
      description: "Received official recognition from the Bihar State Government and accreditation from the National Council for Teacher Education (NCTE).",
      icon: FaAward,
      color: "from-purple-500 to-purple-600"
    },
    {
      year: "2010",
      title: "Expansion of Programs",
      description: "Introduced D.El.Ed program and expanded our curriculum to include modern teaching methodologies and technology integration.",
      icon: FaStar,
      color: "from-orange-500 to-orange-600"
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Embraced technology in education with the introduction of smart classrooms, digital library, and online learning platforms.",
      icon: FaTrophy,
      color: "from-teal-500 to-teal-600"
    },
    {
      year: "2020",
      title: "Excellence in Education",
      description: "Achieved 100% pass rate in B.Ed examinations and received state-level recognition for educational excellence.",
      icon: FaHeart,
      color: "from-pink-500 to-pink-600"
    }
  ]

  const achievements = [
    {
      category: "Academic Excellence",
      items: [
        "100% pass rate in B.Ed examinations for 5 consecutive years",
        "State topper in B.Ed examinations 2019, 2021, 2023",
        "Recognition as 'Best Teacher Education College' by Bihar Government",
        "Accreditation with 'A' grade by NCTE"
      ]
    },
    {
      category: "Infrastructure Development",
      items: [
        "Modern smart classrooms with digital teaching aids",
        "Well-equipped science and computer laboratories",
        "Comprehensive library with 25,000+ books and digital resources",
        "Sports complex and recreational facilities"
      ]
    },
    {
      category: "Faculty Excellence",
      items: [
        "25+ qualified faculty members with Ph.D. and M.Ed. degrees",
        "Regular faculty development programs and workshops",
        "Research publications in national and international journals",
        "Awards and recognition for teaching excellence"
      ]
    },
    {
      category: "Student Success",
      items: [
        "5000+ successful graduates working in schools across India",
        "Alumni holding leadership positions in education sector",
        "Student placement assistance and career guidance",
        "Scholarship programs for meritorious students"
      ]
    }
  ]

  const founders = [
    {
      name: "Rev. Fr. Michael Joseph",
      role: "Founder & First Principal",
      contribution: "Established the college with a vision to provide quality teacher education in Bihar",
      period: "1995-2005"
    },
    {
      name: "Dr. Sister Mary Teresa",
      role: "Educational Director",
      contribution: "Played a pivotal role in curriculum development and establishing academic standards",
      period: "1995-2010"
    },
    {
      name: "Prof. Rajesh Kumar",
      role: "Academic Advisor",
      contribution: "Contributed to the development of modern teaching methodologies and faculty training",
      period: "2000-2015"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with indigo/purple tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/85 via-purple-700/80 to-indigo-600/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Our History
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto drop-shadow-md">
              A journey of excellence in teacher education spanning over two decades
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <img src="/public/images/historyofcollege.webp" alt="History" className="w-full object-cover" />
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Quote Section */}
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 mb-6 italic">
                Time plays a role in almost every decision
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg mb-8">
                <FaQuoteLeft className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  "Education is the most powerful weapon which you can use to change the world"
                </p>
                <p className="text-gray-600">– Nelson Mandela</p>
              </div>
            </div>

            {/* Education Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 leading-relaxed mb-6">
                As Nelson Mandela says, "Education is the most Powerful weapon which you can use to change the world". Education is the key to Eliminating Gender inequality to reducing poverty, to creating sustainable planet, to preventing needless death and illness, and to fostering peace.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Education given as Knowledge of the world around us and changes it into something better. It develops in us a perspective of looking at life. It help us build opinions and have points of view on things in life. People debate over the subject of whether education is the only thing that gives knowledge.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                St. Teresa's Primary Teachers Education College, Bettiah, West Champaran Bihar, is a Catholic Minority College managed by the members of International catholic Women Religious Known as Sister of Mercy of the Holy Cross. The College Offered Primary Teachers Training Certificate course is Primary's Teachers Education. The course is of two years duration and It is conducted in regular Classes. The Academic session of this course is July to May.
              </p>
            </div>

            {/* Who We Are & What We Do */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <FaUsers className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">WHO WE ARE</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  St. Teresa's Primary Teachers Education College, Bettiah, West Champaran Bihar, is a Catholic Minority College managed by the members of International catholic Women Religious Known as Sister of Mercy of the Holy Cross.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <FaGraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">WHAT WE DO</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The College Offered Primary Teachers Training Certificate course is Primary's Teachers Education. The course is of two years duration and It is conducted in regular Classes. The Academic session of this course is July to May.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones that shaped our institution into what it is today
            </p>
          </div>
          
          <div className="relative">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
               
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                      <div className="flex items-center mb-4">
                        <div className={`bg-gradient-to-r ${milestone.color} rounded-full p-3 mr-4`}>
                          <milestone.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                          <p className="text-indigo-600 font-semibold">{milestone.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
          
                  <div className="hidden md:flex w-1/2 justify-center">
                    <div className={`bg-gradient-to-r ${milestone.color} rounded-full p-4 shadow-lg`}>
                      <FaCalendarAlt className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                 
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Achievements Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h3>
            <p className="text-lg text-gray-600">
              Recognition and accomplishments that define our excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaTrophy className="h-5 w-5 mr-2 text-indigo-600" />
                  {category.category}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Founders Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Founders & Visionaries
            </h3>
            <p className="text-lg text-gray-600">
              The remarkable individuals who laid the foundation of our institution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaUsers className="h-10 w-10 text-indigo-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{founder.name}</h4>
                <p className="text-indigo-600 font-semibold mb-2">{founder.role}</p>
                <p className="text-sm text-gray-500 mb-4">{founder.period}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {founder.contribution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Statistics Section */}
      {/* <section className="py-16 bg-indigo-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Legacy in Numbers
            </h3>
            <p className="text-lg text-indigo-100">
              The impact we've made over the years
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaGraduationCap className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">5000+</div>
              <div className="text-indigo-100 text-sm">Graduates</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaCalendarAlt className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-indigo-100 text-sm">Years of Excellence</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaUsers className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-indigo-100 text-sm">Faculty Members</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-indigo-100 text-sm">Awards & Recognition</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Be Part of Our Continuing Story
          </h3>
          <p className="text-lg text-indigo-100 mb-8">
            Join an institution with a rich history and a bright future in teacher education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Apply Now
            </a>
            <a
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default History
