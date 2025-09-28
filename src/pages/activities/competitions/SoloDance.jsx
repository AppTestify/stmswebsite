import { FaMusic, FaTrophy, FaUser, FaCalendarAlt } from 'react-icons/fa'

const SoloDance = () => {
  const competitionInfo = [
    {
      title: "Individual Performance",
      icon: <FaUser className="h-8 w-8" />,
      description: "Showcase your solo dance skills and artistic expression"
    },
    {
      title: "Musical Excellence",
      icon: <FaMusic className="h-8 w-8" />,
      description: "Dance to various musical genres and cultural traditions"
    },
    {
      title: "Competition Prizes",
      icon: <FaTrophy className="h-8 w-8" />,
      description: "Exciting prizes and recognition for outstanding performances"
    },
    {
      title: "Regular Events",
      icon: <FaCalendarAlt className="h-8 w-8" />,
      description: "Monthly solo dance competitions and cultural events"
    }
  ]

  const danceCategories = [
    { id: 1, title: "Classical Dance", description: "Traditional Indian classical dance forms" },
    { id: 2, title: "Folk Dance", description: "Regional folk dance performances" },
    { id: 3, title: "Contemporary Dance", description: "Modern and contemporary dance styles" },
    { id: 4, title: "Bollywood Dance", description: "Popular Bollywood dance performances" }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Solo Dance Competition
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Express yourself through the art of dance in our solo dance competitions
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Competition Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Participate in solo dance competitions and showcase your talent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {competitionInfo.map((info, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-purple-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dance Categories</h3>
            <p className="text-gray-600">Various dance styles and categories available</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {danceCategories.map((category) => (
              <div key={category.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{category.title}</h4>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SoloDance
