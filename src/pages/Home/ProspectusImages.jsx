import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const ProspectusImages = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      src: "/images/home/01.webp",
      alt: "Prospectus Page 1"
    },
    {
      id: 2,
      src: "/images/home/02.webp",
      alt: "Prospectus Page 2"
    },
    {
      id: 3,
      src: "/images/home/03.webp",
      alt: "Prospectus Page 3"
    }
  ]

  return (
    <>
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {images.map((image) => (
              <div 
                key={image.id}
                className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="w-full bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="hidden w-full min-h-[400px] items-center justify-center bg-gray-100">
                    <div className="text-center text-gray-400">
                      <p className="text-sm">Image loading...</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-7xl w-full max-h-[95vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
            >
              <FaTimes className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[95vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProspectusImages

