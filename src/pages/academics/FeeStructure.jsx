import { FaRupeeSign, FaCalendarAlt, FaFileInvoice, FaCreditCard } from 'react-icons/fa'

const FeeStructure = () => {
  const feeInfo = [
    {
      title: "Tuition Fees",
      icon: <FaRupeeSign className="h-8 w-8" />,
      description: "Academic year tuition fees and charges"
    },
    {
      title: "Payment Schedule",
      icon: <FaCalendarAlt className="h-8 w-8" />,
      description: "Important payment dates and deadlines"
    },
    {
      title: "Fee Details",
      icon: <FaFileInvoice className="h-8 w-8" />,
      description: "Detailed breakdown of all fees"
    },
    {
      title: "Payment Methods",
      icon: <FaCreditCard className="h-8 w-8" />,
      description: "Available payment options and methods"
    }
  ]

  return (
    <div className="">
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fee Structure
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Transparent and detailed fee structure for all programs
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {feeInfo.map((info, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-green-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeeStructure
