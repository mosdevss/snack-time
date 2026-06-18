import type { Service } from "#/data/services";

const AllServicesSection = ({ services }: { services: readonly Service[] }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-2">All Services</h2>
      <p className="text-gray-600 mb-8">
        Everything we offer to help you build, grow, and scale.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <article
            key={service.id}
            className="border rounded-lg p-6 flex flex-col"
          >
            <span className="text-xs uppercase tracking-widest text-gray-400 mb-1">
              {service.category}
            </span>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-500 text-sm mb-4 flex-1">
              {service.tagline}
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
