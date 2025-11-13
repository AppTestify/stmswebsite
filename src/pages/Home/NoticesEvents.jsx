import { Link } from 'react-router-dom'
import { FaChevronRight, FaBell, FaCalendarAlt, FaNewspaper, FaBullhorn } from 'react-icons/fa'

const NoticesEvents = () => {
  const notices = [
    {
      id: 1,
      title: "R.A./B.Sc./B.Com./Vocational/PG/MCA Semester-II GENERAL ASSEMBLY Notice",
      date: "05-11-2025"
    },
    {
      id: 2,
      title: "End Semester Examination Form Semester - II UG/PG/MCA Colloquium",
      date: "01-11-2025"
    },
    {
      id: 3,
      title: "New Refund Notice for the Academic Session 2016-17",
      date: "14-10-2025"
    },
    {
      id: 4,
      title: "Admission Notice for Academic Year 2025-26",
      date: "10-10-2025"
    }
  ]

  const events = [
    {
      id: 1,
      title: "Date Extended for Event",
      date: "20-01-2006",
      description: "Event date extended from 29th JAN to 20th JAN 2006"
    },
    {
      id: 2,
      title: "Annual Sports Meet",
      date: "15-12-2025",
      description: "Registration open for various sports events"
    },
    {
      id: 3,
      title: "Cultural Festival",
      date: "25-12-2025",
      description: "Annual cultural festival 'Vidya Utsav'"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Updated Notices */}
          <div className="bg-white overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 px-6 py-5 flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="flex items-center space-x-3 relative z-10">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <FaNewspaper className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">UPDATED NOTICES</h3>
              </div>
              <Link
                to="/notices"
                className="text-white hover:text-blue-200 text-sm font-semibold flex items-center space-x-2 transition-all duration-300 hover:translate-x-1 relative z-10 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg"
              >
                <span>VIEW ALL</span>
                <FaChevronRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="bg-white p-6 max-h-96 overflow-y-auto custom-scrollbar">
              <div className="space-y-3">
                {notices.map((notice, index) => (
                  <div
                    key={notice.id}
                    className="group border-l-4 border-blue-500 pl-5 py-3 pr-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300 rounded-r-lg hover:shadow-md relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-blue-100 group-hover:bg-blue-500 rounded-full p-1.5 transition-colors duration-300">
                          <FaBell className="h-3 w-3 text-blue-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800 mb-2 leading-relaxed font-medium group-hover:text-blue-900 transition-colors duration-300">
                          {notice.title}
                        </p>
                        <div className="flex items-center space-x-2">
                          <FaCalendarAlt className="h-3 w-3 text-gray-400" />
                          <p className="text-xs text-gray-500 font-medium">
                            {notice.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Events / Activities / Tenders */}
          <div className="bg-white overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 px-6 py-5 flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="flex items-center space-x-3 relative z-10">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <FaBullhorn className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">EVENTS / ACTIVITIES / TENDERS</h3>
              </div>
              <Link
                to="/events"
                className="text-white hover:text-green-200 text-sm font-semibold flex items-center space-x-2 transition-all duration-300 hover:translate-x-1 relative z-10 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg"
              >
                <span>VIEW ALL</span>
                <FaChevronRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="bg-white p-6 max-h-96 overflow-y-auto custom-scrollbar">
              <div className="space-y-3">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="group border-l-4 border-green-500 pl-5 py-3 pr-3 hover:bg-gradient-to-r hover:from-green-50 hover:to-transparent transition-all duration-300 rounded-r-lg hover:shadow-md relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-green-100 group-hover:bg-green-500 rounded-full p-1.5 transition-colors duration-300">
                          <FaCalendarAlt className="h-3 w-3 text-green-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 mb-1.5 group-hover:text-green-900 transition-colors duration-300">
                          {event.title}
                        </p>
                        <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                          {event.description}
                        </p>
                        <div className="flex items-center space-x-2">
                          <FaCalendarAlt className="h-3 w-3 text-gray-400" />
                          <p className="text-xs text-gray-500 font-medium">
                            {event.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoticesEvents

