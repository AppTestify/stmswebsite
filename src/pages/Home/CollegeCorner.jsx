import { Link } from 'react-router-dom'
import { 
  FaBook, 
  FaBlog, 
  FaCalendarAlt, 
  FaGraduationCap, 
  FaUsers, 
  FaChalkboardTeacher 
} from 'react-icons/fa'

const CollegeCorner = () => {
  const cornerItems = [
    {
      id: 1,
      title: "IRINS",
      icon: FaBook,
      path: "/academics",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "BLOG",
      icon: FaBlog,
      path: "/about",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "EVENTS & NOTICES",
      icon: FaCalendarAlt,
      path: "/events",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "SCHOLARSHIPS",
      icon: FaGraduationCap,
      path: "/admissions",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      title: "ALUMNI CORNER",
      icon: FaUsers,
      path: "/about",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      id: 6,
      title: "SEMINARS & WORKSHOPS",
      icon: FaChalkboardTeacher,
      path: "/seminars",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            College Corner
          </h2>
          <div className="w-20 h-0.5 bg-blue-600 mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cornerItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="group"
            >
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-full flex flex-col items-center justify-center text-center">
                {/* Icon with gradient background */}
                <div className={`bg-gradient-to-br ${item.gradient} rounded-lg p-4 mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollegeCorner

