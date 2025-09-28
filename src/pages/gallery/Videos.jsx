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

  const sampleVideos = [
    { id: 1, title: "Campus Virtual Tour", duration: "5:30", category: "Tour" },
    { id: 2, title: "Annual Day Celebration", duration: "12:45", category: "Events" },
    { id: 3, title: "Sports Day Highlights", duration: "8:20", category: "Sports" },
    { id: 4, title: "Academic Excellence", duration: "6:15", category: "Academic" },
    { id: 5, title: "Cultural Festival", duration: "15:30", category: "Cultural" },
    { id: 6, title: "Student Achievements", duration: "4:45", category: "Achievements" }
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured Videos</h3>
            <p className="text-gray-600">Latest and most popular videos from our collection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleVideos.map((video) => (
              <div key={video.id} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
                  <div className="text-center text-gray-500">
                    <FaPlay className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">{video.title}</p>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900">{video.title}</h4>
                  <p className="text-gray-600 text-sm">{video.category}</p>
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
