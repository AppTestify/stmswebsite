import { FaSeedling, FaLeaf, FaTree, FaWater } from 'react-icons/fa'

const Gardening = () => {
  const gardeningActivities = [
    {
      title: "Plant Care",
      icon: <FaLeaf className="h-8 w-8" />,
      description: "Learn proper plant care techniques and maintenance"
    },
    {
      title: "Seed Planting",
      icon: <FaSeedling className="h-8 w-8" />,
      description: "Plant seeds and watch them grow into beautiful plants"
    },
    {
      title: "Tree Planting",
      icon: <FaTree className="h-8 w-8" />,
      description: "Participate in tree planting activities and environmental conservation"
    },
    {
      title: "Watering & Maintenance",
      icon: <FaWater className="h-8 w-8" />,
      description: "Regular watering and maintenance of garden plants"
    }
  ]

  // Real gardening images from gardening folder
  const gardeningImages = [
    {
      id: 1,
      src: "/images/gardening/g1-500x500.webp",
      title: "Gardening Activity 1",
      type: "Plant Care"
    },
    {
      id: 2,
      src: "/images/gardening/g2-500x500.webp",
      title: "Gardening Activity 2",
      type: "Seed Planting"
    },
    {
      id: 3,
      src: "/images/gardening/g3-500x500.webp",
      title: "Gardening Activity 3",
      type: "Tree Planting"
    }
  ]

  const gardenProjects = [
    { id: 1, title: "Herb Garden", description: "Growing medicinal and culinary herbs" },
    { id: 2, title: "Flower Garden", description: "Beautiful flowering plants and decorative flowers" },
    { id: 3, title: "Vegetable Garden", description: "Growing fresh vegetables and organic produce" },
    { id: 4, title: "Tree Nursery", description: "Nurturing young trees for future planting" }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gardening Activities
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Connect with nature through gardening activities and environmental conservation
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gardening Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Various gardening activities and environmental programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {gardeningActivities.map((activity, index) => (
              <div key={index} className="bg-emerald-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-emerald-600 mb-4 flex justify-center">
                  {activity.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gardening Gallery</h3>
            <p className="text-gray-600">Explore our collection of {gardeningImages.length} gardening activity photos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {gardeningImages.map((image) => (
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
                      <FaSeedling className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Gardening image not available</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">{image.title}</h4>
                  <span className="inline-block bg-emerald-100 text-emerald-600 text-xs px-2 py-1 rounded-full">
                    {image.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Garden Projects</h3>
            <p className="text-gray-600">Ongoing gardening projects and initiatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gardenProjects.map((project) => (
              <div key={project.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gardening
