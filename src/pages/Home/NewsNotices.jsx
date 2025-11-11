import { Link } from 'react-router-dom'
import { notices } from '../../data/notices'
import { FaArrowRight, FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa'

const NewsNotices = () => {
  const latestNotices = notices.slice(0, 6)
  
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3 tracking-wide">
            Latest Notices
          </h2>
          <div className="w-20 h-0.5 bg-gray-400 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest announcements and important notices from the college
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {latestNotices.map((notice) => (
            <div
              key={notice.id}
              className={`bg-white rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden border-l-4 ${
                notice.isUrgent 
                  ? 'border-l-red-500' 
                  : notice.priority === 'high' 
                    ? 'border-l-orange-500' 
                    : 'border-l-blue-500'
              }`}
            >
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <FaCalendarAlt className="h-3 w-3" />
                    <span>
                      {new Date(notice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  {notice.isUrgent && (
                    <div className="flex items-center space-x-1 bg-red-50 text-red-600 px-2 py-1 rounded text-xs font-medium border border-red-200">
                      <FaExclamationTriangle className="h-3 w-3" />
                      <span>Urgent</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug">
                  {notice.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {notice.description}
                </p>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    notice.category === 'Admission' 
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : notice.category === 'Event'
                        ? 'bg-green-50 text-green-600 border border-green-200'
                        : 'bg-gray-50 text-gray-600 border border-gray-200'
                  }`}>
                    {notice.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/notices"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            View All Notices
            <FaArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsNotices
