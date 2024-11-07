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
    <footer className="mt-auto bg-grayscale-darkest text-grayscale-lightest py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-grayscale-lightest">
              {orgData.name}
            </h3>
            <p className="text-sm leading-relaxed text-grayscale-lightest">
              {orgData.description}
            </p>
            <div className="flex space-x-4">
              <Link
                to={orgData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-grayscale-lighter hover:text-accent transition-colors"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="lg"
                  style={{ filter: "invert(100%)" }}
                />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                to={orgData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-grayscale-lighter hover:text-accent transition-colors"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="lg"
                  style={{ filter: "invert(100%)" }}
                />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                to={orgData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-grayscale-lighter hover:text-accent transition-colors"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  style={{ filter: "invert(100%)" }}
                />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                to={orgData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-grayscale-lighter hover:text-accent transition-colors"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="lg"
                  style={{ filter: "invert(100%)" }}
                />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-grayscale-lightest">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-grayscale-lighter">
              <li className="flex items-center text-grayscale-lighter">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="h-5 w-5 mr-2 text-accent"
                  style={{ filter: "invert(100%)" }}
                />
                {orgData.address}
              </li>
              <li className="flex items-center text-grayscale-lighter">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="h-5 w-5 mr-2 text-accent"
                  style={{ filter: "invert(100%)" }}
                />
                {orgData.phone}
              </li>
              <li className="flex items-center text-grayscale-lighter">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-5 w-5 mr-2 text-accent"
                  style={{ filter: "invert(100%)" }}
                />
                {orgData.email}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-grayscale-lightest">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-grayscale-lighter">
              <li>
                <Link
                  to="/about"
                  className="text-grayscale-lighter hover:text-accent transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2"
                    style={{ filter: "invert(100%)" }}
                  />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-grayscale-lighter hover:text-accent transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2"
                    style={{ filter: "invert(100%)" }}
                  />
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="text-grayscale-lighter hover:text-accent transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2"
                    style={{ filter: "invert(100%)" }}
                  />
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/appointments"
                  className="text-grayscale-lighter hover:text-accent transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2"
                    style={{ filter: "invert(100%)" }}
                  />
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-grayscale-lightest">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-grayscale-lighter">
              <li>
                <Link
                  to="/terms"
                  className="text-grayscale-lighter hover:text-accent transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2"
                    style={{ filter: "invert(100%)" }}
                  />
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-grayscale-lighter hover:text-accent transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2"
                    style={{ filter: "invert(100%)" }}
                  />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibility"
                  className="text-grayscale-lighter hover:text-accent transition-colors flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-4 w-4 mr-2"
                    style={{ filter: "invert(100%)" }}
                  />
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-grayscale-darker text-center text-sm text-grayscale-lightest">
          <p>
            &copy; {new Date().getFullYear()} Clinic Center. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
