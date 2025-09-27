import { useState } from 'react'
import { notices, noticeCategories } from '../data/notices'
import { FaSearch, FaDownload, FaCalendarAlt, FaExclamationTriangle, FaFilter, FaFilePdf } from 'react-icons/fa'

const Notices = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('date') // date, priority, title

  const filteredNotices = notices
    .filter(notice => {
      const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          notice.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date) - new Date(a.date)
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 }
          return priorityOrder[b.priority] - priorityOrder[a.priority]
        case 'title':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100'
      case 'medium': return 'text-orange-600 bg-orange-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Admission': return 'text-blue-600 bg-blue-100'
      case 'Event': return 'text-green-600 bg-green-100'
      case 'Academic': return 'text-purple-600 bg-purple-100'
      case 'Workshop': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Notices & Announcements
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and important announcements
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <FaFilter className="text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  {noticeCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="date">Sort by Date</option>
                <option value="priority">Sort by Priority</option>
                <option value="title">Sort by Title</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'All' ? 'All Notices' : `${selectedCategory} Notices`}
            </h2>
            <p className="text-gray-600">
              {filteredNotices.length} notice{filteredNotices.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredNotices.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <FaSearch className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No notices found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 ${
                    notice.isUrgent 
                      ? 'border-red-500' 
                      : notice.priority === 'high' 
                        ? 'border-orange-500' 
                        : 'border-orange-500'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-bold text-gray-900">
                            {notice.title}
                          </h3>
                          {notice.isUrgent && (
                            <div className="flex items-center space-x-1 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                              <FaExclamationTriangle className="h-3 w-3" />
                              <span>Urgent</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-4">
                          {notice.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-col lg:items-end space-y-2">
                        <div className="flex items-center space-x-2">
                          <FaCalendarAlt className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-500">
                            {new Date(notice.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        
                        <div className="flex space-x-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(notice.category)}`}>
                            {notice.category}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(notice.priority)}`}>
                            {notice.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <FaFilePdf className="h-4 w-4" />
                          <span className="text-sm">PDF Document</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <a
                          href={notice.pdfUrl}
                          className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-300"
                        >
                          <FaDownload className="h-4 w-4 mr-2" />
                          Download
                        </a>
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quick Links
            </h2>
            <p className="text-lg text-gray-600">
              Important resources and information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-lg p-8 text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaDownload className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Admission Forms</h3>
              <p className="text-gray-600 mb-6">Download application forms for various programs</p>
              <button className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-300">
                <FaDownload className="mr-2" />
                Download Forms
              </button>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaCalendarAlt className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Calendar</h3>
              <p className="text-gray-600 mb-6">Important dates and academic schedule</p>
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
                <FaCalendarAlt className="mr-2" />
                View Calendar
              </button>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaExclamationTriangle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Notices</h3>
              <p className="text-gray-600 mb-6">Urgent announcements and emergency updates</p>
              <button className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300">
                <FaExclamationTriangle className="mr-2" />
                View Urgent
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Notices
