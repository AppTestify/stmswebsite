import { FaPalette, FaTrophy, FaUsers, FaCalendarAlt } from 'react-icons/fa'

const Rangoli = () => {
  const competitionInfo = [
    {
      title: "Artistic Expression",
      icon: <FaPalette className="h-8 w-8" />,
      description: "Showcase your creativity through beautiful rangoli designs"
    },
    {
      title: "Cultural Heritage",
      icon: <FaTrophy className="h-8 w-8" />,
      description: "Celebrate traditional Indian art forms and cultural values"
    },
    {
      title: "Team Participation",
      icon: <FaUsers className="h-8 w-8" />,
      description: "Individual and group participation categories available"
    },
    {
      title: "Regular Events",
      icon: <FaCalendarAlt className="h-8 w-8" />,
      description: "Monthly rangoli competitions and special festival events"
    }
  ]

  // Real rangoli images from rangoli folder
  const rangoliImages = [
    {
      id: 1,
      src: "/images/rangoli/IMG_6377-500x500.webp",
      title: "Rangoli Design 1",
      type: "Traditional"
    },
    {
      id: 2,
      src: "/images/rangoli/IMG_6390-500x500.webp",
      title: "Rangoli Design 2",
      type: "Modern"
    },
    {
      id: 3,
      src: "/images/rangoli/IMG_6393-500x500.webp",
      title: "Rangoli Design 3",
      type: "Festival"
    },
    {
      id: 4,
      src: "/images/rangoli/IMG_6394-500x500.webp",
      title: "Rangoli Design 4",
      type: "Creative"
    }
  ]

  const upcomingEvents = [
    { id: 1, title: "Diwali Rangoli Competition", date: "2024-12-20", type: "Festival" },
    { id: 2, title: "Monthly Rangoli Contest", date: "2024-12-25", type: "Regular" },
    { id: 3, title: "New Year Rangoli", date: "2025-01-01", type: "Special" }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Rangoli Competition
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Express your creativity through beautiful rangoli designs and traditional art
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Competition Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our rangoli competitions and showcase your artistic talent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {competitionInfo.map((info, index) => (
              <div key={index} className="bg-pink-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-pink-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rangoli Gallery</h3>
            <p className="text-gray-600">Explore our collection of {rangoliImages.length} beautiful rangoli designs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {rangoliImages.map((image) => (
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
                      <FaPalette className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Rangoli image not available</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">{image.title}</h4>
                  <span className="inline-block bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">
                    {image.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
            <p className="text-gray-600">Don't miss these exciting rangoli competitions</p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">Date: {event.date}</p>
                  <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default Rangoli
