import { FaMountain, FaBus, FaCamera, FaUsers } from 'react-icons/fa'

const Picnic = () => {
  const picnicActivities = [
    {
      title: "Nature Trips",
      icon: <FaMountain className="h-8 w-8" />,
      description: "Explore beautiful natural locations and scenic spots"
    },
    {
      title: "Transportation",
      icon: <FaBus className="h-8 w-8" />,
      description: "Comfortable bus transportation to picnic destinations"
    },
    {
      title: "Photography",
      icon: <FaCamera className="h-8 w-8" />,
      description: "Capture memorable moments and create lasting memories"
    },
    {
      title: "Group Activities",
      icon: <FaUsers className="h-8 w-8" />,
      description: "Team building activities and group bonding experiences"
    }
  ]

  // Real picnic images from picnic folder
  const picnicImages = [
    {
      id: 1,
      src: "/images/picnic/IMG_6560-500x500.webp",
      title: "Picnic Activity 1",
      type: "Nature Trip"
    },
    {
      id: 2,
      src: "/images/picnic/IMG_6599-500x500.webp",
      title: "Picnic Activity 2",
      type: "Group Activity"
    },
    {
      id: 3,
      src: "/images/picnic/IMG_6582-500x500.webp",
      title: "Picnic Activity 3",
      type: "Photography"
    },
    {
      id: 4,
      src: "/images/picnic/IMG_6612-500x500.webp",
      title: "Picnic Activity 4",
      type: "Nature Trip"
    },
    {
      id: 5,
      src: "/images/picnic/IMG_6620-500x500.webp",
      title: "Picnic Activity 5",
      type: "Group Activity"
    },
    {
      id: 6,
      src: "/images/picnic/IMG_6551-500x500.webp",
      title: "Picnic Activity 6",
      type: "Photography"
    }
  ]

  const upcomingPicnics = [
    { id: 1, title: "Hill Station Visit", date: "2024-12-30", destination: "Mountain Resort" },
    { id: 2, title: "Beach Picnic", date: "2025-01-15", destination: "Coastal Area" },
    { id: 3, title: "Nature Park", date: "2025-02-10", destination: "National Park" }
  ]

  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with green tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/80 to-green-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-green-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Picnic Activities
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto drop-shadow-md">
            Enjoy fun-filled picnic trips and outdoor activities with fellow students
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Picnic Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Exciting picnic activities and outdoor adventures
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {picnicActivities.map((activity, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-green-600 mb-4 flex justify-center">
                  {activity.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            ))}
          </div> */}

          {/* <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Picnic Gallery</h3>
            <p className="text-gray-600">Explore our collection of {picnicImages.length} picnic activity photos</p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {picnicImages.map((image) => (
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
                      <FaMountain className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Picnic image not available</p>
                    </div>
                  </div>
                </div>
                {/* <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">{image.title}</h4>
                  <span className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                    {image.type}
                  </span>
                </div> */}
              </div>
            ))}
          </div>

          {/* <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Picnics</h3>
            <p className="text-gray-600">Plan your next outdoor adventure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingPicnics.map((picnic) => (
              <div key={picnic.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{picnic.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">Date: {picnic.date}</p>
                  <p className="text-gray-500 text-sm">Destination: {picnic.destination}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default Picnic
