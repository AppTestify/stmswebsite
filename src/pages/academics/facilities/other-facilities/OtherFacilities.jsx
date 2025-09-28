import { FaCog, FaWifi, FaParking, FaUtensils } from 'react-icons/fa'

const OtherFacilities = () => {
  const facilities = [
    {
      title: "WiFi Connectivity",
      icon: <FaWifi className="h-8 w-8" />,
      description: "High-speed internet access throughout campus"
    },
    {
      title: "Parking Area",
      icon: <FaParking className="h-8 w-8" />,
      description: "Adequate parking space for vehicles"
    },
    {
      title: "Cafeteria",
      icon: <FaUtensils className="h-8 w-8" />,
      description: "Food and beverage services for students"
    },
    {
      title: "Maintenance",
      icon: <FaCog className="h-8 w-8" />,
      description: "Regular maintenance and upkeep services"
    }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Other Facilities
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Additional facilities and services supporting campus life
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-gray-600 mb-4 flex justify-center">
                  {facility.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OtherFacilities
