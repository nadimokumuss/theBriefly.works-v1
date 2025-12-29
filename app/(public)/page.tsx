import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { CompetitiveAdvantage } from "@/components/sections/CompetitiveAdvantage";
import { CustomSquadTeaser } from "@/components/sections/CustomSquadTeaser";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { PlatformPreview } from "@/components/sections/PlatformPreview";
import { SalesAffiliateTeaser } from "@/components/sections/SalesAffiliateTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <CompetitiveAdvantage />
      <CustomSquadTeaser />
      <PricingPreview />
      <HowItWorks />
      <SocialProof />
      <PlatformPreview />
      <SalesAffiliateTeaser />
      <FinalCTA />
    </main>
  );
}
