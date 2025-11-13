import { FaEye, FaBullseye, FaLightbulb, FaUsers, FaGraduationCap, FaHeart, FaCheckCircle } from 'react-icons/fa'

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
    <div className="min-h-screen bg-white">
      {/* Page Title */}
      <section 
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with purple tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-purple-800/80 to-purple-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
              Vision & Mission
            </h1>
            <div className="w-20 h-0.5 bg-purple-400 mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto drop-shadow-md">
              Our guiding principles and commitment to excellence in education
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaEye className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 text-center">
              Our Vision
            </h2>
            <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 border-l-4 border-blue-600 pl-8 pr-6 py-6 mb-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed italic">
                "To be a premier institution of teacher education that shapes compassionate, 
                innovative, and globally competent educators who will transform the future 
                of education in India and beyond."
              </p>
            </div>
            
            <div className="text-base text-gray-700 leading-relaxed space-y-4">
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
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <FaBullseye className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 text-center">
              Our Mission
            </h2>
            <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-l-4 border-green-600 pl-8 pr-6 py-6 mb-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed italic">
                "To provide comprehensive, innovative, and inclusive teacher education that 
                empowers students to become effective educators, critical thinkers, and 
                compassionate leaders in the field of education."
              </p>
            </div>
            
            <div className="text-base text-gray-700 leading-relaxed space-y-4">
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
      </section>

      {/* Core Values Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-3 tracking-wide">
              Our Core Values
            </h2>
            <div className="w-20 h-0.5 bg-gray-400 mx-auto mb-4"></div>
            <p className="text-base text-gray-600">
              The fundamental principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-3 tracking-wide">
              Our Objectives
            </h2>
            <div className="w-20 h-0.5 bg-gray-400 mx-auto mb-4"></div>
            <p className="text-base text-gray-600">
              Specific goals that drive our educational mission forward
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FaCheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {objective}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VisionMission
