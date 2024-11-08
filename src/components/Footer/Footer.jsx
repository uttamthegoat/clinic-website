import { Link } from 'react-router-dom'
import { orgData } from '../../assets/data'

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#FFF1F3] pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Logo and Description */}
        <div className="mb-12">
          <img
            src={orgData.logo}
            alt="Jay Smiles Logo"
            className="mb-4 w-[120px] h-auto"
          />
          <h2 className="text-2xl font-bold mb-4">Jay Smiles</h2>
          <p className="text-gray-600 max-w-2xl">
            Your trusted dental clinic in Bangalore, specializing in endodontics and cosmetic dentistry
            with over 20 years of experience.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Home Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Home</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-gray-900">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/clinical" className="text-gray-600 hover:text-gray-900">
                  Clinical Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services/cosmetic" className="text-gray-600 hover:text-gray-900">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services/orthodontics" className="text-gray-600 hover:text-gray-900">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link to="/services/preventive" className="text-gray-600 hover:text-gray-900">
                  Preventive Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Join us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={orgData.instagram}
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={orgData.linkedin}
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={orgData.facebook}
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            Copyright © {orgData.name} {new Date().getFullYear()}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white px-4 py-2 rounded-full text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}