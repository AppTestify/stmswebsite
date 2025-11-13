import { FaFilePdf, FaDownload } from 'react-icons/fa'

const Activities = () => {
  const pdfUrl = "/images/activities/ACTIVITIES 2025-2026.pdf"

  return (
    <div className="min-h-screen bg-white">
      {/* Page Title */}
      <section 
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        {/* Dark overlay with blue/indigo tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 via-indigo-700/80 to-blue-600/85"></div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500"></div>
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              College Activities
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
              Academic Year 2025-2026
            </p>
          </div>
        </div>
      </section>

      {/* PDF Display Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Download Button */}
          <div className="mb-6 flex justify-center">
            <a
              href={pdfUrl}
              download="ACTIVITIES 2025-2026.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <FaDownload className="mr-2" />
              Download PDF
            </a>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center">
              <FaFilePdf className="text-red-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                ACTIVITIES 2025-2026.pdf
              </span>
            </div>
            <div className="w-full" style={{ height: '80vh' }}>
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full border-0"
                title="Activities 2025-2026 PDF"
              >
                <p className="p-8 text-center text-gray-600">
                  Your browser does not support PDFs. 
                  <a 
                    href={pdfUrl} 
                    download
                    className="text-blue-600 hover:text-blue-800 underline ml-2"
                  >
                    Download the PDF instead
                  </a>
                </p>
              </iframe>
            </div>
          </div>

          {/* Alternative View Options */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Having trouble viewing the PDF? 
            </p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Open in new tab
              <FaFilePdf className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Activities

