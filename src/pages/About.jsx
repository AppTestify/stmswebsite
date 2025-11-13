import { FaGraduationCap, FaUsers, FaAward, FaLightbulb, FaDownload, FaQuoteLeft } from 'react-icons/fa'

const About = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with blue tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            About St. Teresa's College
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
            Committed to excellence in teacher education and shaping the future of education
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Quote Section */}
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 mb-6 italic">
                Time plays a role in almost every decision
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg mb-8">
                <FaQuoteLeft className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  "Education is the most powerful weapon which you can use to change the world"
                </p>
                <p className="text-gray-600">– Nelson Mandela</p>
              </div>
            </div>

            {/* Education Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 leading-relaxed mb-6">
                As Nelson Mandela says, "Education is the most Powerful weapon which you can use to change the world". Education is the key to Eliminating Gender inequality to reducing poverty, to creating sustainable planet, to preventing needless death and illness, and to fostering peace.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Education given as Knowledge of the world around us and changes it into something better. It develops in us a perspective of looking at life. It help us build opinions and have points of view on things in life. People debate over the subject of whether education is the only thing that gives knowledge.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                St. Teresa's Primary Teachers Education College, Bettiah, West Champaran Bihar, is a Catholic Minority College managed by the members of International catholic Women Religious Known as Sister of Mercy of the Holy Cross. The College Offered Primary Teachers Training Certificate course is Primary's Teachers Education. The course is of two years duration and It is conducted in regular Classes. The Academic session of this course is July to May.
              </p>
            </div>

            {/* Who We Are & What We Do */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <FaUsers className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">WHO WE ARE</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  St. Teresa's Primary Teachers Education College, Bettiah, West Champaran Bihar, is a Catholic Minority College managed by the members of International catholic Women Religious Known as Sister of Mercy of the Holy Cross.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <FaGraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">WHAT WE DO</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The College Offered Primary Teachers Training Certificate course is Primary's Teachers Education. The course is of two years duration and It is conducted in regular Classes. The Academic session of this course is July to May.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Principal's Message
              </h2>
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <FaQuoteLeft className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
                  "Welcome to St. Teresa Primary Teachers Education College Bettiah, West Champaran, Bihar, India. This college has a great legacy enshrined in its Motto "Truth and Service," that reflects the institution's vision and values.

For nearly a century, our college has been a beacon of empowerment and education, dedicated to transforming the lives of young women and preparing them for successful careers as educators. Our rich legacy spanning 98 years reflects our commitment to excellence and our passion for fostering knowledgeable, skilled, and compassionate teachers.

Over the years, we have consistently delivered a robust curriculum that combines theoretical knowledge with practical experience, ensuring our trainees are well prepared for the challenges of the classroom.

Our college has focused on empowering young women to realize their potential. We instil confidence and leadership skills, equipping them to take on roles as educators and leaders in society. Over the decades, thousands of our students have successfully embarked on fulfilling careers, becoming inspiring teachers who make a positive impact in schools and society. Their success stories are a testament to the quality of education and training we provide. We believe in the power of education to uplift society.

Our experienced and passionate faculty members are committed to nurturing the next generation of educators. They provide personalized mentorship and guidance, fostering an environment where students can thrive academically.We continually adapt our programs to meet the evolving needs of education. Our commitment to innovation ensures that our trainees are equipped with the latest pedagogical strategies and technologies. As educators, let us remind ourselves that every lesson we teach, every word we say, and every value we model has the power to transform lives.

I invite you all to join us in our mission to educate, empower, and inspire. Together let us continue to shape the future of education and make a lasting difference in society."
                </p>
               
              </div>
            </div>
            <div>
              <img
                src="public/images/principalsMessage.webp"
                alt="Principal's Office"
                className="w-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Vision & Mission
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <FaLightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be a leading institution in teacher education, recognized for excellence in 
                academic programs, innovative teaching methodologies, and commitment to producing 
                competent educators who contribute to the betterment of society.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-full mr-4">
                  <FaAward className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide quality teacher education through innovative curriculum, experienced 
                faculty, modern infrastructure, and practical training that prepares students 
                to become effective, compassionate, and professional educators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our History
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A journey of excellence in teacher education spanning over a decade
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    2008
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Foundation
                    </h3>
                    <p className="text-gray-600">
                      St. Teresa's College was established with a vision to provide quality 
                      teacher education in the region.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    2012
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Recognition
                    </h3>
                    <p className="text-gray-600">
                      Received NCTE recognition and affiliation with the state university.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    2018
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Expansion
                    </h3>
                    <p className="text-gray-600">
                      Expanded infrastructure with modern facilities and increased student capacity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    2024
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Excellence
                    </h3>
                    <p className="text-gray-600">
                      Recognized as one of the leading teacher education institutions in the region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="/images/college-history.jpg"
                alt="College History"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <FaGraduationCap className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Graduates</div>
            </div>
            <div className="text-center">
              <FaUsers className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-100">Expert Faculty</div>
            </div>
            <div className="text-center">
              <FaAward className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <FaLightbulb className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Download Our Prospectus
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get detailed information about our programs, facilities, and admission process.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            <FaDownload className="mr-2" />
            Download Prospectus
          </button>
        </div>
      </section> */}
    </div>
  )
}

export default About
