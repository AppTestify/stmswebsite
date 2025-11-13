import { Link } from 'react-router-dom'
import { FaEye, FaBullseye, FaHeart, FaUsers, FaGraduationCap, FaArrowRight } from 'react-icons/fa'

const PrincipalVisionMission = () => {
  

  return (
    <section className="py-9 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision, Mission */}
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-5xl">
            {/* Vision */}
            <div className="bg-blue-900/80 border-2 border-blue-400 rounded-xl px-6 py-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full md:w-[400px] md:flex-1 flex flex-col">
              <div className="flex items-center mb-5">
                <div className="bg-blue-500 rounded-full p-3 mr-4 shadow-lg">
                  <FaEye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white leading-relaxed text-base flex-grow">
                To be a premier institution of teacher education that shapes compassionate, innovative, and globally competent educators who will transform the future of education in India and beyond.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-green-900/80 border-2 border-green-400 rounded-xl px-6 py-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full md:w-[400px] md:flex-1 flex flex-col">
              <div className="flex items-center mb-5">
                <div className="bg-green-500 rounded-full p-3 mr-4 shadow-lg">
                  <FaBullseye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-white leading-relaxed text-base flex-grow">
                To provide comprehensive, innovative, and inclusive teacher education that empowers students to become effective educators, critical thinkers, and compassionate leaders in the field of education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrincipalVisionMission

