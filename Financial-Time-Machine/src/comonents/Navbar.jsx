import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Hourglass } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-teal-950 w-full text-white flex items-center justify-between px-8 py-4 shadow-lg">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-bold cursor-pointer"
      >
        <Hourglass className="w-8 h-6 text-blue-500" />
        Financial Time Machine
      </Link>

      {/* Menu */}
      <div>
        <ul className="flex gap-8 items-center">
          {/* Features */}
          <li className="group relative cursor-pointer">
            Features{" "}
            <span className="ml-1">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
            <div className="top-full pointer-events-auto left-0 absolute hidden group-hover:block bg-white text-teal-950 shadow-lg  rounded-md py-2 w-48 transition-all duration-300">
              <Link to="/report" className="block px-4 py-2 hover:bg-teal-100">
                Report
              </Link>
              <Link
                to="/futurePlanning"
                className="block px-4 py-2 hover:bg-teal-100"
              >
                Future Planning
              </Link>
              <Link
                to="/suggestion"
                className="block px-4 py-2 hover:bg-teal-100"
              >
                Suggestion
              </Link>
              <Link
                to="/missedOpportunity"
                className="block px-4 py-2 hover:bg-teal-100"
              >
                Missed Opportunity
              </Link>
            </div>
          </li>

          {/* Blog */}
          <li className="group relative cursor-pointer">
            Blog{" "}
            <span className="ml-1">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
            <div className="top-full pointer-events-auto left-0 absolute hidden group-hover:block bg-white text-teal-950 shadow-lg  rounded-md py-2 w-48 transition-all duration-300">
              <Link to="/tips" className="block px-4 py-2 hover:bg-teal-100">
                Tips
              </Link>
              <Link
                to="/investmentGuide"
                className="block px-4 py-2 hover:bg-teal-100"
              >
                Investment Guide
              </Link>
              <Link
                to="/successStories"
                className="block px-4 py-2 hover:bg-teal-100"
              >
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
      </div>

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
  );
};

export default Navbar;
