import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { orgData } from "../../assets/data";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="header fixed w-full z-20"
      >
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex justify-between items-center h-24 relative">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden z-20"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>

              {/* Logo - Visible on both mobile and desktop */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link to="/">
                  <img
                    src={orgData.logo}
                    alt="Jay Smiles Logo"
                    className="h-16 md:h-24 w-auto"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center justify-between flex-1">
                {/* Left Navigation */}
                <div className="flex items-center space-x-4 ml-4">
                  <HashLink
                    smooth
                    to="/#doctors"
                    className="text-gray-700 hover:text-gray-900 whitespace-nowrap text-sm"
                  >
                    Meet Our Doctors
                  </HashLink>
                  <HashLink
                    smooth
                    to="/#why-choose-us"
                    className="text-gray-700 hover:text-gray-900 whitespace-nowrap text-sm"
                  >
                    Why Choose Us?
                  </HashLink>
                </div>

                {/* Right Navigation */}
                <div className="flex items-center space-x-4 mr-4">
                  <HashLink
                    smooth
                    to="/#common-dental-problems"
                    className="text-gray-700 hover:text-gray-900 whitespace-nowrap text-sm"
                  >
                    Common Dental Problems
                  </HashLink>
                  <HashLink
                    smooth
                    to="/#blogs"
                    className="text-gray-700 hover:text-gray-900 whitespace-nowrap text-sm"
                  >
                    Blogs
                  </HashLink>
                  <Link
                    to="/book"
                    className="bg-[#FFB5C0] text-white px-6 py-2 rounded-full hover:bg-[#FF9DAA] transition-colors whitespace-nowrap text-sm"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden py-4 space-y-4 bg-white">
                <HashLink
                  smooth
                  to="/#doctors"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Meet Our Doctors
                </HashLink>
                <HashLink
                  smooth
                  to="/#why-choose-us"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Choose Us?
                </HashLink>
                <HashLink
                  smooth
                  to="/#common-dental-problems"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Common Dental Problems
                </HashLink>
                <HashLink
                  smooth
                  to="/#blogs"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blogs
                </HashLink>
                <Link
                  to="/book"
                  className="block px-4 py-2 bg-[#FFB5C0] text-white rounded-full text-center mx-4 hover:bg-[#FF9DAA] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book an Appointment
                </Link>
              </div>
            )}
          </div>
        </nav>
      </motion.nav>
    </>
  );
}
