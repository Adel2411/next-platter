import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Feature } from "../types";

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div key={feature.id}>
      <Card>
        <CardHeader className="space-y-4">
          <CardTitle>{feature.title}</CardTitle>
          <CardDescription>{feature.description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default FeatureCard;
