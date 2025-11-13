import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import NewsTicker from "./NewsTicker";

// Recursive Menu Component for unlimited hierarchy
const RecursiveMenu = ({
  items,
  level = 0,
  activeMenuPath,
  setActiveMenuPath,
  onItemClick,
  isMobile = false,
  parentIndex = "",
}) => {
  const isDesktop = !isMobile;

  const handleMouseEnter = (index) => {
    if (isDesktop && items[index]?.submenu) {
      const newPath = parentIndex ? `${parentIndex}-${index}` : `${index}`;
      setActiveMenuPath(newPath);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      // Keep the parent menu open by going up one level
      const pathParts = activeMenuPath.split("-");
      if (pathParts.length > 1) {
        pathParts.pop();
        setActiveMenuPath(pathParts.join("-"));
      } else {
        setActiveMenuPath(null);
      }
    }
  };

  const handleClick = (index) => {
    if (isMobile && items[index]?.submenu) {
      const newPath = parentIndex ? `${parentIndex}-${index}` : `${index}`;
      setActiveMenuPath(activeMenuPath === newPath ? null : newPath);
    }
    if (onItemClick && !items[index]?.submenu) {
      onItemClick();
    }
  };

  const isMenuActive = (index) => {
    const currentPath = parentIndex ? `${parentIndex}-${index}` : `${index}`;
    return (
      activeMenuPath === currentPath ||
      activeMenuPath?.startsWith(`${currentPath}-`)
    );
  };

  return (
    <div className={level > 0 ? "relative" : ""}>
      {items.map((item, index) => {
        const hasSubmenu = item.submenu && item.submenu.length > 0;
        const isActive = isMenuActive(index);
        const currentPath = parentIndex
          ? `${parentIndex}-${index}`
          : `${index}`;

        return (
          <div key={`${item.name}-${currentPath}`} className="relative">
            <div
              className={`flex items-center justify-between transition-colors cursor-pointer ${
                isMobile
                  ? `px-${
                      4 + level * 2
                    } py-2 text-sm text-white hover:bg-blue-800 ${
                      level > 0 ? "border-l-2 border-blue-700" : ""
                    }`
                  : "px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => level === 0 && handleMouseLeave()}
              onClick={() => handleClick(index)}
            >
              {hasSubmenu ? (
                <span
                  className={`flex-1 font-medium ${
                    isMobile ? "text-white" : ""
                  }`}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={`flex-1 transition-colors ${
                    isMobile
                      ? "text-white hover:text-yellow-300"
                      : "hover:text-blue-600"
                  }`}
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
                        isActive ? "rotate-180" : ""
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
                    ? "ml-4 mt-1 space-y-1 bg-blue-800 rounded-md p-2 border-l-2 border-blue-600"
                    : `absolute bg-white shadow-xl rounded-md border border-gray-200 z-50 min-w-64 ${
                        level === 0 ? "top-0 left-full" : "top-0 left-full"
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
        );
      })}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [desktopMenuPath, setDesktopMenuPath] = useState(null);
  const [mobileMenuPath, setMobileMenuPath] = useState(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setMobileMenuPath(null);
  }, [location]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Principal Message", path: "/principal-message" },
        { name: "Vision & Mission", path: "/vision-mission" },
        { name: "History", path: "/history" },
        { name: "What People Say", path: "/testimonials" },
        { name: "College Anthem", path: "/college-anthem" },
        { name: "Prospectus", path: "/prospectus" },
        { name: "Our Teams & Qualification", path: "/teams-qualification" },
      ],
    },
    {
      name: "Academics",
      path: "/academics",
      dropdown: [
        {
          name: "OUR INFRASTRUCTURE",
          path: "/academics/infrastructure",
          submenu: [
            {
              name: "COLLEGE VIEW",
              path: "/academics/infrastructure/college-view",
            },
            {
              name: "AUDITORIUM",
              path: "/academics/infrastructure/auditorium",
            },
            {
              name: "ADMINISTRATIVE OFFICE",
              path: "/academics/infrastructure/administrative-office",
            },
            {
              name: "PRINCIPAL'S OFFICE",
              path: "/academics/infrastructure/principals-office",
            },
            {
              name: "PLAYGROUND",
              path: "/academics/infrastructure/playground",
            },
            {
              name: "OUR CLASSROOM",
              path: "/academics/infrastructure/classroom",
            },
            {
              name: "GALLERY ROOM",
              path: "/academics/infrastructure/gallery-room",
            },
          ],
        },
        {
          name: "FACILITIES",
          path: "/academics/facilities",
          submenu: [
            {
              name: "ACADEMICS FACILITIES",
              path: "/academics/facilities/academics-facilities",
              submenu: [
                {
                  name: "COMPUTER LABORATORY",
                  path: "/academics/facilities/academics-facilities/computer-laboratory",
                },
                {
                  name: "PHYSICS, CHEMISTRY & BIOLOGY LAB",
                  path: "/academics/facilities/academics-facilities/physics-chemistry-biology-lab",
                },
                {
                  name: "LIBRARY",
                  path: "/academics/facilities/academics-facilities/library",
                },
                {
                  name: "ART AND CRAFT CENTER",
                  path: "/academics/facilities/academics-facilities/art&craft",
                },
                {
                  name: "MUSIC ROOM",
                  path: "/academics/facilities/academics-facilities/musicroom",
                },
              ],
            },
            {
              name: "OTHER FACILITIES",
              path: "/academics/facilities/other-facilities",
              submenu: [
                {
                  name: "CYCLE STAND",
                  path: "/academics/facilities/other-facilities/cycle-stand",
                },
                {
                  name: "GUARD ROOM",
                  path: "/academics/facilities/other-facilities/guard-room",
                },
                {
                  name: "SICK ROOM",
                  path: "/academics/facilities/other-facilities/sick-room",
                },
                {
                  name: "ENTRY GATE",
                  path: "/academics/facilities/other-facilities/entry-gate",
                },
                {
                  name: "OTHER FACILITIES",
                  path: "/academics/facilities/other-facilities/other-facilities",
                },
                {
                  name: "BIOMETRIC ATTENDANCE",
                  path: "/academics/facilities/other-facilities/biometric-attendance",
                },
              ],
            },
          ],
        },
        {
          name: "COLLEGE ACTIVITIES-ACADEMIC YEAR 2025 – 2026",
          path: "/academics/activities-2025-2026",
        },
        {
          name: "FEE STRUCTURE",
          path: "/academics/fee-structure",
        },
      ],
    },
    {
      name: "Admissions",
      path: "/admissions",
      dropdown: [
        {
          name: "WHY CHOOSE OUR COLLEGE",
          path: "/admissions/why-choose-our-college",
        },
        { name: "ONLINE ADMISSION", path: "/admissions/online-admission" },
      ],
    },
    {
      name: "Gallary",
      path: "/gallary",
      dropdown: [
        { name: "Photos", path: "/gallary/photos" },
        { name: "videos", path: "/gallary/videos" },
      ],
    },
    {
      name: "Annual Report",
      path: "/annual-report",
    },
    {
      name: "Affiliation Certificate",
      path: "/affiliation-certificate",
    },
    {
      name: "Activities",
      path: "/activities",
      dropdown: [
        { name: "Awards", path: "/activities/awards" },
        {
          name: "Competitions",
          path: "/activities/competitions",
          submenu: [
            { name: "Rangoli", path: "/activities/competitions/rangoli" },
            { name: "Solo Dance", path: "/activities/competitions/solo-dance" },
          ],
        },
        { name: "Cooking", path: "/activities/cooking" },
        { name: "Picnic", path: "/activities/picnic" },
        { name: "Gardening", path: "/activities/gardening" },
      ],
    },
    { name: "Notices", path: "/notices" },
    { name: "Contact", path: "/contact" },
    { name: "DELED COUNCIL WEBSITE", path: "/deled-council-website" },
  ];

  const handleDesktopMenuEnter = (index) => {
    if (navItems[index].dropdown) {
      setActiveDropdown(index);
      setDesktopMenuPath(null);
    }
  };

  const handleDesktopMenuLeave = () => {
    setActiveDropdown(null);
    setDesktopMenuPath(null);
  };

  const handleMobileMenuToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setMobileMenuPath(null);
  };

  return (
    <>
      <NewsTicker />
      <nav className="w-full z-50 bg-blue-950">
        <div className="max-w-full mx-auto px-1 sm:px-6 lg:px-8">
          {/* Top Section: Logo, College Info, and Notice Board */}
          <div className="flex items-center justify-between py-1">
            {/* Left Side: Hamburger (Mobile/Tablet) + Logo and College Info */}
            <div className="flex items-center space-x-1 flex-1">
              {/* Hamburger Icon for Mobile/Tablet */}
              <div className="lg:hidden flex-shrink-0">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white hover:text-yellow-300 focus:outline-none p-2 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>

              {/* Logo and College Info - Clickable to Home */}
              <Link
                to="/"
                className="flex items-center space-x-3 flex-1 hover:opacity-90 transition-opacity cursor-pointer"
              >
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img
                    src="/images/schoolLogo.webp"
                    alt="College Logo"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>

                {/* College Name and Info */}
                <div className="flex flex-col flex-1 min-w-0">
                  <h1 className="text-base md:text-xl lg:text-2xl font-bold text-white uppercase leading-tight mb-1">
                    ST. TERESA'S PRIMARY TEACHERS EDUCATION COLLEGE
                  </h1>
                  <p className="text-white text-xs md:text-sm">
                    Bettiah, West Champaran, Bihar
                  </p>
                </div>
              </Link>
            </div>

            {/* Right Side: Notice Board - Auto Scrolling (Desktop Only) */}
            {/* <div className="hidden lg:block flex-shrink-0 ml-4">
              <Link to="/notices" className="relative group block">
                <span className="absolute -top-2 -left-2 bg-yellow-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded z-10 border border-black">
                  NEW
                </span>
                <div className="relative w-48 h-8 overflow-hidden">
                  <div className="animate-marquee whitespace-nowrap">
                    <span className="text-white font-bold text-xl uppercase underline decoration-white underline-offset-4 hover:text-yellow-300 transition-colors inline-block mr-12">
                      NOTICE BOARD
                    </span>
                    <span className="text-white font-bold text-xl uppercase underline decoration-white underline-offset-4 hover:text-yellow-300 transition-colors inline-block mr-12">
                      NOTICE BOARD
                    </span>
                    <span className="text-white font-bold text-xl uppercase underline decoration-white underline-offset-4 hover:text-yellow-300 transition-colors inline-block">
                      NOTICE BOARD
                    </span>
                  </div>
                </div>
              </Link>
            </div> */}
          </div>

          {/* Navigation Menu Bar */}
          <div className="border-t border-blue-700">
            {/* Desktop Menu - Wraps to fit screen */}
            <div className="hidden lg:flex items-center justify-center flex-wrap">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2.5 text-sm font-semibold text-white transition-colors whitespace-nowrap hover:bg-blue-800 ${
                      location.pathname === item.path ? "bg-blue-800" : ""
                    }`}
                    onMouseEnter={() => handleDesktopMenuEnter(index)}
                    onMouseLeave={handleDesktopMenuLeave}
                  >
                    {item.name}
                    {item.dropdown && (
                      <FaChevronDown className="ml-1.5 h-3 w-3" />
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

          {/* Mobile/Tablet Sidebar Overlay */}
          {isOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          {/* Mobile/Tablet Sidebar */}
          <div
            className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-blue-900 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-blue-700">
              <h2 className="text-white font-bold text-lg">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-yellow-300 focus:outline-none p-2 transition-colors"
                aria-label="Close menu"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Sidebar Navigation Items */}
            <div className="py-4">
              {navItems.map((item, index) => (
                <div key={item.name} className="border-b border-blue-800">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 text-sm font-semibold text-white transition-colors flex-1 ${
                        location.pathname === item.path
                          ? "bg-blue-800 text-white"
                          : "hover:bg-blue-800"
                      }`}
                      onClick={() => !item.dropdown && setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => handleMobileMenuToggle(index)}
                        className="px-4 py-3 text-white hover:text-yellow-300 transition-colors"
                      >
                        <FaChevronDown
                          className={`h-3 w-3 transform transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === index && (
                    <div className="bg-blue-800">
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
