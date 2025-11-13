import { FaTrophy, FaMedal, FaAward, FaStar, FaCertificate, FaUsers } from 'react-icons/fa'

const Awards = () => {
  const awardCategories = [
    {
      title: "Academic Excellence",
      icon: <FaAward className="h-8 w-8" />,
      description: "Recognition for outstanding academic performance and achievements"
    },
    {
      title: "Sports Achievements",
      icon: <FaTrophy className="h-8 w-8" />,
      description: "Awards for sports competitions and athletic excellence"
    },
    {
      title: "Cultural Programs",
      icon: <FaMedal className="h-8 w-8" />,
      description: "Recognition for participation in cultural events and programs"
    },
    {
      title: "Leadership Awards",
      icon: <FaStar className="h-8 w-8" />,
      description: "Awards for student leadership and community service"
    },
    {
      title: "Special Recognition",
      icon: <FaCertificate className="h-8 w-8" />,
      description: "Special awards for unique contributions and achievements"
    },
    {
      title: "Group Achievements",
      icon: <FaUsers className="h-8 w-8" />,
      description: "Team awards and group recognition programs"
    }
  ]

  // Generate award images from the awards folder
  const generateAwardImages = () => {
    const images = []
    const imageNumbers = [7220, 7219, 7218, 7217, 7216, 7215, 7213, 7225, 7226, 7228, 7240, 7242, 7244, 7246, 7248, 7251, 7253, 7255, 7259, 7261, 7263, 7266, 7274, 7276, 7289, 7292, 7295, 7296, 7299]
    
    imageNumbers.forEach((num, index) => {
      images.push({
        id: index + 1,
        src: `/images/awards/IMG_${num}.jpg`,
        title: `Award Ceremony ${index + 1}`,
        category: index < 10 ? "Academic" : index < 20 ? "Sports" : "Cultural",
        date: "2024-12-15"
      })
    })
    return images
  }

  const awardImages = generateAwardImages()

  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with yellow/gold tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/85 via-yellow-800/80 to-yellow-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Awards & Recognition
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto drop-shadow-md">
            Celebrating excellence and achievements of our students and faculty
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Award Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Various categories of awards recognizing different types of achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {awardCategories.map((category, index) => (
              <div key={index} className="bg-yellow-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-yellow-600 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Award Gallery</h3>
            <p className="text-gray-600">Explore our collection of {awardImages.length} award ceremony photos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {awardImages.map((award) => (
              <div key={award.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-square bg-gray-200 overflow-hidden">
                  <img
                    src={award.src}
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden w-full h-full bg-gray-200 items-center justify-center">
                    <div className="text-center text-gray-500">
                      <FaTrophy className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Award image not available</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">{award.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">
                      {award.category}
                    </span>
                    <span className="text-gray-500 text-xs">{award.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Awards
