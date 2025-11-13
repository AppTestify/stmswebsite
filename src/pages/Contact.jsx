import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: [
        'St. Teresa\'s Primary Teachers Education College',
        'Bettiah, West Champaran',
        'Bihar, India - 845438'
      ]
    },
    {
      icon: FaPhone,
      title: 'Phone',
      details: [
        '06254-241170'
      ]
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: [
        'ptedbth@gmail.com',
      ]
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed'
      ]
    }
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#', color: 'text-blue-600' },
    { icon: FaTwitter, href: '#', color: 'text-blue-400' },
    { icon: FaInstagram, href: '#', color: 'text-pink-600' },
    { icon: FaLinkedin, href: '#', color: 'text-blue-700' }
  ]

  return (
    <div className="">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with teal tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-teal-800/80 to-teal-700/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-teal-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto drop-shadow-md">
            Get in touch with us for any queries or information
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to help you with any questions about our programs and admissions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-teal-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="academic">Academic Information</option>
                      <option value="general">General Information</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Enter your message"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.1234567890!2d84.5042391!3d26.8045359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39936ebee3f9df95%3A0xa1305124c692da01!2sSt%20Teresa%20School%20Rd%2C%20Bettiah%2C%20Bihar%20845438%2C%20India!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="St. Teresa's College Location"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-600 mb-4">
                    St. Teresa's Primary Teachers Education College is located on St. Teresa School Road, 
                    Bettiah, West Champaran, Bihar 845438. We are easily accessible by road and public transport.
                  </p>
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://www.google.com/maps/place/St+Teresa+School+Rd,+Bettiah,+Bihar+845438,+India/@26.804536,84.504239,10z/data=!4m6!3m5!1s0x39936ebee3f9df95:0xa1305124c692da01!8m2!3d26.8045359!4d84.5042391!16s%2Fg%2F1hc0x8fw_?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                    >
                      <FaMapMarkerAlt className="h-4 w-4 mr-2" />
                      View on Google Maps
                    </a>
                    <span className="text-sm text-gray-500">
                      Coordinates: 26.804536°N, 84.504239°E
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300 ${social.color}`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    )
                  })}
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  Stay connected for latest updates and news
                </p>
              </div>

              {/* Quick Contact */}
              {/* <div className="bg-teal-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaPhone className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-gray-700">+91-XXXX-XXXXXX</span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-gray-700">info@stptedbettiah.com</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-gray-700">Mon-Fri: 9:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions and answers about our college
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What are the admission requirements?",
                answer: "For B.Ed, you need graduation with 50% marks. For D.El.Ed, you need 10+2 with 50% marks. Age limits and other criteria apply."
              },
              {
                question: "When does the admission process start?",
                answer: "Admission process typically starts in March-April for the academic year beginning in July."
              },
              {
                question: "What is the fee structure?",
                answer: "Fee structure varies by program. B.Ed costs approximately ₹30,000 per year, while D.El.Ed costs ₹24,000 per year."
              },
              {
                question: "Do you provide hostel facilities?",
                answer: "Yes, we provide safe and comfortable hostel accommodation for outstation students with modern amenities."
              },
              {
                question: "What are the placement opportunities?",
                answer: "We have a 95% placement rate with our graduates working in schools across the region and beyond."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Contact
