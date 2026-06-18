import { createServerFn } from "@tanstack/react-start";
import { services } from "./services";
import type { Service, ServiceCategory } from "./services";

export const getAllServices = createServerFn({ method: "GET" })
  .handler(async () => {
    await new Promise((r) => setTimeout(r, 0));
    return services;
  });

export const getServicesByCategory = createServerFn({ method: "GET" })
  .validator((d: unknown) => d as ServiceCategory)
  .handler(async (ctx) => {
    await new Promise((r) => setTimeout(r, 0));
    return services.filter((s) => s.category === ctx.data) as readonly Service[];
  });

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
