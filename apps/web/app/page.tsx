import { HomepageHero } from "@/components/HomepageHero";
import { ScenarioCards } from "@/components/ScenarioCards";
import { ExampleShowcase } from "@/components/ExampleShowcase";

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      <ScenarioCards />
      <ExampleShowcase />
    </>
  );
}
