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
      src: "/images/rangoli/Image (2).jpeg",
      title: "Rangoli Design 1",
      type: "Traditional"
    },
    {
      id: 2,
      src: "/images/rangoli/Image (3).jpeg",
      title: "Rangoli Design 2",
      type: "Modern"
    },
    {
      id: 3,
      src: "/images/rangoli/Image (4).jpeg",
      title: "Rangoli Design 3",
      type: "Festival"
    },
    {
      id: 4,
      src: "/images/rangoli/IMG_6377-500x500.webp",
      title: "Rangoli Design 4",
      type: "Traditional"
    },
    {
      id: 5,
      src: "/images/rangoli/IMG_6393-500x500.webp",
      title: "Rangoli Design 5",
      type: "Festival"
    },
    {
      id: 6,
      src: "/images/rangoli/IMG_6394-500x500.webp",
      title: "Rangoli Design 6",
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
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with pink tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/85 via-pink-800/80 to-pink-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-pink-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Rangoli Competition
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto drop-shadow-md">
            Express your creativity through beautiful rangoli designs and traditional art
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Competition Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our rangoli competitions and showcase your artistic talent
            </p>
          </div> */}
{/* 
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
          </div> */}

          {/* <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rangoli Gallery</h3>
            <p className="text-gray-600">Explore our collection of {rangoliImages.length} beautiful rangoli designs</p>
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {rangoliImages.map((image) => (
              <div key={image.id} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-gray-50 flex items-center justify-center">
                <div className="aspect-[4/3] w-full flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
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
