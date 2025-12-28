import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { CustomSquadTeaser } from "@/components/sections/CustomSquadTeaser";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { SalesAffiliateTeaser } from "@/components/sections/SalesAffiliateTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <CustomSquadTeaser />
      <PricingPreview />
      <HowItWorks />
      <SocialProof />
      <SalesAffiliateTeaser />
      <FinalCTA />
    </main>
  );
}
