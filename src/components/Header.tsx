import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { PHONE_NUMBER } from "../constants/constant";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Consultation", path: "/consultation" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1 group">
            <div className="p-1 rounded-lg group-hover:scale-105 transition-transform">
              <img
                src="/assets/logo1.png"
                alt="logo"
                className="size-10 sm:size-16"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-md sm:text-lg font-bold text-neutral-800">
                Dr. Shumaila Tanveer
              </span>
              <span className="text-xs text-primary-600 font-medium">
                Homeopathic Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary-600"
                    : "text-neutral-700 hover:text-primary-600"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">{PHONE_NUMBER}</span>
            </a>
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-lg"
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-primary-600 bg-primary-50"
                        : "text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-2 border-t border-neutral-200">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center space-x-2 py-2 text-neutral-600"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{PHONE_NUMBER}</span>
                  </a>
                  <Link
                    to="/consultation"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full mt-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center px-4 py-2 rounded-full font-medium"
                  >
                    Book Consultation
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
