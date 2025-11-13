import { FaPlay, FaYoutube, FaArrowRight } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const NewProgrammes = () => {
  const navigate = useNavigate()
  const programmes = [
    
    {
      id: 7,
      title: "COMPUTER LABORATORY",
      route: "/academics/facilities/academics-facilities/computer-laboratory",
      thumbnail: "/images/computerLab/33-550x500.webp",
      type: "facility"
    },
    {
      id: 8,
      title: "PHYSICS, CHEMISTRY & BIOLOGY LAB",
      route: "/academics/facilities/academics-facilities/physics-chemistry-biology-lab",
      thumbnail: "/images/PCBLab/IMG_2243-500x500.webp",
      type: "facility"
    },
    {
      id: 9,
      title: "LIBRARY",
      route: "/academics/facilities/academics-facilities/library",
      thumbnail: "/images/library/IMG_2199-500x500.webp",
      type: "facility"
    },
    {
      id: 10,
      title: "ART AND CRAFT CENTER",
      route: "/academics/facilities/academics-facilities/art&craft",
      thumbnail: "/images/artAndCraft/IMG_7565-500x500.webp",
      type: "facility"
    },
    {
      id: 11,
      title: "MUSIC ROOM",
      route: "/academics/facilities/academics-facilities/musicroom",
      thumbnail: "/images/musicRoom/IMG_2253-500x500.webp",
      type: "facility"
    },
    {
      id: 12,
      title: "PLAYGROUND",
      route: "/academics/infrastructure/playground",
      thumbnail: "/images/playground/IMG_2174-550x500.webp",
      type: "facility"
    }
  ]

  return (
    <section className="py-12 px-5 bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
            Facilities
          </h2>
          <div className="w-20 h-0.5 bg-gray-600 mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {programmes.map((programme) => {
            const isFacility = programme.type === "facility"
            
            return (
              <div
                key={programme.id}
                className={`bg-gray-800 border border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-shadow group ${
                  isFacility ? 'cursor-pointer' : ''
                }`}
                onClick={isFacility ? () => navigate(programme.route) : undefined}
              >
                {/* Thumbnail with Play Button or Facility Overlay */}
                <div className="relative aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={programme.thumbnail}
                    alt={programme.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center absolute inset-0 bg-gray-100">
                    {isFacility ? (
                      <FaArrowRight className="h-12 w-12 text-gray-400" />
                    ) : (
                      <FaYoutube className="h-12 w-12 text-gray-400" />
                    )}
                  </div>
                  
                  {/* Play Button Overlay for Programmes */}
                  {!isFacility && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                      <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                        <FaPlay className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Facility Overlay */}
                  {isFacility && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                      <div className="bg-blue-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                        <FaArrowRight className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  )}

                  {/* College Logo Badge */}
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded p-2">
                    <img
                      src="/images/schoolLogo.webp"
                      alt="College Logo"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </div>

                {/* Programme/Facility Title */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white mb-1 line-clamp-1 min-h-[1rem]">
                    {programme.title}
                  </h3>
                  {isFacility ? (
                    <Link
                      to={programme.route}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                    >
                      <span>View Details</span>
                      <FaArrowRight className="h-3 w-3" />
                    </Link>
                  ) : (
                    <a
                      href={programme.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 font-medium text-sm transition-colors"
                    >
                      <FaYoutube className="h-4 w-4" />
                      <span>Watch on YouTube</span>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default NewProgrammes

