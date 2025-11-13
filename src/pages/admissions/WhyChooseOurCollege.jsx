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
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with blue tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Why Choose Our College
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
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
