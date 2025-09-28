import { FaBuilding, FaMapMarkerAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa'

const CollegeView = () => {
  return (
    <div className="">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            College View
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our beautiful campus and modern infrastructure designed for excellence in teacher education
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaBuilding className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">College View</h2>
            <p className="text-gray-600">Content coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CollegeView