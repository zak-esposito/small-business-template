export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col">
            <span className="text-sm font-bold uppercase tracking-wide text-indigo-600">
              Our Story
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Building bridges between ideas and reality
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Founded in 2018, we began as a small collective of designers and developers with a shared vision: to create digital experiences that are not just functional, but truly memorable. What started in a shared workspace has grown into a full-service agency partnering with brands worldwide.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We believe in the power of collaboration. Our team works closely with you to understand your unique challenges, ensuring that every solution we build is tailored to help your business thrive in a competitive landscape.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative lg:order-last">
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-xl ring-1 ring-slate-900/10">
              <img
                src="https://picsum.photos/800/600?random=10"
                alt="Our team working together in a modern office"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}