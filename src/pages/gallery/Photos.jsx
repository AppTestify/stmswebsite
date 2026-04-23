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

  // New organized gallery images
  const galleryImages = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpeg', 'img5.jpeg', 'img6.jpeg', 'img7.jpeg', 'img8.jpeg', 'img9.jpeg', 'img10.jpg', 
    'img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg', 'img16.jpg', 'img17.jpg', 'img18.jpg', 'img19.jpg', 'img20.jpg', 
    'img21.jpg', 'img22.jpg', 'img23.jpg', 'img24.jpg', 'img25.jpg', 'img26.jpg', 'img27.jpg', 'img28.jpg', 'img29.jpg', 'img30.jpg', 
    'img31.jpg', 'img32.jpg', 'img33.jpg', 'img34.jpg', 'img35.jpg', 'img36.jpg', 'img37.jpg', 'img38.jpg', 'img39.jpg', 'img40.jpg', 
    'img41.webp', 'img42.webp', 'img43.webp', 'img44.webp', 'img45.webp', 'img46.webp', 'img47.webp', 'img48.webp', 'img49.webp', 
    'img50.webp', 'img51.webp', 'img52.webp', 'img53.webp', 'img54.webp', 'img55.webp', 'img56.webp', 'img57.webp', 'img58.webp', 
    'img59.webp', 'img60.webp', 'img61.webp', 'img62.webp', 'img63.webp', 'img64.webp', 'img65.webp', 'img66.webp', 'img67.webp', 
    'img68.webp', 'img69.webp', 'img70.webp', 'img71.webp', 'img72.webp', 'img73.webp', 'img74.webp', 'img75.webp', 'img76.webp', 
    'img77.webp', 'img78.webp', 'img79.webp', 'img80.webp', 'img81.webp', 'img82.webp', 'img83.webp', 'img84.webp', 'img85.webp', 
    'img86.webp', 'img87.webp', 'img88.webp'
  ].map((filename, index) => ({
    id: index + 1,
    src: `/images/gallaryImages/${filename}`,
    title: `Gallery Image ${index + 1}`,
    category: index < 22 ? "Campus" : index < 44 ? "Events" : index < 66 ? "Academic" : "Sports"
  }))

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
        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Photo Gallery
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto drop-shadow-md">
            Explore our collection of photos showcasing campus life, events, and activities
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Photo Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through different categories of photos from our college
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {photoCategories.map((category, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-purple-600 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div> */}

          {/* <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Photo Gallery</h3>
            <p className="text-gray-600">Explore our collection of {galleryImages.length} photos from college events and activities</p>
          </div> */}

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="break-inside-avoid bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group shadow-md">
                <div className="relative bg-gray-50">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden w-full aspect-square bg-gray-200 items-center justify-center">
                    <div className="text-center text-gray-500">
                      <FaCamera className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Image not available</p>
                    </div>
                  </div>
                  
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                </div>
                {/* <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{image.title}</h4>
                  <span className="inline-block bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Photos
