import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#hero" className="text-lg font-semibold text-white">
          <span className="font-extrabold">Acme</span>{" "}
          <span className="text-indigo-400">Studios</span>
        </a>

        {/* Desktop links */}
        <div className="hidden gap-6 text-sm font-medium text-slate-200 sm:flex">
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-slate-800 sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-900 sm:hidden">
          <div className="mx-auto flex max-w-6xl flex-col space-y-2 px-4 py-3 text-sm font-medium text-slate-200">
            <a
              href="#services"
              className="hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
