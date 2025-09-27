import { FaDownload, FaFilePdf, FaCalendarAlt, FaGraduationCap, FaUsers, FaBook, FaAward } from 'react-icons/fa'

const Prospectus = () => {
  const prospectusSections = [
    {
      id: 1,
      title: "College Overview",
      icon: FaGraduationCap,
      description: "Learn about our history, mission, and vision",
      features: ["College History", "Mission & Vision", "Leadership Team", "Accreditation"]
    },
    {
      id: 2,
      title: "Academic Programs",
      icon: FaBook,
      description: "Explore our comprehensive academic offerings",
      features: ["B.Ed Program", "D.El.Ed Program", "Certificate Courses", "Specializations"]
    },
    {
      id: 3,
      title: "Admission Process",
      icon: FaUsers,
      description: "Step-by-step guide to joining our college",
      features: ["Eligibility Criteria", "Application Process", "Selection Procedure", "Important Dates"]
    },
    {
      id: 4,
      title: "Facilities & Infrastructure",
      icon: FaAward,
      description: "Discover our world-class facilities",
      features: ["Modern Classrooms", "Library & Labs", "Sports Facilities", "Hostel Accommodation"]
    }
  ]

  const importantDates = [
    { event: "Application Form Release", date: "March 15, 2024", status: "Open" },
    { event: "Last Date for Application", date: "May 31, 2024", status: "Upcoming" },
    { event: "Entrance Examination", date: "June 15, 2024", status: "Upcoming" },
    { event: "Result Declaration", date: "July 1, 2024", status: "Upcoming" },
    { event: "Admission Process", date: "July 15-30, 2024", status: "Upcoming" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              College Prospectus
            </h1>
            <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Your comprehensive guide to St. Teresa's Primary Teachers Education College
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                <FaDownload className="mr-2" />
                Download Prospectus 2024
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300 flex items-center justify-center">
                <FaFilePdf className="mr-2" />
                View Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Images Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              College Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our college through these beautiful images
            </p>
          </div>
          
          {/* Horizontally Scrollable Images */}
          <div className="relative">
            <div className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4">
              <div className="flex-shrink-0">
                <img 
                  src="/images/pro1.webp" 
                  alt="College Image 1" 
                  className="w-96 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/images/pro2.webp" 
                  alt="College Image 2" 
                  className="w-80 h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/images/pro3.webp" 
                  alt="College Image 3" 
                  className="w-80 h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/images/pro4.webp" 
                  alt="College Image 4" 
                  className="w-80 h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/images/pro5.webp" 
                  alt="College Image 5" 
                  className="w-80 h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/images/pro6.webp" 
                  alt="College Image 6" 
                  className="w-80 h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/images/pro7.webp" 
                  alt="College Image 7" 
                  className="w-80 h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/images/pro8.webp" 
                  alt="College Image 8" 
                  className="w-80 h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/images/pro9.webp" 
                  alt="College Image 9" 
                  className="w-80 h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  )
}

export default Prospectus
