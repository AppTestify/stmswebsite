const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Title */}
      <section 
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with orange/red tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-red-800/80 to-orange-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
              Events Corner
            </h1>
            <div className="w-20 h-0.5 bg-orange-400 mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-orange-100 mt-4 max-w-2xl mx-auto drop-shadow-md">
              Comprehensive schedule of activities and events for the academic year
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 max-w-4xl w-full">
              <img 
                src="/images/collegeActivities2024-25.webp" 
                alt="College Activities 2024-2025" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events

