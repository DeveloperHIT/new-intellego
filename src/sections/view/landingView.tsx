"use client";
import Hero from "@/sections/landing/hero";
import RecentInsights from "@/sections/landing/recentInsights";
import { InsightType } from "@/types/Insight";

interface HeroData {
  heroButtonText: string;
  heroImage: string;
  heroSubtitle: string;
  heroTitle: string;
  heroTitleCapitalized: string;
  heroTitleCapitalizedColor: string;
}

interface LandingViewProps {
  insights: InsightType[];
  heroData: HeroData;
}

export default function LandingView({ insights, heroData }: LandingViewProps) {
  return (
    <>
      <Hero heroData={heroData} />
      {/* TODO: Make the recent filteredInsights section smaller..too much space on y-axis */}
      <RecentInsights insights={insights} />
    </>
  );
}
