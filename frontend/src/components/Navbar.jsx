import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[rgba(255,255,255,0.85)] backdrop-blur-md border-b border-gray-300 shadow-md">
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="font-mono text-xl font-bold text-sky-700">
            Efficient Text Searching
          </a>

          {/* Hamburger Menu */}
          <div
            className="w-7 h-5 flex flex-col justify-between md:hidden cursor-pointer z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="block h-1 rounded bg-sky-700"></span>
            <span className="block h-1 rounded bg-sky-700"></span>
            <span className="block h-1 rounded bg-sky-700"></span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#implementation"
              className="text-gray-700 hover:text-sky-600 transition-colors"
            >
              Implementation
            </a>
            <a
              href="#information"
              className="text-gray-700 hover:text-sky-600 transition-colors"
            >
              Information
            </a>
            <a
              href="#analysis"
              className="text-gray-700 hover:text-sky-600 transition-colors"
            >
              Analysis
            </a>
            <a
              href="#application"
              className="text-gray-700 hover:text-sky-600 transition-colors"
            >
              Application
            </a>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(255,255,255,0.95)] backdrop-blur-md flex flex-col items-center justify-center gap-10 z-40 transition-all duration-300">
          <a
            href="#implementation"
            className="text-gray-700 text-2xl font-medium hover:text-sky-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Implementation
          </a>
          <a
            href="#information"
            className="text-gray-700 text-2xl font-medium hover:text-sky-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Information
          </a>
          <a
            href="#analysis"
            className="text-gray-700 text-2xl font-medium hover:text-sky-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Analysis
          </a>
          <a
            href="#application"
            className="text-gray-700 text-2xl font-medium hover:text-sky-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Application
          </a>
        </div>
      )}
    </nav>
  );
};
