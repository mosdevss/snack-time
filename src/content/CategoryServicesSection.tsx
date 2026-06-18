import type { Service, ServiceCategory } from "#/data/services";

const CategoryServicesSection = ({
  services,
  category,
}: {
  services: readonly Service[];
  category: ServiceCategory;
}) => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold capitalize mb-1">{category}</h2>
      <p className="text-gray-600 mb-10">
        {services.length} service{services.length !== 1 ? "s" : ""} available
      </p>

      <div className="space-y-10">
        {services.map((service) => (
          <article key={service.id} className="border rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-500 mb-4">{service.description}</p>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">
                Features
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {service.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.pricing.map((tier) => (
                <div
                  key={tier.name}
                  className={`border rounded-md p-4 ${tier.highlighted ? "border-blue-500 bg-blue-50" : ""}`}
                >
                  <h5 className="font-semibold text-lg">{tier.name}</h5>
                  <p className="text-2xl font-bold mt-1">
                    ${tier.price.toLocaleString()}
                    <span className="text-sm font-normal text-gray-400">
                      /{tier.billingPeriod}
                    </span>
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-600">
                    {tier.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CategoryServicesSection;
