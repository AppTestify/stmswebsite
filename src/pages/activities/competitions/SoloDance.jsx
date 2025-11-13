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

  // Real solo dance images from solodance folder
  const soloDanceImages = [
    {
      id: 1,
      src: "/images/solodance/IMG_6163-Copy-500x500.webp",
      title: "Solo Dance Performance 1",
      type: "Classical"
    },
    {
      id: 2,
      src: "/images/solodance/IMG_6185-500x500.webp",
      title: "Solo Dance Performance 2",
      type: "Folk"
    },
    {
      id: 3,
      src: "/images/solodance/IMG_6225-500x500.webp",
      title: "Solo Dance Performance 3",
      type: "Contemporary"
    },
    {
      id: 4,
      src: "/images/solodance/IMG_6318-500x500.webp",
      title: "Solo Dance Performance 4",
      type: "Bollywood"
    },
    {
      id: 5,
      src: "/images/solodance/IMG_6155-500x500.webp",
      title: "Solo Dance Performance 5",
      type: "Classical"
    },
    {
      id: 6,
      src: "/images/solodance/IMG_6340-500x500.webp",
      title: "Solo Dance Performance 6",
      type: "Folk"
    },
    {
      id: 7,
      src: "/images/solodance/IMG_6342-500x500.webp",
      title: "Solo Dance Performance 7",
      type: "Contemporary"
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
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with purple tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-purple-800/80 to-purple-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Solo Dance Competition
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto drop-shadow-md">
            Express yourself through the art of dance in our solo dance competitions
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Competition Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Participate in solo dance competitions and showcase your talent
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {competitionInfo.map((info, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-purple-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div> */}

          {/* <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Solo Dance Gallery</h3>
            <p className="text-gray-600">Explore our collection of {soloDanceImages.length} solo dance performance photos</p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {soloDanceImages.map((image) => (
              <div key={image.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-square bg-gray-200 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden w-full h-full bg-gray-200 items-center justify-center">
                    <div className="text-center text-gray-500">
                      <FaMusic className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Dance image not available</p>
                    </div>
                  </div>
                </div>
                {/* <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">{image.title}</h4>
                  <span className="inline-block bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                    {image.type}
                  </span>
                </div> */}
              </div>
            ))}
          </div>

          {/* <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dance Categories</h3>
            <p className="text-gray-600">Various dance styles and categories available</p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {danceCategories.map((category) => (
              <div key={category.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{category.title}</h4>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default SoloDance
