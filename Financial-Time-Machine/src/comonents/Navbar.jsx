import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Hourglass } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-teal-950 w-full text-white px-4 py-4 shadow-lg">
      {/* Top row: logo and menu toggle */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold cursor-pointer">
          <Hourglass className="w-8 h-6 text-blue-500" />
          Financial Time Machine
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="text-white text-2xl"
            />
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-between items-center mt-4">
        <ul className="flex gap-8 items-center">
          {/* Features Dropdown */}
          <li className="group relative cursor-pointer">
            Features{" "}
            <span className="ml-1">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
            <div className="top-full left-0 absolute hidden group-hover:block bg-white text-teal-950 shadow-lg rounded-md py-2 w-48 transition-all duration-300">
              <Link to="/report" className="block px-4 py-2 hover:bg-teal-100">
                Report
              </Link>
              <Link to="/futurePlanning" className="block px-4 py-2 hover:bg-teal-100">
                Future Planning
              </Link>
              <Link to="/suggestion" className="block px-4 py-2 hover:bg-teal-100">
                Suggestion
              </Link>
              <Link to="/missedOpportunity" className="block px-4 py-2 hover:bg-teal-100">
                Missed Opportunity
              </Link>
            </div>
          </li>

          {/* Blog Dropdown */}
          <li className="group relative cursor-pointer">
            Blog{" "}
            <span className="ml-1">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
            <div className="top-full left-0 absolute hidden group-hover:block bg-white text-teal-950 shadow-lg rounded-md py-2 w-48 transition-all duration-300">
              <Link to="/tips" className="block px-4 py-2 hover:bg-teal-100">
                Tips
              </Link>
              <Link to="/investmentGuide" className="block px-4 py-2 hover:bg-teal-100">
                Investment Guide
              </Link>
              <Link to="/successStories" className="block px-4 py-2 hover:bg-teal-100">
                Success Stories
              </Link>
            </div>
          </li>

          <li className="cursor-pointer hover:text-teal-400">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="cursor-pointer hover:text-teal-400">
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link to="/login">
            <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-teal-400 transition-all duration-300 cursor-pointer">
              Login/Signup
            </button>
          </Link>
          <Link to="/free-trial">
            <button className="bg-green-600 hover:text-teal-400 px-4 py-2 rounded hover:bg-green-700 transition-all duration-300 cursor-pointer">
              Free Trial
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <Link to="/report" onClick={() => setIsMenuOpen(false)}>Report</Link>
          <Link to="/futurePlanning" onClick={() => setIsMenuOpen(false)}>Future Planning</Link>
          <Link to="/suggestion" onClick={() => setIsMenuOpen(false)}>Suggestion</Link>
          <Link to="/missedOpportunity" onClick={() => setIsMenuOpen(false)}>Missed Opportunity</Link>
          <Link to="/tips" onClick={() => setIsMenuOpen(false)}>Tips</Link>
          <Link to="/investmentGuide" onClick={() => setIsMenuOpen(false)}>Investment Guide</Link>
          <Link to="/successStories" onClick={() => setIsMenuOpen(false)}>Success Stories</Link>
          <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login/Signup</Link>
          <Link to="/free-trial" onClick={() => setIsMenuOpen(false)}>Free Trial</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

