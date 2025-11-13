import { FaGraduationCap } from 'react-icons/fa'

const Academics = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg?auto=compress&cs=tinysrgb&w=1920)'
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
            Academic Programs
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto drop-shadow-md">
            Comprehensive teacher education programs designed to prepare competent educators
          </p>
        </div>
      </section>

      {/* D.El.Ed Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="h-10 w-10 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Diploma in Elementary Education (Bihar D.El.Ed)
                </h2>
              </div>
            </div>
            
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Diploma in Elementary Education (D.El.Ed) is a 2-year professional course designed for individuals aspiring to become primary and upper primary school teachers in Bihar.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Admission Process
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The admission process begins with an entrance examination conducted by the Bihar School Examination Board (BSEB), Patna. Candidates who qualify in the entrance exam proceed to the counselling stage, where they select preferred colleges. Based on merit and availability, the final college allotment is done by BSEB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Academics
