import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import AllServicesSection from "#/content/AllServicesSection";

export const Route = createFileRoute("/services/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading services...</div>}>
      <AllServicesSection />
    </Suspense>
  );
}
