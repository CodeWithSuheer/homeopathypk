import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  ADDRESS,
  EMAIL_ADDRESS,
  OFFICE_HOURS,
  PHONE_NUMBER,
} from "../constants/constant";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg group-hover:scale-105 transition-transform">
                <img
                  src="/assets/logo4.jpeg"
                  alt="logo"
                  className="size-10 sm:size-16 rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Dr. Shumaila Tanveer</h3>
                <p className="text-sm text-neutral-300">Homeopathic Clinic</p>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Dedicated to providing natural healing solutions through expert
              homeopathic treatment. Your path to wellness starts with
              personalized care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Consultation", path: "/consultation" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-neutral-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-neutral-300 text-sm">{PHONE_NUMBER}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-primary-400 mt-0.5" />
                <p className="text-neutral-300 text-sm">{EMAIL_ADDRESS}</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 mt-0.5" />
                <p className="text-neutral-300 text-sm">{ADDRESS}</p>
              </div>
            </div>
          </div>

          {/* Clinic Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Clinic Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary-400" />
                <span className="text-neutral-300 text-sm font-medium">
                  Consultation Hours
                </span>
              </div>
              <div className="text-neutral-300 text-sm space-y-1">
                <p>Monday to Saturday</p>
                <p>{OFFICE_HOURS}</p>
              </div>
              <div className="pt-2">
                <p className="text-xs text-neutral-400">
                  Emergency consultations available by appointment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-neutral-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a
              href="#"
              title="link"
              className="text-neutral-400 hover:text-primary-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"
                />
              </svg>
            </a>
            <a
              href="#"
              title="link"
              className="text-neutral-400 hover:text-primary-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              title="link"
              href="#"
              className="text-neutral-400 hover:text-primary-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                />
              </svg>
            </a>
          </div>
          <p className="text-neutral-400 text-sm text-center sm:text-right">
            © {new Date().getFullYear()} Dr. Shumaila Tanveer Homeopathic
            Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
