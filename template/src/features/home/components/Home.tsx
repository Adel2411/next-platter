import { features } from "../constants";
import FeatureCard from "./FeatureCard";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard feature={feature} />
        ))}
      </div>
    </div>
  );
}
