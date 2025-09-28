import { FaMicrophone, FaUsers } from 'react-icons/fa'

const Auditorium = () => {
  return (
    <div className="">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Auditorium
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            State-of-the-art auditorium equipped with modern facilities
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaMicrophone className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Auditorium</h2>
            <p className="text-gray-600">Content coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Auditorium
