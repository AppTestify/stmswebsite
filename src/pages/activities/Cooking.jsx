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

  const upcomingEvents = [
    { id: 1, title: "Traditional Cooking Workshop", date: "2024-12-22", type: "Workshop" },
    { id: 2, title: "Cooking Competition", date: "2024-12-28", type: "Competition" },
    { id: 3, title: "Festival Special Cooking", date: "2025-01-05", type: "Special" }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cooking Activities
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Explore the culinary arts through cooking classes, competitions, and workshops
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cooking Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Various cooking activities and programs for students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {cookingActivities.map((activity, index) => (
              <div key={index} className="bg-orange-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-orange-600 mb-4 flex justify-center">
                  {activity.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cooking
