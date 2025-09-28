import { FaFileAlt, FaDownload, FaCalendarAlt, FaChartBar, FaEye } from 'react-icons/fa'

const AnnualReport = () => {
  const reportSections = [
    {
      title: "Academic Performance",
      icon: <FaChartBar className="h-8 w-8" />,
      description: "Detailed analysis of academic achievements and student performance metrics"
    },
    {
      title: "Financial Summary",
      icon: <FaFileAlt className="h-8 w-8" />,
      description: "Comprehensive financial report including income, expenses, and investments"
    },
    {
      title: "Infrastructure Development",
      icon: <FaCalendarAlt className="h-8 w-8" />,
      description: "Updates on campus development and facility improvements"
    },
    {
      title: "Student Activities",
      icon: <FaEye className="h-8 w-8" />,
      description: "Overview of extracurricular activities and student engagement programs"
    }
  ]

  const reportYears = [
    { year: "2024", status: "Current", available: true },
    { year: "2023", status: "Available", available: true },
    { year: "2022", status: "Available", available: true },
    { year: "2021", status: "Available", available: true }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Annual Report
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Comprehensive annual reports showcasing our college's achievements and progress
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Report Sections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our annual reports cover various aspects of college operations and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {reportSections.map((section, index) => (
              <div key={index} className="bg-indigo-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-indigo-600 mb-4 flex justify-center">
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 text-sm">{section.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Available Reports</h3>
            <p className="text-gray-600">Download annual reports from previous years</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportYears.map((report) => (
              <div key={report.year} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-gray-900 mb-2">{report.year}</div>
                <div className="text-sm text-gray-600 mb-4">{report.status}</div>
                {report.available ? (
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 w-full transition-colors duration-300">
                    <FaDownload className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                ) : (
                  <button disabled className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg w-full cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AnnualReport
