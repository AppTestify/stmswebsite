import { FaPlay, FaVideo, FaYoutube, FaDownload } from 'react-icons/fa'

const Videos = () => {
  const videoCategories = [
    {
      title: "College Tour",
      icon: <FaVideo className="h-8 w-8" />,
      description: "Virtual tour of our campus and facilities"
    },
    {
      title: "Events & Functions",
      icon: <FaPlay className="h-8 w-8" />,
      description: "Recordings of college events and celebrations"
    },
    {
      title: "Academic Programs",
      icon: <FaYoutube className="h-8 w-8" />,
      description: "Videos showcasing our academic programs and courses"
    },
    {
      title: "Student Activities",
      icon: <FaDownload className="h-8 w-8" />,
      description: "Student-led activities and cultural programs"
    }
  ]

  // Real videos from gallaryVideos folder
  const galleryVideos = [
    {
      id: 1,
      title: "College Event Video 1",
      src: "/images/gallaryVideos/video1.mp4",
      category: "Events",
      duration: "5:30"
    },
    {
      id: 2,
      title: "College Event Video 2", 
      src: "/images/gallaryVideos/video2.mp4",
      category: "Events",
      duration: "8:20"
    },
    {
      id: 3,
      title: "College Event Video 3",
      src: "/images/gallaryVideos/video4.mp4", 
      category: "Academic",
      duration: "6:15"
    },
    {
      id: 4,
      title: "Teachers Day 2024",
      src: "/images/gallaryVideos/Video-of-teachers-day-2024-1.mp4",
      category: "Celebration",
      duration: "12:45"
    }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Video Gallery
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Watch our collection of videos featuring campus life, events, and achievements
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore different types of videos from our college
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {videoCategories.map((category, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-red-600 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Gallery</h3>
            <p className="text-gray-600">Watch our collection of {galleryVideos.length} videos from college events and activities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 relative">
                  <video
                    src={video.src}
                    controls
                    className="w-full h-full object-cover"
                    poster="/images/video-poster.jpg"
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">{video.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
                      {video.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaPlay className="h-4 w-4 mr-1" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Videos
