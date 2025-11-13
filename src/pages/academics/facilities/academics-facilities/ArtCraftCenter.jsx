import { FaPalette, FaPaintBrush, FaCut, FaHands } from 'react-icons/fa'

const ArtCraftCenter = () => {
  const artFeatures = [
    {
      title: "Painting Studio",
      icon: <FaPaintBrush className="h-8 w-8" />,
      description: "Space for painting and artistic expression"
    },
    {
      title: "Craft Workshop",
      icon: <FaCut className="h-8 w-8" />,
      description: "Tools and materials for various craft activities"
    },
    {
      title: "Art Supplies",
      icon: <FaPalette className="h-8 w-8" />,
      description: "Comprehensive collection of art materials"
    },
    {
      title: "Handicrafts",
      icon: <FaHands className="h-8 w-8" />,
      description: "Traditional and modern handicraft techniques"
    }
  ]

  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with pink tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/85 via-pink-800/80 to-pink-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-pink-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Art and Craft Center
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto drop-shadow-md">
            Creative space for artistic expression and craft activities
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Art and Craft Images Gallery */}
          <div className="mb-16">
            {/* <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Art and Craft Center</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our vibrant creative space designed to inspire artistic expression, 
                craft activities, and hands-on learning in various art forms
              </p>
            </div> */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/artAndCraft/IMG_7565-500x500.webp" 
                  alt="Art and Craft Studio Activities" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaPaintBrush className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Creative Studio</h3>
                  <p className="text-pink-200 text-sm">Inspiring space for artistic activities</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/artAndCraft/IMG_6717-500x500.webp" 
                  alt="Art and Craft Workshop Environment" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaCut className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Craft Workshop</h3>
                  <p className="text-pink-200 text-sm">Tools and materials for craft activities</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/artAndCraft/IMG_7559-500x500.webp" 
                  alt="Art and Craft Learning Space" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaPalette className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Learning Space</h3>
                  <p className="text-pink-200 text-sm">Comprehensive art supplies and materials</p>
                </div>
              </div>
            </div>
          </div>

          {/* Art Features Section */}
          {/* <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Art and Craft Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {artFeatures.map((feature, index) => (
                <div key={index} className="bg-pink-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-pink-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Art Benefits */}
          {/* <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Art and Craft Center Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-pink-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaPaintBrush className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Creative Expression</h4>
                  <p className="text-gray-600">
                    Encourages students to explore their artistic talents and express creativity through various art forms
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-pink-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaHands className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Skill Development</h4>
                  <p className="text-gray-600">
                    Develops fine motor skills, hand-eye coordination, and artistic techniques through hands-on activities
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-pink-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaPalette className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Cultural Heritage</h4>
                  <p className="text-gray-600">
                    Preserves traditional art forms and handicrafts while encouraging modern artistic innovation
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default ArtCraftCenter
