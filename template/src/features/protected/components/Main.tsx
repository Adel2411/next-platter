import FeatureCard from "@/components/FeatureCard";
import { features } from "@/constants";
import Hero from "./Hero";

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
