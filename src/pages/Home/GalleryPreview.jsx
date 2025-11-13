import { Link } from 'react-router-dom'
import { FaArrowRight, FaEye } from 'react-icons/fa'

const GalleryPreview = () => {
  // Generate gallery images from the gallaryImages folder (same as Photos page)
  const generateGalleryImages = () => {
    const images = []
    for (let i = 1; i <= 64; i++) {
      images.push({
        id: i,
        src: `/images/gallaryImages/img${i}.webp`,
        title: `Gallery Image ${i}`,
        category: i <= 16 ? "Campus" : i <= 32 ? "Events" : i <= 48 ? "Academic" : "Sports",
        alt: `Gallery Image ${i}`
      })
    }
    return images
  }

  const allGalleryImages = generateGalleryImages()
  // Select 6 diverse images from different categories
  const previewImages = [
    allGalleryImages[0],   // Campus
    allGalleryImages[17],  // Events
    allGalleryImages[33],  // Academic
    allGalleryImages[49],  // Sports
    allGalleryImages[8],   // Campus
    allGalleryImages[25]   // Events
  ]
  
  return (
    <section className="py-12 bg-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">
            Campus Gallery
          </h2>
          <div className="w-20 h-0.5 bg-gray-400 mx-auto mb-2"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our beautiful campus and modern facilities through our photo gallery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {previewImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <FaEye className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {image.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/gallary/photos"
            className="inline-flex items-center px-8 py-4 bg-blue-900 hover:bg-blue-700 text-white font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View Complete Gallery
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview
