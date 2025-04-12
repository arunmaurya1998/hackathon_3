import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">FinanceX</h3>
          <p className="text-sm">
            Make your future financial strong with smart tools and insights.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Useful Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Important Links for Judges */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">For Judges</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/your-username/your-project"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-blue-400 transition"
              >
                🔗 GitHub Repository
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/your-video-link"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-blue-400 transition"
              >
                🎥 Video Presentation
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FinanceX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
