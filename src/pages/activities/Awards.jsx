import { FaTrophy, FaMedal, FaAward, FaStar, FaCertificate, FaUsers } from 'react-icons/fa'

const Awards = () => {
  const awardCategories = [
    {
      title: "Academic Excellence",
      icon: <FaAward className="h-8 w-8" />,
      description: "Recognition for outstanding academic performance and achievements"
    },
    {
      title: "Sports Achievements",
      icon: <FaTrophy className="h-8 w-8" />,
      description: "Awards for sports competitions and athletic excellence"
    },
    {
      title: "Cultural Programs",
      icon: <FaMedal className="h-8 w-8" />,
      description: "Recognition for participation in cultural events and programs"
    },
    {
      title: "Leadership Awards",
      icon: <FaStar className="h-8 w-8" />,
      description: "Awards for student leadership and community service"
    },
    {
      title: "Special Recognition",
      icon: <FaCertificate className="h-8 w-8" />,
      description: "Special awards for unique contributions and achievements"
    },
    {
      title: "Group Achievements",
      icon: <FaUsers className="h-8 w-8" />,
      description: "Team awards and group recognition programs"
    }
  ]

  const recentAwards = [
    { id: 1, title: "Best Student of the Year", recipient: "Student Name", date: "2024-12-15", category: "Academic" },
    { id: 2, title: "Sports Championship", recipient: "Sports Team", date: "2024-12-10", category: "Sports" },
    { id: 3, title: "Cultural Excellence", recipient: "Cultural Group", date: "2024-12-05", category: "Cultural" },
    { id: 4, title: "Leadership Award", recipient: "Student Leader", date: "2024-11-30", category: "Leadership" }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Awards & Recognition
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Celebrating excellence and achievements of our students and faculty
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Award Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Various categories of awards recognizing different types of achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {awardCategories.map((category, index) => (
              <div key={index} className="bg-yellow-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-yellow-600 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Recent Awards</h3>
            <p className="text-gray-600">Latest awards and recognitions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentAwards.map((award) => (
              <div key={award.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">{award.title}</h4>
                  <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">
                    {award.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Recipient: {award.recipient}</p>
                <p className="text-gray-500 text-xs">Date: {award.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Awards
