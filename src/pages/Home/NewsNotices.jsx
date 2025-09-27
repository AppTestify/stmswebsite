import { Link } from 'react-router-dom'
import { notices } from '../../data/notices'
import { FaArrowRight, FaDownload, FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa'

const NewsNotices = () => {
  const latestNotices = notices
  
  return (
    <section className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Notices
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest announcements, events, and important notices from the college.
          </p>
        </div>
        
        <div className="overflow-x-auto pb-4 mb-12">
          <div className="flex space-x-6 min-w-max">
            {latestNotices.map((notice) => (
              <div
                key={notice.id}
                className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 flex-shrink-0 w-80 ${
                  notice.isUrgent 
                    ? 'border-red-500' 
                    : notice.priority === 'high' 
                      ? 'border-orange-500' 
                      : 'border-blue-500'
                }`}
              >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">
                      {new Date(notice.date).toLocaleDateString()}
                    </span>
                  </div>
                  {notice.isUrgent && (
                    <div className="flex items-center space-x-1 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                      <FaExclamationTriangle className="h-3 w-3" />
                      <span>Urgent</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {notice.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {notice.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    notice.category === 'Admission' 
                      ? 'bg-blue-100 text-blue-600'
                      : notice.category === 'Event'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-600'
                  }`}>
                    {notice.category}
                  </span>
                  
                  <a
                    href={notice.pdfUrl}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                  >
                    <FaDownload className="h-3 w-3" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
        
        <div className="text-center">
          <Link
            to="/notices"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View All Notices
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsNotices
