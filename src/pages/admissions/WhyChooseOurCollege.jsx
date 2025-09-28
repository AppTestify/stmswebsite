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

      <section className="py-16 bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <img src="/images/whyChooseUs.webp" alt="Why Choose Our College" />
      </section>
    </div>
  )
}

export default WhyChooseOurCollege
