import type { Service } from "#/data/services";

const AllServicesSection = ({ services }: { services: readonly Service[] }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-2">All Services</h2>
      <p className="text-gray-600 mb-8">
        Everything we offer to help you build, grow, and scale.
      </p>
      <div className="flex">
        {services.map((service) => (
          <article key={service.id} className="">
            <span className="text-xs uppercase tracking-widest text-gray-400 mb-1">
              {service.category}
            </span>
            <h1>{service.title}</h1>
            <p className="text-gray-500 text-sm mb-4 flex-1">
              {service.description}
            </p>
            <p className="text-sm text-gray-400">
              {service.features.length} features
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AllServicesSection;
