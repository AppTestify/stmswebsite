import { FaUserTie } from 'react-icons/fa'

const PrincipalsOffice = () => {
  return (
    <div className="">
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Principal's Office
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            The central administrative office where leadership guides our mission
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaUserTie className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Principal's Office</h2>
            <p className="text-gray-600">Content coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrincipalsOffice
