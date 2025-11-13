const Seminars = () => {
  return (
    <div className="min-h-screen bg-white">
      <section 
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg?auto=compress&cs=tinysrgb&w=1920)'
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
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
              Seminars & Workshops
            </h1>
            <div className="w-20 h-0.5 bg-blue-400 mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
              Professional development and learning opportunities
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <p className="text-gray-600 text-center">
              Seminars and workshops information will be updated soon. Please check back later or contact the administration office for details.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Seminars

