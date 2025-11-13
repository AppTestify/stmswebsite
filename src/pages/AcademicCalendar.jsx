import { FaCalendarAlt, FaFlag } from 'react-icons/fa'

const AcademicCalendar = () => {
  const events = [
    // COLLEGE ACTIVITIES 2025-2026
    { date: "04/08/2025", title: "Speech Competition", isHoliday: false },
    { date: "07/08/2025", title: "Group Dance Competition", isHoliday: false },
    { date: "15/08/2025", title: "Independence Day", isHoliday: true },
    { date: "23/08/2025", title: "Farewell to the Students of Session 2023-2025, Prize Distribution for Activities & Birthday Celebration from January to June", isHoliday: false },
    { date: "25/08/2025 to 29/08/2025", title: "1st Unit Test", isHoliday: false },
    { date: "27/08/2025", title: "Craft Competition", isHoliday: false },
    { date: "30/08/2025", title: "Hindi Extempore Competition", isHoliday: false },
    { date: "02/09/2025", title: "Essay Writing Competition", isHoliday: false },
    { date: "05/09/2025", title: "Teachers' Day Celebration", isHoliday: false },
    { date: "20/09/2025", title: "Debate Competition", isHoliday: false },
    { date: "23/09/2025 to 27/09/2025", title: "2nd Unit Test", isHoliday: false },
    { date: "23/09/2025", title: "Gamla Painting Competition", isHoliday: false },
    { date: "27/09/2025", title: "English & Hindi Calligraphy", isHoliday: false },
    { date: "04/10/2025", title: "Drawing Competition", isHoliday: false },
    { date: "14/10/2025 to 18/10/2025", title: "3rd Unit Test", isHoliday: false },
    { date: "15/10/2025", title: "Quiz Competition on the Founders of Congregation", isHoliday: false },
    { date: "November 2025", title: "School Experience Programme - 2 (Internship - 2)", isHoliday: false },
    { date: "06/12/2025", title: "Educational Tour", isHoliday: false },
    { date: "08/12/2025 to 12/12/2025", title: "Half Yearly Examination", isHoliday: false },
    { date: "13/12/2025 to 16/12/2025", title: "Practical Examination", isHoliday: false },
    { date: "22/12/2025", title: "Christmas Gathering", isHoliday: false },
    { date: "07/02/2026", title: "Orientation Program", isHoliday: false },
    { date: "14/02/2026", title: "Educational Movie", isHoliday: false },
    { date: "21/02/2026", title: "Solo Song Competition", isHoliday: false },
    { date: "25/02/2026 to 02/03/2026", title: "5th Unit Test", isHoliday: false },
    { date: "28/02/2026", title: "Solo Dance Competition", isHoliday: false },
    { date: "07/03/2026", title: "Women's Day Celebration", isHoliday: false },
    { date: "14/03/2026", title: "Rangoli Competition", isHoliday: false },
    { date: "27/03/2026 to 01/04/2026", title: "6th Unit Test", isHoliday: false },
    { date: "April 2026", title: "Submission of All Project Files S1-S9, SEP - 2, F1-F12, SEP-1 & Assignments", isHoliday: false },
    { date: "11/04/2026", title: "Fancy Dress Competition", isHoliday: false },
    { date: "18/04/2026", title: "Quiz Competition", isHoliday: false },
    { date: "04/05/2026 to 09/05/2026", title: "Sent-up Examination", isHoliday: false },
    { date: "11/05/2026 to 13/05/2026", title: "Practical Examination", isHoliday: false },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg?auto=compress&cs=tinysrgb&w=1920)'
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
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Academic Calendar
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
            Important dates and events for the academic year 2025-2026
          </p>
        </div>
      </section>
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        Date
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Event / Activity
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {events.map((event, index) => (
                    <tr 
                      key={index}
                      className={`hover:bg-gray-50 transition-colors ${
                        event.isHoliday ? 'bg-red-50/30' : ''
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                            event.isHoliday ? 'bg-red-100' : 'bg-blue-100'
                          }`}>
                            {event.isHoliday ? (
                              <FaFlag className="h-5 w-5 text-red-600" />
                            ) : (
                              <FaCalendarAlt className="h-5 w-5 text-blue-600" />
                            )}
                          </div>
                          <span className={`text-sm font-medium ${
                            event.isHoliday ? 'text-red-600' : 'text-gray-900'
                          }`}>
                            {event.date}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {event.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {event.isHoliday ? (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                            <FaFlag className="mr-1" />
                            Holiday
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                            <FaCalendarAlt className="mr-1" />
                            Event
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AcademicCalendar

