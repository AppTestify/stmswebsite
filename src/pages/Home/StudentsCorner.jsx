import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaUsers, FaChalkboardTeacher, FaBuilding, FaQuoteLeft } from 'react-icons/fa'

const StudentsCorner = () => {
  const studentCornerItems = [
    {
      id: 1,
      title: 'ACADEMIC CALENDAR',
      icon: FaCalendarAlt,
      path: '/academic-calendar',
      description: 'View important dates and academic schedules',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'EVENTS CORNER',
      icon: FaUsers,
      path: '/events',
      description: 'Stay updated with college events and activities',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'SEMINAR & WORKSHOP',
      icon: FaChalkboardTeacher,
      path: '/academics/infrastructure/gallery-room',
      description: 'Attend educational seminars and workshops',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'FACILITIES',
      icon: FaBuilding,
      path: '/facilities',
      description: 'Explore our campus facilities and resources',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'WHAT PEOPLE SAY ABOUT US',
      icon: FaQuoteLeft,
      path: '/testimonials',
      description: 'Read testimonials from our community',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section className="py-12 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-3 tracking-wide">
            Student's Corner
          </h2>
          <div className="w-20 h-0.5 bg-gray-400 mx-auto mb-2"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Access important resources and information for students
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {studentCornerItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="group"
            >
              <div className="bg-white border border-gray-200  hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Icon Section */}
                <div className={`bg-gradient-to-br ${item.color} p-6  flex items-center justify-center`}>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <h3 className="text-sm font-semibold text-gray-900 text-center mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudentsCorner
