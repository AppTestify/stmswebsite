const Activities = () => {
  const activityImage = "/images/activities/ACTIVITIES 2025-2026_page-0001.jpg"

  return (
    <div className="min-h-screen bg-white">
      {/* Page Title */}
      <section 
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1920)'
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              College Activities
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
              Academic Year 2025-2026
            </p>
          </div>
        </div>
      </section>

      {/* Image Display Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img
              src={activityImage}
              alt="College Activities 2025-2026"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Activities

