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

  // Google Drive embedded videos
  const galleryVideos = [
    {
      id: 1,
      title: "College Video 1",
      embedUrl: "https://drive.google.com/file/d/18fJQ2DbLoyfYSRmBxBgPdPkBYeAViRlXCNnwWQvHBQ8/preview",
      category: "Events"
    },
    {
      id: 2,
      title: "College Video 2", 
      embedUrl: "https://drive.google.com/file/d/1ffeemkbDlqgo3fxq5Zraj3RErySyVjumeceF6a9qzpk/preview",
      category: "Events"
    },
    {
      id: 3,
      title: "College Video 3",
      embedUrl: "https://drive.google.com/file/d/1ZVuZTL6urj7-Bt2XqHEhfa0LHneHw5T919k6bLT5mHI/preview", 
      category: "Academic"
    },
    {
      id: 4,
      title: "College Video 4",
      embedUrl: "https://drive.google.com/file/d/1T4v7ffgGQGRKwuQbXbwTtsWukiWiyqmx6ecYwzwbrMc/preview",
      category: "Celebration"
    }
  ]

  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with red tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/85 via-red-800/80 to-red-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Video Gallery
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto drop-shadow-md">
            Watch our collection of videos featuring campus life, events, and achievements
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore different types of videos from our college
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {videoCategories.map((category, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-red-600 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div> */}

          {/* <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Gallery</h3>
            <p className="text-gray-600">Watch our collection of {galleryVideos.length} videos from college events and activities</p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 relative">
                  <iframe
                    src={video.embedUrl}
                    className="w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">{video.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
                      {video.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaPlay className="h-4 w-4 mr-1" />
                      <span>Watch Video</span>
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
