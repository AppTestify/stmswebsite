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
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
      </section>
    </div>
  )
}

export default GalleryRoom
