import { createFileRoute } from "@tanstack/react-router";
import AllServicesSection from "#/content/AllServicesSection";
import { getAllServices } from "#/data/servicesFunctions";

export const Route = createFileRoute("/services/")({
  loader: async () => {
    const services = await getAllServices();
    return { services };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { services } = Route.useLoaderData();
  return <AllServicesSection services={services} />;
}
