import { FaGraduationCap, FaUsers, FaAward, FaBook, FaChalkboardTeacher, FaHeart } from 'react-icons/fa'

const WhyChooseOurCollege = () => {
  const reasons = [
    {
      title: "Academic Excellence",
      icon: <FaGraduationCap className="h-8 w-8" />,
      description: "Comprehensive curriculum designed to provide quality education and prepare students for successful careers."
    },
    {
      title: "Experienced Faculty",
      icon: <FaChalkboardTeacher className="h-8 w-8" />,
      description: "Highly qualified and experienced teachers dedicated to student success and academic growth."
    },
    {
      title: "Modern Infrastructure",
      icon: <FaBook className="h-8 w-8" />,
      description: "State-of-the-art facilities including well-equipped classrooms, laboratories, and learning resources."
    },
    {
      title: "Student Support",
      icon: <FaUsers className="h-8 w-8" />,
      description: "Comprehensive support system including counseling, career guidance, and academic assistance."
    },
    {
      title: "Recognition & Accreditation",
      icon: <FaAward className="h-8 w-8" />,
      description: "Recognized institution with proper accreditation ensuring quality education standards."
    },
    {
      title: "Holistic Development",
      icon: <FaHeart className="h-8 w-8" />,
      description: "Focus on overall personality development through extracurricular activities and character building."
    }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose Our College
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the unique advantages and opportunities that make our college the perfect choice for your educational journey
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyChooseOurCollege
