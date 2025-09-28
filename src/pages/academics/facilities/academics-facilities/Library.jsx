import { FaBook, FaBookOpen, FaSearch, FaUsers } from 'react-icons/fa'

const Library = () => {
  const libraryFeatures = [
    {
      title: "Book Collection",
      icon: <FaBook className="h-8 w-8" />,
      description: "Extensive collection of academic and reference books"
    },
    {
      title: "Reading Area",
      icon: <FaBookOpen className="h-8 w-8" />,
      description: "Quiet reading spaces for students"
    },
    {
      title: "Digital Resources",
      icon: <FaSearch className="h-8 w-8" />,
      description: "Online databases and digital library access"
    },
    {
      title: "Study Rooms",
      icon: <FaUsers className="h-8 w-8" />,
      description: "Group study rooms and individual study spaces"
    }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Library
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Comprehensive library with vast collection of books and digital resources
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {libraryFeatures.map((feature, index) => (
              <div key={index} className="bg-indigo-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-indigo-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Library
