import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { orgData } from "../../assets/data";

export default function Footer() {
  return (
    <footer className="mt-auto bg-primary-dark-bkgrnd text-primary-light-text py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-primary-light-text">
              {orgData.name}
            </h3>
            <p className="text-sm leading-relaxed text-secondary-light-text">
              {orgData.description}
            </p>
            <div className="flex space-x-4">
              <Link
                to={orgData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-light-text hover:text-buttons-blue transition-colors"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" className="invert" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                to={orgData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-light-text hover:text-buttons-blue transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" className="invert" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                to={orgData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-light-text hover:text-buttons-blue transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" className="invert" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                to={orgData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-light-text hover:text-buttons-blue transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="invert" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-light-text">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-secondary-light-text">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="h-5 w-5 mr-2 text-buttons-blue invert"
                />
                {orgData.address}
              </li>
              <li className="flex items-center text-secondary-light-text">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="h-5 w-5 mr-2 text-buttons-blue invert"
                />
                {orgData.phone}
              </li>
              <li className="flex items-center text-secondary-light-text">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-5 w-5 mr-2 text-buttons-blue invert"
                />
                {orgData.email}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-light-text">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-secondary-light-text hover:text-buttons-blue transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2 invert"
                  />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-secondary-light-text hover:text-buttons-blue transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2 invert"
                  />
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="text-secondary-light-text hover:text-buttons-blue transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2 invert"
                  />
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/appointments"
                  className="text-secondary-light-text hover:text-buttons-blue transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2 invert"
                  />
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-light-text">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/terms"
                  className="text-secondary-light-text hover:text-buttons-blue transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2 invert"
                  />
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-secondary-light-text hover:text-buttons-blue transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2 invert"
                  />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibility"
                  className="text-secondary-light-text hover:text-buttons-blue transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2 invert"
                  />
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-secondary-dark-bkgrnd text-center text-sm">
          <p className="text-primary-light-text text-lg">
            &copy; {new Date().getFullYear()} {orgData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
