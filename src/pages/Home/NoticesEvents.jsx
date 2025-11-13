import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight, FaBell, FaCalendarAlt, FaNewspaper, FaBullhorn, FaTimes } from 'react-icons/fa'

const NoticesEvents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const [modalTitle, setModalTitle] = useState('')

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    }
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isModalOpen])

  const handleNoticeClick = (notice) => {
    // Map notice titles to their respective images
    const noticeImages = {
      "Demonstration Classes by Method Subject Lecturers": "/images/notices/Notice.png",
      "Teachers Demo Class": "/images/notices/Teachers Demo Class (1) (1)_page-0001.jpg",
      "Second Unit Test Schedule": "/images/notices/Second Unit Test (2)_page-0001.jpg"
    }

    if (noticeImages[notice.title]) {
      setModalImage(noticeImages[notice.title])
      setModalTitle(notice.title)
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalImage('')
    setModalTitle('')
  }
  const notices = [
    {
      id: 1,
      title: "Demonstration Classes by Method Subject Lecturers",
      date: "05-11-2025"
    },
    // {
    //   id: 2,
    //   title: "Teachers Demo Class",
    //   date: "15-01-2025"
    // },
    {
      id: 3,
      title: "Second Unit Test Schedule",
      date: "20-01-2025"
    }
  ]

  // Get events from Academic Calendar and filter for current month
  const getAllEvents = () => {
    return [
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
  }

  // Filter events for current month
  const getCurrentMonthEvents = () => {
    const allEvents = getAllEvents()
    const now = new Date()
    const currentMonth = now.getMonth() + 1 // JavaScript months are 0-indexed
    const currentYear = now.getFullYear()

    return allEvents
      .filter(event => {
        // Handle date ranges and single dates
        const dateStr = event.date
        
        // Skip if date is just a month name (e.g., "April 2025")
        if (dateStr.includes(' to ')) {
          // Date range: extract start date
          const startDateStr = dateStr.split(' to ')[0].trim()
          const [day, month, year] = startDateStr.split('/').map(Number)
          return month === currentMonth && year === currentYear
        } else if (dateStr.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
          // Single date in DD/MM/YYYY format
          const [day, month, year] = dateStr.split('/').map(Number)
          return month === currentMonth && year === currentYear
        }
        return false
      })
      .slice(0, 5) // Limit to 5 events
      .map((event, index) => {
        // Convert date format from DD/MM/YYYY to DD-MM-YYYY
        let displayDate = event.date
        if (displayDate.includes(' to ')) {
          displayDate = displayDate.split(' to ')[0].trim()
        }
        displayDate = displayDate.replace(/\//g, '-')
        
        return {
          id: index + 1,
          title: event.title,
          date: displayDate,
          description: event.isHoliday ? 'Holiday' : 'Event / Activity'
        }
      })
  }

  const events = getCurrentMonthEvents()

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
                    onClick={() => handleNoticeClick(notice)}
                    className="group border-l-4 border-blue-500 pl-5 py-3 pr-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300 rounded-r-lg hover:shadow-md relative overflow-hidden cursor-pointer"
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

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg shadow-2xl max-w-4xl max-h-[90vh] w-full m-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors duration-200"
              aria-label="Close modal"
            >
              <FaTimes className="h-5 w-5 text-gray-700" />
            </button>

            {/* Image */}
            <div className="overflow-y-auto max-h-[90vh]">
              <img
                src={modalImage}
                alt={modalTitle}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default NoticesEvents

