import { useState } from 'react'
import { FaNewspaper, FaCalendarAlt, FaUsers, FaChevronUp } from 'react-icons/fa'

const NewsEventsSection = () => {
  const [selectedNewsImage, setSelectedNewsImage] = useState(null)

  // News ticker items (same as in NewsTicker component)
  const newsItems = [
    "Admissions 2024-25: Applications are now open for Primary Teachers Education Course. Apply online at our website.",
    "Annual Sports Meet 2024: Registration for various sports events is now open. Contact the sports department for details.",
    "Library Hours Extended: The college library will remain open till 8 PM on weekdays for student convenience.",
    "Faculty Development Program: Workshop on modern teaching methodologies scheduled for next month.",
    "Campus Placement Drive: Leading schools will be visiting our campus for teacher recruitment. Prepare your portfolios.",
    "Cultural Festival 2024: Annual cultural festival 'Vidya Utsav' will be held next month. Registration forms available at the office.",
    "COLLEGE ACTIVITIES FOR THE ACADEMIC YEAR 2025 – 2026: Important academic activities and events scheduled for the upcoming academic year.",
    "SITTING TIMETABLE OF Second Unit Test 2025: Detailed timetable for the second unit test has been published. Check the notices section for complete schedule."
  ]

  // College events data
  const collegeEvents = [
    {
      id: 1,
      title: "Parents Teacher Meet 2024",
      date: "2024-12-15",
      type: "Meeting"
    },
    {
      id: 2,
      title: "Annual Sports Day",
      date: "2024-12-20",
      type: "Event"
    },
    {
      id: 3,
      title: "Cultural Festival",
      date: "2024-12-25",
      type: "Celebration"
    },
    {
      id: 4,
      title: "Faculty Development Workshop",
      date: "2024-12-30",
      type: "Workshop"
    },
    {
      id: 5,
      title: "Student Orientation Program",
      date: "2025-01-05",
      type: "Orientation"
    },
    {
      id: 6,
      title: "Academic Seminar",
      date: "2025-01-10",
      type: "Seminar"
    },
    {
      id: 7,
      title: "Career Guidance Session",
      date: "2025-01-15",
      type: "Guidance"
    },
    {
      id: 8,
      title: "Alumni Meet 2025",
      date: "2025-01-20",
      type: "Reunion"
    }
  ]

  // News images data
  const newsImages = [
    {
      id: 1,
      title: "Student Achievements",
      image: "/images/awards/IMG_7213.jpg",
      description: "Students excel in D.L.Ed examination with outstanding results"
    },
    {
      id: 2,
      title: "Award Ceremony",
      image: "/images/awards/IMG_7215.jpg",
      description: "Annual award ceremony for outstanding students"
    },
    {
      id: 3,
      title: "Academic Excellence",
      image: "/images/gallaryImages/img1.webp",
      description: "College achieves 100% pass rate in recent examinations"
    },
    {
      id: 4,
      title: "Cultural Program",
      image: "/images/gallaryImages/img2.webp",
      description: "Annual cultural program showcases student talents"
    },
    {
      id: 5,
      title: "Sports Achievement",
      image: "/images/playground/IMG_2171-500x500.webp",
      description: "Students win inter-college sports competition"
    },
    {
      id: 6,
      title: "College Activities",
      image: "/images/gallaryImages/img3.webp",
      description: "Various activities and events organized throughout the academic year"
    },
    {
      id: 7,
      title: "Student Recognition",
      image: "/images/awards/IMG_7216.jpg",
      description: "Outstanding students recognized for their achievements"
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3 tracking-wide">
            News & Events
          </h2>
          <div className="w-20 h-0.5 bg-gray-400 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, announcements, and upcoming events
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Section - Latest News */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-blue-600 px-6 py-4">
              <div className="flex items-center">
                <FaNewspaper className="h-5 w-5 text-white mr-3" />
                <h3 className="text-lg font-semibold text-white font-serif">Latest News</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="h-[400px] overflow-y-auto pr-2 space-y-4">
                {newsItems.slice(0, 6).map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 transition-colors rounded-r">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section - In News */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-indigo-600 px-6 py-4">
              <div className="flex items-center">
                <FaNewspaper className="h-5 w-5 text-white mr-3" />
                <h3 className="text-lg font-semibold text-white font-serif">In News</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="h-[400px] overflow-y-auto pr-2 space-y-4">
                {newsImages.map((news) => (
                  <div 
                    key={news.id}
                    className="bg-gray-50 rounded-lg p-3 cursor-pointer hover:shadow-md transition-all border border-gray-100"
                    onClick={() => setSelectedNewsImage(news)}
                  >
                    <div className="aspect-video bg-gray-200 rounded mb-2 overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          if (e.target.nextSibling) {
                            e.target.nextSibling.style.display = 'flex'
                          }
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center">
                        <div className="text-center text-gray-400">
                          <FaNewspaper className="h-6 w-6 mx-auto mb-1" />
                          <p className="text-xs">Image coming soon</p>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">{news.title}</h4>
                    <p className="text-gray-600 text-xs line-clamp-2">{news.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - College Events */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-green-600 px-6 py-4">
              <div className="flex items-center">
                <FaCalendarAlt className="h-5 w-5 text-white mr-3" />
                <h3 className="text-lg font-semibold text-white font-serif">College Events</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="h-[400px] overflow-y-auto pr-2 space-y-3">
                {collegeEvents.map((event) => (
                  <div key={event.id} className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2 text-xs text-gray-500">
                      <FaCalendarAlt className="h-3 w-3 text-green-600 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">{event.title}</h4>
                    <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={scrollToTop}
            className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
          >
            <FaChevronUp className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* News Image Modal */}
      {selectedNewsImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">{selectedNewsImage.title}</h3>
                <button
                  onClick={() => setSelectedNewsImage(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img
                  src={selectedNewsImage.image}
                  alt={selectedNewsImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600">{selectedNewsImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default NewsEventsSection
