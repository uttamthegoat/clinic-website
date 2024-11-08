import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { HashLink } from 'react-router-hash-link';
import { orgData } from '../../assets/data';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Desktop Navigation - Left */}
          <div className="hidden lg:flex items-center space-x-8">
            <HashLink 
              smooth 
              to="/#doctors" 
              className="text-gray-700 hover:text-gray-900"
            >
              Meet Our Doctors
            </HashLink>
            <HashLink 
              smooth 
              to="/#why-choose-us" 
              className="text-gray-700 hover:text-gray-900"
            >
              Why Choose Us?
            </HashLink>
          </div>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src={orgData.logo}
              alt="Jay Smiles Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Right */}
          <div className="hidden lg:flex items-center space-x-8">
            <HashLink smooth to="/#common-dental-problems" className="text-gray-700 hover:text-gray-900">
              Common Dental Problems
            </HashLink>
            <HashLink smooth to="/#blogs" className="text-gray-700 hover:text-gray-900">
              Blogs
            </HashLink>
            <Link
              to="/book"
              className="bg-[#FFB5C0] text-white px-6 py-2 rounded-full hover:bg-[#FF9DAA] transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4">
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
  )
}