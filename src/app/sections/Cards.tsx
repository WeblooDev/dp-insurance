import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getServices } from "@/data/service";

export default async function Cards() {
  const services = await getServices();

  return (
    <section className="py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link key={service.id} href={`/${service.id}`}>
            <Card className="p-6 text-center hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{service.name}</h2>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
