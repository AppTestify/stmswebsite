import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NoticeTicker = ({ 
  notices = [
    "Information Notice",
    "Annual Alumni News",
    "Important Announcement",
    "College Updates",
    "Event Notification",
    "Academic Notice"
  ],
  scrollSpeed = 50,
  redirectPath = '/notices',
  className = ''
}) => {
  const [isPaused, setIsPaused] = useState(false)
  const navigate = useNavigate()

  // Join all notices with separators for continuous scrolling
  const scrollingText = notices.join(' • ')

  const handleClick = () => {
    if (redirectPath) {
      navigate(redirectPath)
    }
  }

  return (
    <div 
      className={`w-full bg-purple-900 text-white py-2 overflow-hidden cursor-pointer transition-colors duration-300 border-b border-gray-700 ${className}`}
      onClick={handleClick}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center relative">
          {/* NEW Badge */}
          <div className="flex-shrink-0 mr-4 relative z-10">
            <span className="bg-orange-500 text-black text-[10px] font-bold px-2 py-0.5 rounded border-2 border-black">
              NEW
            </span>
          </div>
          
          {/* Continuous Scrolling Text with Underline */}
          <div className="flex-1 overflow-hidden relative">
            <div 
              className="whitespace-nowrap animate-marquee-continuous"
              style={{
                animationDuration: `${scrollSpeed}s`,
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              <span className="text-sm font-semibold inline-block px-4 underline decoration-white underline-offset-2">
                {scrollingText}
              </span>
              <span className="text-sm font-semibold inline-block px-4 underline decoration-white underline-offset-2">
                {scrollingText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeTicker

