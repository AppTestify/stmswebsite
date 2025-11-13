import { FaUserTie, FaGraduationCap, FaAward, FaHandshake, FaLightbulb, FaHeart } from 'react-icons/fa'

const PrincipalsOffice = () => {
  return (
    <div className="">
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with indigo tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-indigo-800/80 to-indigo-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Principal's Office
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto drop-shadow-md">
            The central administrative office where leadership guides our mission
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FaUserTie className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Principal's Office</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The heart of our institution where visionary leadership meets academic excellence, 
              guiding our mission to nurture future educators
            </p>
          </div>
          
          {/* Principal's Office Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/principal office/IMG_2205.webp" 
                alt="Principal's Office - Leadership and Administration" 
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <FaUserTie className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-semibold text-xl">Principal's Office</h3>
                <p className="text-indigo-200 text-sm">Leadership hub for academic excellence and institutional vision</p>
              </div>
            </div>
          </div>
          
          {/* Leadership Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-indigo-50 rounded-lg hover:shadow-md transition-shadow duration-300">
              <FaGraduationCap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Excellence</h3>
              <p className="text-gray-600">
                Committed to maintaining the highest standards of teacher education and academic achievement
              </p>
            </div>
            
            <div className="text-center p-6 bg-indigo-50 rounded-lg hover:shadow-md transition-shadow duration-300">
              <FaAward className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Recognition</h3>
              <p className="text-gray-600">
                Celebrating achievements and fostering a culture of excellence among students and faculty
              </p>
            </div>
            
            <div className="text-center p-6 bg-indigo-50 rounded-lg hover:shadow-md transition-shadow duration-300">
              <FaHandshake className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                Building strong relationships with educational institutions and community partners
              </p>
            </div>
          </div>
          
          {/* Vision and Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <FaLightbulb className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be a premier institution of teacher education that produces competent, 
                compassionate, and committed educators who will shape the future of education 
                and contribute meaningfully to society.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <FaHeart className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide quality teacher education through innovative teaching methods, 
                practical training, and character development, preparing educators who are 
                academically sound, professionally competent, and socially responsible.
              </p>
            </div>
          </div>
          
          {/* Leadership Message */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Leadership Message</h3>
              <p className="text-indigo-100 max-w-4xl mx-auto leading-relaxed">
                "As the principal of this esteemed institution, I am committed to fostering an 
                environment where every student can thrive academically and personally. Our office 
                serves as the cornerstone of our educational mission, ensuring that each student 
                receives the guidance and support needed to become exceptional educators who will 
                make a positive impact in classrooms and communities worldwide."
              </p>
              <div className="mt-6">
                <p className="text-indigo-200 font-semibold">- Principal's Office</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrincipalsOffice
