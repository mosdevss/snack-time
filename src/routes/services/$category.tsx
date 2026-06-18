import { createFileRoute } from "@tanstack/react-router";
import type { Service } from "#/data/services";
import CategoryServicesSection from "#/content/CategoryServicesSection";
import type { ServiceCategory } from "#/data/services";
import { getServicesByCategory } from "#/data/servicesFunctions";

export const Route = createFileRoute("/services/$category")({
  loader: async ({ params }) => {
    const services = await getServicesByCategory({
      data: params.category as ServiceCategory,
    });
    return { services };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { services, category } = Route.useLoaderData() as {
    services: readonly Service[];
    category: ServiceCategory;
  };
  return <CategoryServicesSection category={category} services={services} />;
}
