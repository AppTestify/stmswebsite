import { FaQuoteLeft, FaUser, FaGraduationCap, FaAward, FaHeart } from 'react-icons/fa'

const PrincipalMessage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Principal's Message
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              A message from our esteemed Principal, Dr. Priya Sharma
            </p>
          </div>
        </div>
      </section>

      {/* Principal Profile */}
      <section className="py-20 bg-white">
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

      {/* Principal's Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Principal's Achievements & Vision
            </h3>
            <p className="text-lg text-gray-600">
              A leader committed to educational excellence and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <FaGraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Educational Excellence</h4>
              <p className="text-gray-600 text-sm">
                15+ years of experience in teacher education and educational leadership
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <FaAward className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Awards & Recognition</h4>
              <p className="text-gray-600 text-sm">
                Best Principal Award 2023, State Level Recognition for Educational Innovation
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <FaHeart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Student-Centric Approach</h4>
              <p className="text-gray-600 text-sm">
                Committed to holistic development and student success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join Our Educational Journey
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            Be part of an institution that values excellence, innovation, and student success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default PrincipalMessage
