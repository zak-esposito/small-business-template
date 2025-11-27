export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Acme <span className="text-indigo-500">Studios</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-300 sm:text-xl md:mt-8">
              We craft exceptional digital experiences for forward-thinking businesses. Elevate your brand with our modern solutions.
            </p>
            
            <div className="mt-8 flex flex-col w-full sm:w-auto sm:flex-row gap-4">
              <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors duration-200"
                >
                  Book now
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3 text-base font-semibold text-slate-200 shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-colors duration-200"
                >
                  View services
                </button>
            </div>
          </div>

          {/* Right Column: Illustrative Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Abstract decorative blobs behind the image */}
            <div className="absolute -top-12 -left-12 -z-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl sm:-top-16 sm:-left-16 lg:h-80 lg:w-80"></div>
            <div className="absolute -bottom-12 -right-12 -z-10 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl sm:-bottom-16 sm:-right-16 lg:h-80 lg:w-80"></div>
            
            <div className="relative overflow-hidden rounded-2xl bg-slate-800 shadow-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-indigo-500/15" />
              <img
                src="https://picsum.photos/800/600"
                alt="Business team collaborating on a project"
                className="relative h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}