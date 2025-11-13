import { FaPlay, FaPause, FaVolumeUp, FaMusic } from 'react-icons/fa'

const CollegeAnthem = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with blue/indigo tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 via-indigo-700/80 to-blue-600/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              College Anthem
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
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
