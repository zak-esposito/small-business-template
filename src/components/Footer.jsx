export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Acme <span className="text-indigo-400">Studios</span>
            </h3>
            <p className="mt-2 max-w-sm text-sm text-slate-400">
              Crafting modern digital experiences for small businesses and
              ambitious brands.
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div>
              <h4 className="font-semibold text-white">Navigate</h4>
              <ul className="mt-2 space-y-1 text-slate-400">
                <li>
                  <a href="#hero" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white">Contact</h4>
              <ul className="mt-2 space-y-1 text-slate-400">
                <li>hello@acmestudios.com</li>
                <li>+44 (0)1234 567890</li>
                <li>Cardiff, UK</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-4 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Acme Studios. All rights reserved.</span>
          <span>Built by Zak Esposito</span>
        </div>
      </div>
    </footer>
  );
}
