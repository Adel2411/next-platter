import FeatureCard from "@/components/FeatureCard";
import { features } from "@/constants";
import Hero from "./Hero";

export default function Main() {
  return (
    <div className="space-y-24">
      <Hero />
      <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard feature={feature} />
        ))}
      </div>
    </div>
  );
}
