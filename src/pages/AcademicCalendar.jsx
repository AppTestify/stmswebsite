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
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center border-b border-gray-200 pb-6">
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2 tracking-wide">
              Academic Calendar
            </h1>
            <div className="w-20 h-0.5 bg-gray-400 mx-auto"></div>
            <p className="text-base text-gray-600 mt-4">
              Academic Year Events 2024-2025
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {events.map((event, index) => (
                <div 
                  key={index}
                  className={`p-5 hover:bg-gray-50 transition-colors ${
                    event.isHoliday ? 'bg-red-50/50' : ''
                  }`}
                >
                  <div className="flex flex-col items-center gap-3 max-w-3xl mx-auto">
                    <div className="flex items-center gap-4 w-full justify-center">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                        event.isHoliday ? 'bg-red-100' : 'bg-blue-100'
                      }`}>
                        {event.isHoliday ? (
                          <FaFlag className={`h-5 w-5 ${event.isHoliday ? 'text-red-600' : 'text-blue-600'}`} />
                        ) : (
                          <FaCalendarAlt className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                      <div className="flex-1 text-center">
                        <div className="flex items-center justify-center gap-2 mb-1 flex-wrap">
                          <span className={`text-sm font-medium ${
                            event.isHoliday ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {event.date}
                          </span>
                          {event.isHoliday && (
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                              Holiday
                            </span>
                          )}
                        </div>
                        <h3 className="text-base font-medium text-gray-900">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AcademicCalendar

