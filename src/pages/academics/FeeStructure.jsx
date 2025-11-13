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
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with green tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/80 to-green-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-green-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Fee Structure
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto drop-shadow-md">
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
