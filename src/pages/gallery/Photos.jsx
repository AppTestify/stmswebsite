import { FaCamera, FaImage, FaDownload, FaEye } from 'react-icons/fa'

const Photos = () => {
  const photoCategories = [
    {
      title: "Campus Life",
      icon: <FaCamera className="h-8 w-8" />,
      description: "Photos capturing daily campus activities and student life"
    },
    {
      title: "Events & Functions",
      icon: <FaImage className="h-8 w-8" />,
      description: "Memorable moments from college events and celebrations"
    },
    {
      title: "Academic Activities",
      icon: <FaEye className="h-8 w-8" />,
      description: "Photos from lectures, labs, and academic programs"
    },
    {
      title: "Sports & Recreation",
      icon: <FaDownload className="h-8 w-8" />,
      description: "Sports events, competitions, and recreational activities"
    }
  ]

  // Generate gallery images from the gallaryImages folder
  const generateGalleryImages = () => {
    const images = []
    for (let i = 1; i <= 64; i++) {
      images.push({
        id: i,
        src: `/images/gallaryImages/img${i}.webp`,
        title: `Gallery Image ${i}`,
        category: i <= 16 ? "Campus" : i <= 32 ? "Events" : i <= 48 ? "Academic" : "Sports"
      })
    }
    return images
  }

  const galleryImages = generateGalleryImages()

  return (
    <div className="">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore our collection of photos showcasing campus life, events, and activities
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Photo Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through different categories of photos from our college
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {photoCategories.map((category, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-purple-600 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Photo Gallery</h3>
            <p className="text-gray-600">Explore our collection of {galleryImages.length} photos from college events and activities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
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
                      <FaCamera className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Image not available</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{image.title}</h4>
                  <span className="inline-block bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Photos
