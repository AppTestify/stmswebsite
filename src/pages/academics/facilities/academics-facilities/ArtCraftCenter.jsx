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
      <section className="bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Art and Craft Center
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Creative space for artistic expression and craft activities
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </div>
  )
}

export default ArtCraftCenter
