import { Link } from 'react-router-dom'
import { FaHome, FaArrowLeft, FaSearch } from 'react-icons/fa'

const Error404 = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* 404 Animation */}
          <div className="relative">
            <div className="text-9xl font-bold text-white opacity-20">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FaSearch className="h-24 w-24 text-white opacity-50" />
            </div>
          </div>
          
          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <FaHome className="mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <FaArrowLeft className="mr-2" />
              Go Back
            </button>
          </div>
          
          {/* Quick Links */}
          <div className="pt-8">
            <p className="text-gray-400 mb-6">Or try these popular pages:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/about"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white transition-colors duration-300"
              >
                <div className="text-sm font-medium">About Us</div>
              </Link>
              <Link
                to="/admissions"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white transition-colors duration-300"
              >
                <div className="text-sm font-medium">Admissions</div>
              </Link>
              <Link
                to="/gallery"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white transition-colors duration-300"
              >
                <div className="text-sm font-medium">Gallery</div>
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white transition-colors duration-300"
              >
                <div className="text-sm font-medium">Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error404
