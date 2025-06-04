import Layout from "@/components/layout/Layout";
import ListingCard from "@/components/ListingCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function Home() {
  return (
    <Layout>
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <ListingCard key={index} property={property} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
