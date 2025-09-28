import { FaMusic, FaMicrophone, FaHeadphones, FaGuitar } from 'react-icons/fa'

const MusicRoom = () => {
  const musicFeatures = [
    {
      title: "Musical Instruments",
      icon: <FaGuitar className="h-8 w-8" />,
      description: "Various musical instruments for learning and practice"
    },
    {
      title: "Recording Studio",
      icon: <FaMicrophone className="h-8 w-8" />,
      description: "Professional recording equipment and facilities"
    },
    {
      title: "Audio Equipment",
      icon: <FaHeadphones className="h-8 w-8" />,
      description: "High-quality sound systems and audio equipment"
    },
    {
      title: "Music Education",
      icon: <FaMusic className="h-8 w-8" />,
      description: "Structured music education and training programs"
    }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Music Room
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Dedicated space for music education and cultural activities
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {musicFeatures.map((feature, index) => (
              <div key={index} className="bg-teal-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-teal-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MusicRoom
