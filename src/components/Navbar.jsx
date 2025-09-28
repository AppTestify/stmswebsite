import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa'

// Recursive Menu Component for unlimited hierarchy
const RecursiveMenu = ({ 
  items, 
  level = 0, 
  activeMenuPath, 
  setActiveMenuPath, 
  onItemClick, 
  isMobile = false,
  parentIndex = ""
}) => {
  const isDesktop = !isMobile
  
  const handleMouseEnter = (index) => {
    if (isDesktop && items[index]?.submenu) {
      const newPath = parentIndex ? `${parentIndex}-${index}` : `${index}`
      setActiveMenuPath(newPath)
    }
  }

  const handleMouseLeave = () => {
    if (isDesktop) {
      // Keep the parent menu open by going up one level
      const pathParts = activeMenuPath.split('-')
      if (pathParts.length > 1) {
        pathParts.pop()
        setActiveMenuPath(pathParts.join('-'))
      } else {
        setActiveMenuPath(null)
      }
    }
  }

  const handleClick = (index) => {
    if (isMobile && items[index]?.submenu) {
      const newPath = parentIndex ? `${parentIndex}-${index}` : `${index}`
      setActiveMenuPath(activeMenuPath === newPath ? null : newPath)
    }
    if (onItemClick && !items[index]?.submenu) {
      onItemClick()
    }
  }

  const isMenuActive = (index) => {
    const currentPath = parentIndex ? `${parentIndex}-${index}` : `${index}`
    return activeMenuPath === currentPath || activeMenuPath?.startsWith(`${currentPath}-`)
  }

  return (
    <div className={level > 0 ? "relative" : ""}>
      {items.map((item, index) => {
        const hasSubmenu = item.submenu && item.submenu.length > 0
        const isActive = isMenuActive(index)
        const currentPath = parentIndex ? `${parentIndex}-${index}` : `${index}`
        
        return (
          <div key={`${item.name}-${currentPath}`} className="relative">
            <div 
              className={`flex items-center justify-between transition-colors cursor-pointer ${
                isMobile 
                  ? `px-${4 + level * 2} py-2 text-sm hover:bg-blue-50 hover:text-blue-600 ${
                      level > 0 ? 'border-l-2 border-gray-200' : ''
                    }`
                  : 'px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => level === 0 && handleMouseLeave()}
              onClick={() => handleClick(index)}
            >
              {hasSubmenu ? (
                <span className="flex-1 font-medium">{item.name}</span>
              ) : (
                <Link
                  to={item.path}
                  className="flex-1 hover:text-blue-600 transition-colors"
                  onClick={() => onItemClick && onItemClick()}
                >
                  {item.name}
                </Link>
              )}
              
              {hasSubmenu && (
                <div className="">
                  {isMobile ? (
                    <FaChevronDown 
                      className={`h-3 w-3 transform transition-transform duration-200 ${
                        isActive ? 'rotate-180' : ''
                      }`} 
                    />
                  ) : (
                    <FaChevronRight className="h-3 w-3" />
                  )}
                </div>
              )}
            </div>
            
            {/* Recursive Submenu */}
            {hasSubmenu && isActive && (
              <div 
                className={
                  isMobile 
                    ? "ml-4 mt-1 space-y-1 bg-gray-50 rounded-md p-2 border-l-2 border-blue-200"
                    : `absolute bg-white shadow-xl rounded-md border border-gray-200 z-50 min-w-64 ${
                        level === 0 
                          ? "top-0 left-full" 
                          : "top-0 left-full"
                      }`
                }
                onMouseEnter={() => isDesktop && setActiveMenuPath(currentPath)}
                onMouseLeave={() => isDesktop && handleMouseLeave()}
              >
                {isDesktop && <div className="py-1" />}
                <RecursiveMenu 
                  items={item.submenu}
                  level={level + 1}
                  activeMenuPath={activeMenuPath}
                  setActiveMenuPath={setActiveMenuPath}
                  onItemClick={onItemClick}
                  isMobile={isMobile}
                  parentIndex={currentPath}
                />
                {isDesktop && <div className="py-1" />}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [desktopMenuPath, setDesktopMenuPath] = useState(null)
  const [mobileMenuPath, setMobileMenuPath] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setMobileMenuPath(null)
  }, [location])

  const navItems = [
    // { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'Principal Message', path: '/principal-message' },
        { name: 'Vision & Mission', path: '/vision-mission' },
        { name: 'History', path: '/history' },
        { name: 'What People Say', path: '/testimonials' },
        { name: 'College Anthem', path: '/college-anthem' },
        { name: 'Prospectus', path: '/prospectus' },
        { name: 'Our Teams & Qualification', path: '/teams-qualification' }
      ]
    },
    { 
      name: 'Academics', 
      // path: '/academics',
      dropdown: [
        { 
          name: 'OUR INFRASTRUCTURE', 
          path: '/academics/infrastructure',
          submenu: [
            { name: 'COLLEGE VIEW', path: '/academics/infrastructure/college-view' },
            { name: 'AUDITORIUM', path: '/academics/infrastructure/auditorium' },
            { name: 'ADMINISTRATIVE OFFICE', path: '/academics/infrastructure/administrative-office' },
            { name: 'PRINCIPAL\'S OFFICE', path: '/academics/infrastructure/principals-office' },
            { name: 'PLAYGROUND', path: '/academics/infrastructure/playground' },
            { name: 'OUR CLASSROOM', path: '/academics/infrastructure/classroom' },
            { name: 'GALLERY ROOM', path: '/academics/infrastructure/gallery-room' }
          ]
        },
        { 
          name: 'FACILITIES', 
          path: '/academics/facilities',
          submenu: [
            { 
              name: 'ACADEMICS FACILITIES', 
              path: '/academics/facilities/academics-facilities',
              submenu: [
                { name: 'COMPUTER LABORATORY', path: '/academics/facilities/academics-facilities/computer-laboratory' },
                { name: 'PHYSICS, CHEMISTRY & BIOLOGY LAB', path: '/academics/facilities/academics-facilities/physics-chemistry-biology-lab' },
                { name: 'LIBRARY', path: '/academics/facilities/academics-facilities/library' },
                { name: 'ART AND CRAFT CENTER', path: '/academics/facilities/academics-facilities/art&craft' },
                { name: 'MUSIC ROOM', path: '/academics/facilities/academics-facilities/musicroom' },
              ]
            },
            { 
              name: 'OTHER FACILITIES', 
              path: '/academics/facilities/other-facilities',
              submenu: [
                { name: 'CYCLE STAND', path: '/academics/facilities/other-facilities/cycle-stand' },
                { name: 'GUARD ROOM', path: '/academics/facilities/other-facilities/guard-room' },
                { name: 'SICK ROOM', path: '/academics/facilities/other-facilities/sick-room' },
                { name: 'ENTRY GATE', path: '/academics/facilities/other-facilities/entry-gate' },
                { name: 'OTHER FACILITIES', path: '/academics/facilities/other-facilities/other-facilities' },
                { name: 'BIOMETRIC ATTENDANCE', path: '/academics/facilities/other-facilities/biometric-attendance' }
              ]
            }
          ]
        },
        { 
          name: 'COLLEGE ACTIVITIES-ACADEMIC YEAR 2024 – 2025', 
          path: '/academics/activities-2024-2025'
        },
        { 
          name: 'FEE STRUCTURE', 
          path: '/academics/fee-structure'
        }
      ]
    },
    { 
      name: 'Admissions', 
      path: '/admissions',
      dropdown: [
        { name: 'WHY CHOOSE OUR COLLEGE', path: '/admissions/why-choose-our-college' },
        { name: 'ONLINE ADMISSION', path: '/admissions/online-admission' },
      ]
    },
    { 
      name: 'Gallary', 
      path: '/gallary',
      dropdown: [
        { name: 'Photos', path: '/gallary/photos' },
        { name: 'videos', path: '/gallary/videos' },
      ]
    },
    { 
      name: 'Annual Report', 
      path: '/annual-report'
    },
    { 
      name: 'Affiliation Certificate', 
      path: '/affiliation-certificate'
    },
    { name: 'Activities', path: '/activities',
      dropdown: [
        { name: 'Awards', path: '/activities/awards' },
        { name: 'Competitions', path: '/activities/competitions',
          submenu: [
            { name: 'Rangoli', path: '/activities/competitions/rangoli' },
            { name: 'Solo Dance', path: '/activities/competitions/solo-dance' }
          ]
         },
        { name: 'Cooking', path: '/activities/cooking' },
        { name: 'Picnic', path: '/activities/picnic' },
        { name: 'Gardening', path: '/activities/gardening' },
      ]
     },
    { name: 'Notices', path: '/notices' },
    { name: 'Contact', path: '/contact' },
    { name: 'DELED COUNCIL WEBSITE', path: '/deled-council-website' }
  ]

  const handleDesktopMenuEnter = (index) => {
    if (navItems[index].dropdown) {
      setActiveDropdown(index)
      setDesktopMenuPath(null)
    }
  }

  const handleDesktopMenuLeave = () => {
    setActiveDropdown(null)
    setDesktopMenuPath(null)
  }

  const handleMobileMenuToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
    setMobileMenuPath(null)
  }

  return (
    <>
      
      <nav className={`w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          {/* University Branding and Navigation */}
          <div className="flex items-center justify-between py-1">
            <Link to="/" className="flex items-center">
              {/* Logo */}
              <div className="flex-shrink-0 mr-4">
                <img src="/images/schoolLogo.webp" alt="Logo" className="w-16 h-16" />
              </div>
              {/* University Name */}
              <div className="flex flex-col">
                <div className="text-xs font-bold text-blue-800 leading-tight">
                  ST. TERESA'S PRIMARY TEACHERS EDUCATION COLLEGE
                </div>
                <div className="text-xs text-blue-700 font-medium">
                  Bettiah, West Champaran, Bihar
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center">
                {navItems.map((item, index) => (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.path}
                      className={`flex items-center px-2 py-2 text-xs font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      onMouseEnter={() => handleDesktopMenuEnter(index)}
                      onMouseLeave={handleDesktopMenuLeave}
                    >
                      {item.name}
                      {item.dropdown && (
                        <FaChevronDown className="ml-1 h-3 w-3" />
                      )}
                    </Link>
                    
                    {/* Desktop Dropdown Menu */}
                    {item.dropdown && activeDropdown === index && (
                      <div 
                        className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-md border border-gray-200 z-50 transform transition-all duration-200"
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={handleDesktopMenuLeave}
                      >
                        <RecursiveMenu 
                          items={item.dropdown}
                          level={0}
                          activeMenuPath={desktopMenuPath}
                          setActiveMenuPath={setDesktopMenuPath}
                          isMobile={false}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="py-4 space-y-1 max-h-96 overflow-y-auto">
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        className={`block px-4 py-2 text-base font-medium transition-colors flex-1 ${
                          location.pathname === item.path
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                        onClick={() => !item.dropdown && setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <button
                          onClick={() => handleMobileMenuToggle(index)}
                          className="px-4 py-2 text-gray-700 hover:text-blue-600"
                        >
                          <FaChevronDown className={`h-3 w-3 transform transition-transform duration-200 ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`} />
                        </button>
                      )}
                    </div>
                    {item.dropdown && activeDropdown === index && (
                      <div className="mt-2">
                        <RecursiveMenu 
                          items={item.dropdown}
                          level={0}
                          activeMenuPath={mobileMenuPath}
                          setActiveMenuPath={setMobileMenuPath}
                          onItemClick={() => setIsOpen(false)}
                          isMobile={true}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar