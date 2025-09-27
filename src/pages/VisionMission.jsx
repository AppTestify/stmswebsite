import { FaEye, FaBullseye, FaLightbulb, FaUsers, FaGraduationCap, FaHeart, FaStar, FaRocket } from 'react-icons/fa'

const VisionMission = () => {
  const values = [
    {
      icon: FaGraduationCap,
      title: "Excellence in Education",
      description: "We strive for the highest standards in teacher education, ensuring our students receive world-class training and knowledge."
    },
    {
      icon: FaHeart,
      title: "Compassion & Care",
      description: "We foster a nurturing environment where every student feels valued, supported, and encouraged to grow."
    },
    {
      icon: FaUsers,
      title: "Inclusive Community",
      description: "We believe in creating an inclusive environment that celebrates diversity and promotes equal opportunities for all."
    },
    {
      icon: FaLightbulb,
      title: "Innovation & Creativity",
      description: "We encourage innovative thinking and creative approaches to teaching and learning in the modern educational landscape."
    }
  ]

  const objectives = [
    "To provide comprehensive teacher education that meets national and international standards",
    "To develop critical thinking and problem-solving skills in our students",
    "To foster a deep understanding of child psychology and learning processes",
    "To promote innovative teaching methodologies and modern educational practices",
    "To instill strong ethical values and professional responsibility in future educators",
    "To prepare teachers who can adapt to diverse learning environments and needs"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Vision & Mission
            </h1>
            <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
              Our guiding principles and commitment to educational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <FaEye className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 mb-8">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic text-center font-medium">
                  "To be a premier institution of teacher education that shapes compassionate, 
                  innovative, and globally competent educators who will transform the future 
                  of education in India and beyond."
                </p>
              </div>
              
              <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  Our vision encompasses creating a learning environment where future teachers 
                  develop not only academic excellence but also the emotional intelligence and 
                  social awareness necessary to nurture the next generation of learners.
                </p>
                <p>
                  We envision our graduates as change-makers who will revolutionize education 
                  through innovative teaching methods, inclusive practices, and a deep commitment 
                  to student success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <FaBullseye className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic text-center font-medium">
                  "To provide comprehensive, innovative, and inclusive teacher education that 
                  empowers students to become effective educators, critical thinkers, and 
                  compassionate leaders in the field of education."
                </p>
              </div>
              
              <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  Our mission is to create a transformative learning experience that combines 
                  theoretical knowledge with practical application, ensuring our graduates are 
                  well-prepared to meet the challenges of modern education.
                </p>
                <p>
                  We are committed to fostering an environment of academic excellence, 
                  research innovation, and community engagement that prepares teachers 
                  to make a meaningful impact in the lives of their students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600">
              The fundamental principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                    <value.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Objectives
            </h3>
            <p className="text-lg text-gray-600">
              Specific goals that drive our educational mission forward
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-green-600 rounded-full p-1 flex-shrink-0 mt-1">
                    <FaStar className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {objective}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <FaRocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join Our Mission
          </h3>
          <p className="text-lg text-green-100 mb-8">
            Be part of an institution that's shaping the future of education through 
            vision, mission, and unwavering commitment to excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Journey
            </a>
            <a
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VisionMission
