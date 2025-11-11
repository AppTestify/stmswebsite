import { useState } from 'react'
import { testimonials } from '../data/facilities'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar, FaUser, FaGraduationCap, FaTimes } from 'react-icons/fa'

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)
  const [imageErrors, setImageErrors] = useState({})
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const openModal = (testimonial, index) => {
    setSelectedTestimonial({ ...testimonial, index })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedTestimonial(null)
  }

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              What People Say About Us
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Hear from our students, alumni, and community members about their experiences at St. Teresa's College
            </p>
          </div>
        </div>
      </section>

      {/* Main Testimonials Section */}
      {/* <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student & Alumni Testimonials
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover what makes St. Teresa's College special through the voices of our community
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12">
              <div className="text-center mb-6 md:mb-8">
                <FaQuoteLeft className="h-12 md:h-16 w-12 md:w-16 text-blue-600 mx-auto mb-4 md:mb-6" />
                <div className="flex justify-center mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="h-5 md:h-6 w-5 md:w-6 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="text-center mb-8 md:mb-12">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed italic font-medium">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 md:w-20 h-16 md:h-20 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                  />
                  <div className="text-left">
                    <div className="text-xl md:text-2xl font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-blue-600 font-semibold text-base md:text-lg">
                      {testimonials[currentIndex].course}
                    </div>
                    <div className="text-gray-500 text-sm">
                      <FaGraduationCap className="inline mr-1" />
                      Alumni
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
         
            <button
              onClick={prevTestimonial}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 hover:text-blue-600 rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <FaChevronLeft className="h-4 md:h-6 w-4 md:w-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 hover:text-blue-600 rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <FaChevronRight className="h-4 md:h-6 w-4 md:w-6" />
            </button>
          </div>
          
        
          <div className="flex justify-center mt-8 md:mt-12 space-x-2 md:space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 md:w-4 h-3 md:h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Additional Testimonials Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                  index === currentIndex ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
                onClick={() => openModal(testimonial, index)}
              >
                <div className="flex items-center mb-3 md:mb-4">
                  {imageErrors[index] || !testimonial.image ? (
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3 md:mr-4">
                      <FaUser className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
                    </div>
                  ) : (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover mr-3 md:mr-4"
                      onError={() => handleImageError(index)}
                    />
                  )}
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-blue-600 text-xs md:text-sm">{testimonial.course}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  "{testimonial.text.length > 100 ? testimonial.text.substring(0, 100) + '...' : testimonial.text}"
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="h-3 md:h-4 w-3 md:w-4 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-blue-600 text-xs md:text-sm font-medium">Read More</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-12 md:py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
            Become part of the St. Teresa's College family and create your own success story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section> */}

      {/* Modal */}
      {isModalOpen && selectedTestimonial && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  {imageErrors[selectedTestimonial.index] || !selectedTestimonial.image ? (
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center border-4 border-blue-100 shadow-lg">
                      <FaUser className="w-8 h-8 text-blue-600" />
                    </div>
                  ) : (
                    <img
                      src={selectedTestimonial.image}
                      alt={selectedTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                      onError={() => handleImageError(selectedTestimonial.index)}
                    />
                  )}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {selectedTestimonial.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-lg">
                      {selectedTestimonial.course}
                    </p>
                    {/* <div className="text-gray-500 text-sm">
                      <FaGraduationCap className="inline mr-1" />
                      Alumni
                    </div> */}
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  <FaTimes className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="text-center mb-6">
                <FaQuoteLeft className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic font-medium">
                  "{selectedTestimonial.text}"
                </p>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={closeModal}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TestimonialsPage
