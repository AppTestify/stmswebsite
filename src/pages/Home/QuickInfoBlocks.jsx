import { Link } from 'react-router-dom'
import { 
  FaBullhorn, 
  FaGraduationCap, 
  FaUsers, 
  FaLaptop, 
  FaFileAlt, 
  FaPaperPlane, 
  FaBook, 
  FaCalendarAlt,
  FaCommentDots
} from 'react-icons/fa'

const QuickInfoBlocks = () => {
  const quickInfoItems = [
    {
      id: 1,
      title: "Notice Board",
      icon: FaBullhorn,
      path: "/notices",
      color: "bg-blue-500 hover:bg-blue-600",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Prospectus",
      icon: FaGraduationCap,
      path: "/prospectus",
      color: "bg-orange-500 hover:bg-orange-600",
      iconColor: "text-orange-600"
    },
    {
      id: 3,
      title: "Fee Structure",
      icon: FaUsers,
      path: "/academics/fee-structure",
      color: "bg-pink-500 hover:bg-pink-600",
      iconColor: "text-pink-600"
    },
    {
      id: 4,
      title: "Awards",
      icon: FaLaptop,
      path: "/activities/awards",
      color: "bg-green-500 hover:bg-green-600",
      iconColor: "text-green-600"
    },
    {
      id: 5,
      title: "Activities",
      icon: FaFileAlt,
      path: "/activities",
      color: "bg-purple-500 hover:bg-purple-600",
      iconColor: "text-purple-600"
    },
    {
      id: 6,
      title: "Online Admission",
      icon: FaPaperPlane,
      path: "/admissions/online-admission",
      color: "bg-yellow-500 hover:bg-yellow-600",
      iconColor: "text-yellow-600"
    },
    {
      id: 7,
      title: "Academic Program",
      icon: FaBook,
      path: "/academics",
      color: "bg-indigo-500 hover:bg-indigo-600",
      iconColor: "text-indigo-600"
    },
    {
      id: 8,
      title: "Academic Calendar",
      icon: FaCalendarAlt,
      path: "/academic-calendar",
      color: "bg-teal-500 hover:bg-teal-600",
      iconColor: "text-teal-600"
    },
    {
      id: 9,
      title: "Student Grievance Form",
      icon: FaCommentDots,
      path: "/contact",
      color: "bg-red-500 hover:bg-red-600",
      iconColor: "text-red-600"
    }
  ]

  // Extract the grievance item for easier access
  const grievanceItem = quickInfoItems[8]
  const GrievanceIcon = grievanceItem.icon

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid - 8 items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 mb-6">
          {quickInfoItems.slice(0, 8).map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="group"
            >
              <div className={`${item.color}  p-2 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center  relative overflow-hidden`}>
                {/* Animated background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon with enhanced styling */}
                <div className="relative z-10 bg-white/25 backdrop-blur-md rounded-full p-2 md:p-5 mb-2 group-hover:bg-white/35 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <item.icon className="md:h-4 md:w-4 h-4 w-4 text-white drop-shadow-lg" />
                </div>
                
                {/* Title with better typography */}
                <h3 className="relative md:text-base text-sm z-10 p-3 mb-3 font-bold leading-tight drop-shadow-md">
                  {item.title}
                </h3>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Student Grievance Form - Enhanced styling */}
        {/* <div className="max-w-lg mx-auto">
          <Link
            to={grievanceItem.path}
            className="group block"
          >
            <div className={`${grievanceItem.color} rounded-xl p-6 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-5 relative overflow-hidden`}>
             
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
          
              <div className="relative z-10 bg-white/25 backdrop-blur-md rounded-full p-4 group-hover:bg-white/35 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <GrievanceIcon className="h-8 w-8 text-white drop-shadow-lg" />
              </div>
              
          
              <h3 className="relative z-10 text-base font-bold drop-shadow-md">
                {grievanceItem.title}
              </h3>
            
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
        </div> */}
      </div>
    </section>
  )
}

export default QuickInfoBlocks

