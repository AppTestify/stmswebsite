import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const Facilities = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const facilities = [
    {
      id: 1,
      title: "College Entrance",
      image: "/images/entryGate/EntryGate.webp",
      alt: "College Entrance"
    },
    {
      id: 2,
      title: "Library",
      image: "/images/library/Library-500x500.webp",
      alt: "Library"
    },
    {
      id: 3,
      title: "Computer Lab",
      image: "/images/computerLab/clab-550x500.webp",
      alt: "Computer Lab"
    },
    {
      id: 4,
      title: "Classroom",
      image: "/images/clasroom/1-550x500.webp",
      alt: "Classroom"
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-white">
        <section 
          className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        >
          {/* Dark overlay with blue tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-700/85"></div>
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>
          {/* Pattern overlay for texture */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
          }}></div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
                Our Infrastructure
              </h1>
              <div className="w-20 h-0.5 bg-blue-400 mx-auto mb-4"></div>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
                Explore our modern facilities and infrastructure
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facilities.map((facility) => (
                <div 
                  key={facility.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(facility)}
                >
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'flex'
                        }
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center bg-gray-100">
                      <div className="text-center text-gray-400">
                        <p className="text-sm">Image loading...</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-red-600">
                    <h3 className="text-lg font-semibold text-white text-center">
                      {facility.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

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
                src={selectedImage.image}
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

export default Facilities

