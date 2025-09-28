import { FaCalendarAlt, FaUsers, FaTrophy, FaGraduationCap } from 'react-icons/fa'

const Activities2024_2025 = () => {
  const activities = [
    {
      title: "Academic Year 2024-2025",
      icon: <FaCalendarAlt className="h-8 w-8" />,
      description: "Complete academic calendar and important dates"
    },
    {
      title: "Student Activities",
      icon: <FaUsers className="h-8 w-8" />,
      description: "Various student engagement programs and events"
    },
    {
      title: "Sports Events",
      icon: <FaTrophy className="h-8 w-8" />,
      description: "Annual sports meet and competitions"
    },
    {
      title: "Cultural Programs",
      icon: <FaGraduationCap className="h-8 w-8" />,
      description: "Cultural festivals and celebrations"
    }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            College Activities - Academic Year 2024-2025
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Comprehensive schedule of activities and events for the academic year
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <img src="/images/collegeActivities2024-25.webp" alt="Activities 2024-2025" />
      </section>
    </div>
  )
}

export default Activities2024_2025
