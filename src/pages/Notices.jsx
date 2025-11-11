import { useState } from 'react'
import { notices, noticeCategories } from '../data/notices'
import { FaSearch, FaCalendarAlt, FaExclamationTriangle, FaFilter } from 'react-icons/fa'

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
    <div className="min-h-screen bg-white">
      {/* Page Title */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">
            Notices & Announcements
          </h1>
          <p className="text-gray-600">
            Stay updated with the latest news, events, and important announcements
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              {selectedCategory === 'All' ? 'All Notices' : `${selectedCategory} Notices`}
            </h2>
            <p className="text-sm text-gray-500">
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
            <div className="space-y-4">
              {filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className={`bg-white border rounded-lg hover:shadow-md transition-shadow duration-200 overflow-hidden border-l-4 ${
                    notice.isUrgent 
                      ? 'border-l-red-500' 
                      : notice.priority === 'high' 
                        ? 'border-l-orange-500' 
                        : 'border-l-gray-300'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center flex-wrap gap-3 mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {notice.title}
                          </h3>
                          {notice.isUrgent && (
                            <div className="flex items-center space-x-1 bg-red-50 text-red-600 px-2 py-1 rounded text-xs font-medium border border-red-200">
                              <FaExclamationTriangle className="h-3 w-3" />
                              <span>Urgent</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {notice.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-col lg:items-end space-y-2 flex-shrink-0">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <FaCalendarAlt className="h-4 w-4" />
                          <span>
                            {new Date(notice.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(notice.category)}`}>
                            {notice.category}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(notice.priority)}`}>
                            {notice.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  )
}

export default Notices
