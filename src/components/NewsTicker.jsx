import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBullhorn } from 'react-icons/fa'

const NewsTicker = ({ 
  announcements = [
    "Admissions 2024-25: Applications are now open for Primary Teachers Education Course. Apply online at our website.",
    "Annual Sports Meet 2024: Registration for various sports events is now open. Contact the sports department for details.",
    "Library Hours Extended: The college library will remain open till 8 PM on weekdays for student convenience.",
    "Faculty Development Program: Workshop on modern teaching methodologies scheduled for next month.",
    "Campus Placement Drive: Leading schools will be visiting our campus for teacher recruitment. Prepare your portfolios.",
    "Cultural Festival 2024: Annual cultural festival 'Vidya Utsav' will be held next month. Registration forms available at the office.",
    "COLLEGE ACTIVITIES FOR THE ACADEMIC YEAR 2025 – 2026: Important academic activities and events scheduled for the upcoming academic year.",
    "SITTING TIMETABLE OF Second Unit Test 2025: Detailed timetable for the second unit test has been published. Check the notices section for complete schedule."
  ],
  scrollSpeed = 70,
  redirectPath = '/notices',
  className = ''
}) => {
  const [isPaused, setIsPaused] = useState(false)
  const navigate = useNavigate()

  // Join all announcements with separators for continuous scrolling
  const scrollingText = announcements.join(' • ')

  const handleNewsClick = () => {
    if (redirectPath) {
      navigate(redirectPath)
    }
  }

  return (
    <div 
      className={`w-full bg-pink-900 text-white py-2.5 overflow-hidden cursor-pointer transition-colors duration-300 ${className}`}
      onClick={handleNewsClick}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* Megaphone Icon */}
          <div className="flex-shrink-0 mr-3">
            <FaBullhorn className="h-4 w-4 text-orange-300" />
          </div>
          
          {/* Continuous Scrolling Text */}
          <div className="flex-1 overflow-hidden relative">
            <div 
              className="whitespace-nowrap animate-marquee-continuous"
              style={{
                animationDuration: `${scrollSpeed}s`,
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              <span className="text-sm font-bold inline-block px-4">
                {scrollingText}
              </span>
              <span className="text-sm font-bold inline-block px-4">
                {scrollingText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsTicker
