import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import CategoryServicesSection from "#/content/CategoryServicesSection";
import type { ServiceCategory } from "#/data/services";

export const Route = createFileRoute("/services/$category")({
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams() as { category: ServiceCategory };
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center">Loading {params.category} services...</div>
      }
    >
      <CategoryServicesSection category={params.category} />
    </Suspense>
  );
}
