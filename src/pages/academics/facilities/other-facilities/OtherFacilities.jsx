import { FaCog, FaWifi, FaParking, FaUtensils, FaUsers, FaClipboardCheck, FaBed, FaBuilding, FaBox, FaDoorOpen, FaHome, FaCut } from 'react-icons/fa'

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
          {/* Other Facilities Images Gallery */}
          <div className="mb-16">
            {/* <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Additional Facilities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of additional facilities designed to support 
                campus life, student welfare, and administrative operations
              </p>
            </div> */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/otherFacilities/commonroom.webp" 
                  alt="Common Room for Students" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaUsers className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Common Room</h3>
                  <p className="text-gray-200 text-sm">Relaxation and social space for students</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/otherFacilities/examcontrolroom-Copy.webp" 
                  alt="Exam Control Room" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaClipboardCheck className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Exam Control Room</h3>
                  <p className="text-gray-200 text-sm">Administrative center for examinations</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/otherFacilities/sickroom.webp" 
                  alt="Sick Room Medical Facility" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaBed className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Sick Room</h3>
                  <p className="text-gray-200 text-sm">Medical facility for student healthcare</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/otherFacilities/collegehall.webp" 
                  alt="College Hall for Events" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaBuilding className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">College Hall</h3>
                  <p className="text-gray-200 text-sm">Multi-purpose hall for events and gatherings</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/otherFacilities/storeroom-Copy.webp" 
                  alt="Storage Room" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaBox className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Storage Room</h3>
                  <p className="text-gray-200 text-sm">Secure storage for college equipment</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/otherFacilities/visitorsroom.webp" 
                  alt="Visitors Room" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaDoorOpen className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Visitors Room</h3>
                  <p className="text-gray-200 text-sm">Welcoming space for campus visitors</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/otherFacilities/Baranda.webp" 
                  alt="College Veranda" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaHome className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Veranda</h3>
                  <p className="text-gray-200 text-sm">Outdoor covered space for relaxation</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/otherFacilities/stiching.webp" 
                  alt="Stitching Workshop" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaCut className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Stitching Workshop</h3>
                  <p className="text-gray-200 text-sm">Practical skills training facility</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Facilities Features Section */}
          {/* <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Facilities</h2>
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
          </div> */}

          {/* Other Facilities Benefits */}
          {/* <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Additional Facilities Matter</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gray-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Student Support</h4>
                  <p className="text-gray-600">
                    Comprehensive facilities supporting student life, health, and academic activities
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaBuilding className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Campus Operations</h4>
                  <p className="text-gray-600">
                    Essential facilities for smooth campus operations, events, and administrative functions
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaCog className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Practical Training</h4>
                  <p className="text-gray-600">
                    Workshops and practical facilities for hands-on learning and skill development
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default OtherFacilities
