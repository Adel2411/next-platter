import FeatureCard from "@/components/FeatureCard";
import Hero from "./Hero";
import { features } from "@/constants";

export default function Main() {
  return (
    <div>
      <Hero />
      <div className="px-4 py-32 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard feature={feature} />
        ))}
      </div>
    </div>
  );
}
