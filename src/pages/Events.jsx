const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Title */}
      <section className="py-10 md:py-14 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3 tracking-wide">
              Events Corner
            </h1>
            <div className="w-20 h-0.5 bg-gray-400 mx-auto"></div>
            <p className="text-base text-gray-600 mt-4 max-w-2xl mx-auto">
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

