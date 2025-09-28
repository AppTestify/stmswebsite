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

  const upcomingPicnics = [
    { id: 1, title: "Hill Station Visit", date: "2024-12-30", destination: "Mountain Resort" },
    { id: 2, title: "Beach Picnic", date: "2025-01-15", destination: "Coastal Area" },
    { id: 3, title: "Nature Park", date: "2025-02-10", destination: "National Park" }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Picnic Activities
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Enjoy fun-filled picnic trips and outdoor activities with fellow students
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Picnic Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Exciting picnic activities and outdoor adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {picnicActivities.map((activity, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-green-600 mb-4 flex justify-center">
                  {activity.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Picnic
