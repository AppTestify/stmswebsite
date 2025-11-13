import { FaCalendarAlt, FaFlag } from 'react-icons/fa'

const AcademicCalendar = () => {
  const events = [
    { date: "23/07/2024", title: "New Academic Year Begins", isHoliday: false },
    { date: "30/07/2024", title: "Speech Competition", isHoliday: false },
    { date: "03/08/2024", title: "Farewell to the Students (Session: 2022 – 2024)", isHoliday: false },
    { date: "03/08/2024", title: "Birthday Celebration of Staff & Students (April, May, June, July)", isHoliday: false },
    { date: "06/08/2024", title: "Hindi Extempore Competition", isHoliday: false },
    { date: "15/08/2024", title: "Independence Day", isHoliday: true },
    { date: "17/08/2024", title: "Craft Competition", isHoliday: false },
    { date: "19/08/2024", title: "Raksha Bandhan", isHoliday: true },
    { date: "26/08/2024", title: "Janmashtami", isHoliday: true },
    { date: "27/08/2024 to 31/08/2024", title: "1st Unit Test Begins", isHoliday: false },
    { date: "31/08/2024", title: "Essay Writing Competition", isHoliday: false },
    { date: "05/09/2024", title: "Teachers' Day Celebration", isHoliday: false },
    { date: "14/09/2024", title: "Holy Cross Feast", isHoliday: true },
    { date: "23/09/2024 to 27/09/2024", title: "Micro-Teaching", isHoliday: false },
    { date: "03/10/2024 to 08/10/2024", title: "2nd Unit Test Begins", isHoliday: false },
    { date: "10/10/2024 to 13/10/2024", title: "Durga Puja Holidays Begin", isHoliday: true },
    { date: "14/10/2024", title: "College Reopens", isHoliday: false },
    { date: "15/10/2024", title: "College Day", isHoliday: false },
    { date: "15/10/2024", title: "Fancy Dress Competition", isHoliday: false },
    { date: "16/10/2024 to 30/11/2024", title: "Teaching Practical (School Experience Program – 2 [SEP – 2])", isHoliday: false },
    { date: "01/11/2024 to 10/11/2024", title: "Deepawali & Chhath Puja Holidays Begin", isHoliday: true },
    { date: "11/11/2024", title: "College Reopens", isHoliday: false },
    { date: "09/12/2024 to 14/12/2024", title: "Half Yearly Examination", isHoliday: false },
    { date: "16/12/2024 to 18/12/2024", title: "Practical Examination", isHoliday: false },
    { date: "21/12/2024", title: "Christmas Gathering", isHoliday: false },
    { date: "23/12/2024", title: "Winter Holidays Begin", isHoliday: true },
    { date: "06/01/2025", title: "College Reopens in The New Year", isHoliday: false },
    { date: "11/01/2025", title: "English and Hindi Calligraphy Competition", isHoliday: false },
    { date: "14/01/2025", title: "Makar Sankranti", isHoliday: true },
    { date: "18/01/2025", title: "English Hindi Spelling Competition", isHoliday: false },
    { date: "26/01/2025", title: "Republic Day", isHoliday: true },
    { date: "27/01/2025 to 31/01/2025", title: "3rd Unit Test Begins", isHoliday: false },
    { date: "03/02/2025", title: "Educational Movie", isHoliday: false },
    { date: "11/02/2025", title: "Solo Song Competition", isHoliday: false },
    { date: "17/02/2025", title: "Solo Dance Competition", isHoliday: false },
    { date: "21/02/2025 to 28/02/2025", title: "4th Unit Test Begins", isHoliday: false },
    { date: "26/02/2025", title: "Maha Shivaratri", isHoliday: true },
    { date: "08/03/2025", title: "Women's Day", isHoliday: false },
    { date: "12/03/2025", title: "Rangoli Competition", isHoliday: false },
    { date: "14/03/2025", title: "Holi", isHoliday: true },
    { date: "31/03/2025", title: "Eid – ul – Fitar (tentative)", isHoliday: true },
    { date: "24/03/2025 to 29/03/2025", title: "5th Unit Test Begins", isHoliday: false },
    { date: "04/04/2025", title: "Quiz Competition", isHoliday: false },
    { date: "12/04/2025", title: "Food Without Fire", isHoliday: false },
    { date: "14/04/2025", title: "Ambedkar Jayanti", isHoliday: true },
    { date: "17/04/2025 to 21/04/2025", title: "Easter Holidays Begin", isHoliday: true },
    { date: "April 2025", title: "All Files Submission", isHoliday: false },
    { date: "05/05/2025 to 10/05/2025", title: "Sent-up Examination", isHoliday: false },
    { date: "12/05/2025 to 14/05/2025", title: "Practical Examination", isHoliday: false },
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
            Important dates and events for the academic year
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

