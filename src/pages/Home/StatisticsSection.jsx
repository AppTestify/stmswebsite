const StatisticsSection = () => {
  const statistics = [
    {
      id: 1,
      number: "1940",
      label: "Establishment Year"
    },
    {
      id: 2,
      number: "10000+",
      label: "Students"
    },
    {
      id: 3,
      number: "200+",
      label: "Professional Teachers"
    },
    {
      id: 4,
      number: "50+",
      label: "Courses"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-base md:text-lg text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection

