import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBars,
  faTimes,
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";
import { orgData } from "../../assets/data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary-dark-bkgrnd text-primary-light-text py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold text-primary-light-text">
          <img src={orgData.logo} alt="logo" className="w-auto h-14 md:h-20" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-4 lg:space-x-12 mx-4">
          <Link
            to="/about"
            className="text-primary-light-text hover:text-secondary-light-text transition-colors text-xl"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-primary-light-text hover:text-secondary-light-text transition-colors text-xl"
          >
            Services
          </Link>
          <Link
            to="/reviews"
            className="text-primary-light-text hover:text-secondary-light-text transition-colors text-xl"
          >
            Reviews
          </Link>
          <Link
            to="/contact"
            className="text-primary-light-text hover:text-secondary-light-text transition-colors text-xl"
          >
            Contact
          </Link>
          <Link
            to="/resources"
            className="text-primary-light-text hover:text-secondary-light-text transition-colors text-xl"
          >
            Resources
          </Link>
        </div>

        {/* Phone Number and Book Now Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={`tel:${orgData.phone}`}
            className="flex items-center bg-transparent hover:bg-secondary-dark-bkgrnd text-primary-light-text font-semibold hover:text-primary-light-text py-2 px-4 border border-secondary-dark-bkgrnd hover:border-transparent rounded transition-all"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="mr-2 hover:text-secondary-light-text invert"
            />
            <span className="hidden lg:block text-primary-light-text hover:text-secondary-light-text transition-colors">
              {orgData.phone}
            </span>
            <span className="block lg:hidden text-primary-light-text hover:text-secondary-light-text transition-colors">
              Call Us
            </span>
          </a>
          <Link
            to="/book"
            className="bg-transparent hover:bg-secondary-dark-bkgrnd text-primary-light-text font-semibold hover:text-primary-light-text py-2 px-4 border border-secondary-dark-bkgrnd hover:border-transparent rounded transition-all"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu and Phone Buttons */}
        <div className="md:hidden flex items-center space-x-2">
          <a
            href={`tel:${orgData.phone}`}
            className="text-primary-light-text hover:text-secondary-light-text transition-colors p-2"
          >
            <FontAwesomeIcon icon={faMobilePhone} size="lg" className="invert" />
            <span className="sr-only">Call us</span>
          </a>
          <button
            onClick={toggleMenu}
            className="text-primary-light-text hover:text-secondary-light-text transition-colors p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" className="invert" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 absolute left-0 right-0 bg-primary-dark-bkgrnd px-6 py-4 shadow-md z-10">
          <Link
            to="/about"
            className="block text-primary-light-text hover:text-secondary-light-text transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-primary-light-text hover:text-secondary-light-text transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/reviews"
            className="block text-primary-light-text hover:text-secondary-light-text transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            to="/contact"
            className="block text-primary-light-text hover:text-secondary-light-text transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/resources"
            className="block text-primary-light-text hover:text-secondary-light-text transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </Link>
          <a
            href={`tel:${orgData.phone}`}
            className="block text-primary-light-text hover:text-secondary-light-text transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2 invert" />
            {orgData.phone}
          </a>
          <Link
            to="/book"
            className="block bg-secondary-dark-bkgrnd px-4 py-2 rounded transition-all duration-200 ease-in-out text-center hover:bg-transparent hover:border hover:border-secondary-dark-bkgrnd hover:text-primary-light-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
