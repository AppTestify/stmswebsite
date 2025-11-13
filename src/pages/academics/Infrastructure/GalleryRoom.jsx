import { FaImages, FaCamera, FaPalette, FaEye } from 'react-icons/fa'

const GalleryRoom = () => {
  const galleryFeatures = [
    {
      title: "Art Display",
      icon: <FaPalette className="h-8 w-8" />,
      description: "Space for displaying student artwork and projects"
    },
    {
      title: "Photo Gallery",
      icon: <FaCamera className="h-8 w-8" />,
      description: "Photographic displays of college events and activities"
    },
    {
      title: "Exhibition Space",
      icon: <FaImages className="h-8 w-8" />,
      description: "Regular exhibitions and cultural displays"
    },
    {
      title: "Viewing Area",
      icon: <FaEye className="h-8 w-8" />,
      description: "Comfortable viewing area for visitors"
    }
  ]

  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1920)'
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gallery Room
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Dedicated space for showcasing student creativity and college achievements
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Room Images */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Gallery Room</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our dedicated gallery space designed to showcase student creativity, 
                college achievements, and cultural exhibitions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/gallaryRoom/IMG_2237-500x500.webp" 
                  alt="Gallery Room Interior View" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaImages className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Gallery Space</h3>
                  <p className="text-purple-200 text-sm">Professional exhibition area for displays</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/gallaryRoom/IMG_2238-500x500.webp" 
                  alt="Gallery Room Display Area" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaPalette className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Display Area</h3>
                  <p className="text-purple-200 text-sm">Perfect space for art and cultural exhibitions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Gallery Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {galleryFeatures.map((feature, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-purple-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Benefits */}
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Gallery Room Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaPalette className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Student Creativity</h4>
                  <p className="text-gray-600">
                    Showcases student artwork, projects, and creative expressions in a professional setting
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaCamera className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Cultural Heritage</h4>
                  <p className="text-gray-600">
                    Preserves and displays college history, achievements, and cultural events for future generations
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaEye className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Engagement</h4>
                  <p className="text-gray-600">
                    Provides a welcoming space for visitors to explore and appreciate college achievements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryRoom
