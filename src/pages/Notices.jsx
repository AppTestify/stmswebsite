import { useState, useEffect } from 'react'
import { notices, noticeCategories } from '../data/notices'
import { FaSearch, FaCalendarAlt, FaExclamationTriangle, FaFilter, FaFilePdf, FaDownload, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'

const Notices = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('date') // date, priority, title
  const [selectedNotice, setSelectedNotice] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
      case 'Examination': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const openModal = (notice) => {
    setSelectedNotice(notice)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedNotice(null)
  }

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
        closeModal()
      }
    }
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isModalOpen, closeModal])

  return (
    <div className="min-h-screen bg-white">
      {/* Page Title */}
      <section 
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1920)'
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Notices & Announcements
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
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
                  onClick={() => openModal(notice)}
                  className={`bg-white border rounded-lg hover:shadow-md transition-all duration-200 overflow-hidden border-l-4 cursor-pointer transform hover:-translate-y-1 ${
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
                          {notice.pdfUrl && (
                            <FaFilePdf className="text-red-600" title="PDF Available" />
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {notice.description}
                        </p>
                        
                        {notice.pdfUrl && (
                          <p className="text-sm text-blue-600 font-medium">
                            Click to view PDF →
                          </p>
                        )}
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

      {/* Modal */}
      {isModalOpen && selectedNotice && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedNotice.title}
                </h2>
                {selectedNotice.isUrgent && (
                  <div className="flex items-center space-x-1 bg-red-50 text-red-600 px-2 py-1 rounded text-xs font-medium border border-red-200">
                    <FaExclamationTriangle className="h-3 w-3" />
                    <span>Urgent</span>
                  </div>
                )}
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-full"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Notice Info */}
              <div className="mb-6 flex flex-wrap gap-4 items-center text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>
                    {new Date(selectedNotice.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded text-xs font-medium ${getCategoryColor(selectedNotice.category)}`}>
                    {selectedNotice.category}
                  </span>
                  <span className={`px-3 py-1 rounded text-xs font-medium ${getPriorityColor(selectedNotice.priority)}`}>
                    {selectedNotice.priority}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedNotice.description}
                </p>
              </div>

              {/* PDF Section */}
              {selectedNotice.pdfUrl && (
                <div className="border-t border-gray-200 pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <FaFilePdf className="text-red-600 mr-2" />
                      Document
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href={selectedNotice.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Open in New Tab
                      </a>
                      <a
                        href={selectedNotice.pdfUrl}
                        download
                        className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200 border border-gray-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaDownload className="mr-2" />
                        Download
                      </a>
                    </div>
                  </div>
                  
                  {/* PDF Viewer */}
                  <div className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
                    <div className="w-full" style={{ height: '70vh', minHeight: '500px' }}>
                      <iframe
                        src={`${selectedNotice.pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                        className="w-full h-full border-0"
                        title={`${selectedNotice.title} PDF`}
                      >
                        <div className="p-8 text-center text-gray-600">
                          <p>Your browser does not support PDFs.</p>
                          <a 
                            href={selectedNotice.pdfUrl} 
                            download
                            className="text-blue-600 hover:text-blue-800 underline mt-2 inline-block"
                          >
                            Download the PDF instead
                          </a>
                        </div>
                      </iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Notices
