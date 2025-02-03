import { getServices } from "@/data/service";

export async function getServiceBySlug(slug: string) {
  const services = await getServices();
  return services.find((service) => service.id === slug) || null;
}
