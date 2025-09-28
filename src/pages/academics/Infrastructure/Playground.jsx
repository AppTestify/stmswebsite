import { FaRunning, FaFutbol, FaBasketballBall, FaVolleyballBall } from 'react-icons/fa'

const Playground = () => {
  const sports = [
    {
      name: "Football",
      icon: <FaFutbol className="h-8 w-8" />,
      description: "Full-size football field for matches and practice"
    },
    {
      name: "Basketball",
      icon: <FaBasketballBall className="h-8 w-8" />,
      description: "Basketball court with proper markings"
    },
    {
      name: "Volleyball",
      icon: <FaVolleyballBall className="h-8 w-8" />,
      description: "Volleyball court for recreational activities"
    },
    {
      name: "Running Track",
      icon: <FaRunning className="h-8 w-8" />,
      description: "Track for running and athletics"
    }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Playground
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Spacious playground with modern sports facilities for physical education and recreation
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sports.map((sport, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-green-600 mb-4 flex justify-center">
                  {sport.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{sport.name}</h3>
                <p className="text-gray-600 text-sm">{sport.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Playground
