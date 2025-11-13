import { FaQuoteLeft, FaSignature } from 'react-icons/fa'

const PrincipalMessage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Principal Message Section */}
      <section 
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1920)'
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
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
              Principal's Message
            </h1>
            <div className="w-20 h-0.5 bg-blue-400 mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
              A message from our Principal
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Principal Image Section */}
            <div className="lg:col-span-4">
              <div className="bg-white border border-gray-200 p-3 shadow-sm">
                <img
                  src="/images/principalsMessage.webp"
                  alt="SR. PRAFULLA PANNA, Principal"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-base md:text-lg font-serif text-gray-900 mb-2 font-semibold">
                  SR. PRAFULLA PANNA
                </h3>
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Principal</p>
                <div className="w-16 h-px bg-gray-300 mx-auto mb-3"></div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  St. Teresa's Primary Teachers Education College
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Bettiah, West Champaran, Bihar
                </p>
              </div>
            </div>

            {/* Message Content Section */}
            <div className="lg:col-span-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaQuoteLeft className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <p className="text-sm text-gray-600 italic font-serif">
                    A message from the Principal
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-[9px] md:text-[10.5px] leading-5 font-serif">
                  Welcome to <strong className="font-semibold text-gray-900">St. Teresa Primary Teachers Education College</strong> Bettiah, West Champaran, Bihar, India. This college has a great legacy enshrined in its Motto <em className="italic text-gray-800">"Truth and Service,"</em> that reflects the institution's vision and values.
                </p>
                
                <p className="text-[9px] md:text-[10.5px] leading-5 font-serif">
                  For nearly a century, our college has been a beacon of empowerment and education, dedicated to transforming the lives of young women and preparing them for successful careers as educators. Our rich legacy spanning <strong className="font-semibold text-gray-900">98 years</strong> reflects our commitment to excellence and our passion for fostering knowledgeable, skilled, and compassionate teachers.
                </p>
                
                <p className="text-[9px] md:text-[10.5px] leading-5 font-serif">
                  Over the years, we have consistently delivered a robust curriculum that combines theoretical knowledge with practical experience, ensuring our trainees are well prepared for the challenges of the classroom.
                </p>
                
                <p className="text-[9px] md:text-[10.5px] leading-5 font-serif">
                  Our college has focused on empowering young women to realize their potential. We instil confidence and leadership skills, equipping them to take on roles as educators and leaders in society. Over the decades, thousands of our students have successfully embarked on fulfilling careers, becoming inspiring teachers who make a positive impact in schools and society. Their success stories are a testament to the quality of education and training we provide. We believe in the power of education to uplift society.
                </p>
                
                <p className="text-[9px] md:text-[10.5px] leading-5 font-serif">
                  Our experienced and passionate faculty members are committed to nurturing the next generation of educators. They provide personalized mentorship and guidance, fostering an environment where students can thrive academically. We continually adapt our programs to meet the evolving needs of education. Our commitment to innovation ensures that our trainees are equipped with the latest pedagogical strategies and technologies. As educators, let us remind ourselves that every lesson we teach, every word we say, and every value we model has the power to transform lives.
                </p>
                
                <p className="text-[9px] md:text-[10.5px] leading-5 font-serif font-semibold text-gray-900 pt-2">
                  I invite you all to join us in our mission to educate, empower, and inspire. Together let us continue to shape the future of education and make a lasting difference in society.
                </p>
              </div>

              {/* Signature Section */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="flex flex-col items-end">
                  <div className="mb-2">
                    <FaSignature className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-serif font-semibold text-gray-900 mb-1">
                      SR. PRAFULLA PANNA
                    </p>
                    <p className="text-sm text-gray-600 uppercase tracking-wide mb-1">Principal</p>
                    <p className="text-xs text-gray-500 mt-2">
                      St. Teresa's Primary Teachers Education College
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrincipalMessage
