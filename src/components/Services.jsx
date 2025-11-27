export default function Services() {
  const services = [
    {
      title: 'Digital Strategy',
      description: 'We analyze your business goals and market trends to create a comprehensive roadmap for success.',
      icon: '🎯',
    },
    {
      title: 'Web Development',
      description: 'Custom, responsive, and high-performance websites built to convert visitors into customers.',
      icon: '💻',
    },
    {
      title: 'Brand Design',
      description: 'Memorable visual identities and user interfaces that resonate with your target audience.',
      icon: '✨',
    },
  ];

  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We provide a wide range of digital solutions designed to help your business grow and stand out in a crowded market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-2xl transition-colors group-hover:bg-indigo-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}