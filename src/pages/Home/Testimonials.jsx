import { useState } from 'react'
import { testimonials } from '../../data/facilities'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What People Says
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our successful graduates about their experience at St. Teresa's College.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <FaQuoteLeft className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="text-left">
                <div className="text-xl font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-blue-600 font-medium">
                  {testimonials[currentIndex].course}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 hover:text-blue-600 rounded-full p-3 shadow-lg transition-colors duration-300"
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 hover:text-blue-600 rounded-full p-3 shadow-lg transition-colors duration-300"
          >
            <FaChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
