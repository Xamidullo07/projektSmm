import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import navlogo from "../../public/ABDULLOH.png";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphism py-3" : "glassmorphism bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img className="w-[180px]" src={navlogo} alt="icon" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-primary" : "text-foreground hover:text-primary"
              }`
            }
          >
            Bosh sahifa
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-primary" : "text-foreground hover:text-primary"
              }`
            }
          >
            Kurslar
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-primary" : "text-foreground hover:text-primary"
              }`
            }
          >
            Aloqa
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="btn btn-outline py-2">
            Kirish
          </Link>
          <Link to="/register" className="btn btn-primary py-2">
            Ro'yxatdan o'tish
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-transparent"
        >
          <div className="container bg-transparent  py-4 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Bosh sahifa
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Kurslar
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Aloqa
            </NavLink>
            <div className="flex flex-col pt-3 border-t border-border gap-3">
              <Link
                to="/login"
                className="btn btn-outline py-0"
                onClick={() => setIsOpen(false)}
              >
                Kirish
              </Link>
              <Link
                to="/register"
                className="btn btn-primary py-0"
                onClick={() => setIsOpen(false)}
              >
                Ro'yxatdan o'tish
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
