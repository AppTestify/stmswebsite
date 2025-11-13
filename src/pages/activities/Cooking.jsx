import { FaUtensils, FaFire, FaUsers, FaTrophy } from 'react-icons/fa'

const Cooking = () => {
  const cookingActivities = [
    {
      title: "Cooking Classes",
      icon: <FaUtensils className="h-8 w-8" />,
      description: "Learn various cooking techniques and recipes from expert chefs"
    },
    {
      title: "Cooking Competitions",
      icon: <FaFire className="h-8 w-8" />,
      description: "Participate in cooking contests and showcase your culinary skills"
    },
    {
      title: "Group Cooking",
      icon: <FaUsers className="h-8 w-8" />,
      description: "Collaborative cooking sessions and team building activities"
    },
    {
      title: "Awards & Recognition",
      icon: <FaTrophy className="h-8 w-8" />,
      description: "Recognition for outstanding culinary achievements and creativity"
    }
  ]

  // Real cooking images from cooking folder
  const cookingImages = [
    {
      id: 1,
      src: "/images/cooking/IMG-20220425-WA0022-500x500.webp",
      title: "Cooking Activity 1",
      type: "Workshop"
    },
    {
      id: 2,
      src: "/images/cooking/IMG_20210911_095641-500x500.webp",
      title: "Cooking Activity 2",
      type: "Class"
    },
    {
      id: 3,
      src: "/images/cooking/IMG_6666-500x500.webp",
      title: "Cooking Activity 3",
      type: "Competition"
    },
    {
      id: 4,
      src: "/images/cooking/IMG_6698-500x500.webp",
      title: "Cooking Activity 4",
      type: "Workshop"
    },
    {
      id: 5,
      src: "/images/cooking/IMG_2612-500x500.webp",
      title: "Cooking Activity 5",
      type: "Class"
    },
    {
      id: 6,
      src: "/images/cooking/IMG_6682-500x500.webp",
      title: "Cooking Activity 6",
      type: "Competition"
    }
  ]

  const upcomingEvents = [
    { id: 1, title: "Traditional Cooking Workshop", date: "2024-12-22", type: "Workshop" },
    { id: 2, title: "Cooking Competition", date: "2024-12-28", type: "Competition" },
    { id: 3, title: "Festival Special Cooking", date: "2025-01-05", type: "Special" }
  ]

  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with orange tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-orange-800/80 to-orange-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Cooking Activities
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto drop-shadow-md">
            Explore the culinary arts through cooking classes, competitions, and workshops
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cooking Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Various cooking activities and programs for students
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {cookingActivities.map((activity, index) => (
              <div key={index} className="bg-orange-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-orange-600 mb-4 flex justify-center">
                  {activity.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            ))}
          </div> */}

          {/* <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cooking Gallery</h3>
            <p className="text-gray-600">Explore our collection of {cookingImages.length} cooking activity photos</p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cookingImages.map((image) => (
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
                      <FaUtensils className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Cooking image not available</p>
                    </div>
                  </div>
                </div>
                {/* <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">{image.title}</h4>
                  <span className="inline-block bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                    {image.type}
                  </span>
                </div> */}
              </div>
            ))}
          </div>

          {/* <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
            <p className="text-gray-600">Don't miss these exciting cooking activities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">Date: {event.date}</p>
                  <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
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

export default Cooking
