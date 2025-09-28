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
        <img src="/images/feeStructure.webp" alt="Fee Structure" />
      </section>
    </div>
  )
}

export default FeeStructure
