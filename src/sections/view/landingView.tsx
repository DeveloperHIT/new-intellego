"use client";
import Hero from "@/sections/landing/hero";
import RecentInsights from "@/sections/landing/recentInsights";
import { InsightType } from "@/types/Insight";

interface HeroData {
  heroButtonText: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageUrl: string;
  heroSubtitle: string;
  heroTitle: string;
  pageDescription: string;
  pageTitle: string;
}

interface LandingViewProps {
  insights: InsightType[];
  heroData: HeroData;
}

export default function LandingView({ insights, heroData }: LandingViewProps) {
  return (
    <>
      <Hero heroData={heroData} />
      <RecentInsights insights={insights} />
    </>
  );
}
