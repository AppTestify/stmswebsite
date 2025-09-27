import { FaPlay, FaPause, FaVolumeUp, FaMusic } from 'react-icons/fa'

const CollegeAnthem = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              College Anthem
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Our College Anthem - A Song of Unity, Excellence, and Pride
            </p>
          </div>
        </div>
      </section>

      

      {/* Images Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/images/anthem.webp" 
                alt="College Anthem" 
                className="w-full object-cover"
              />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/images/anthemImage.webp" 
                alt="Anthem Image" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CollegeAnthem
