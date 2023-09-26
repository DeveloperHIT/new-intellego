"use client";
import HomeHero from "@/sections/landing/homeHero";
import RecentInsights from "@/sections/landing/recentInsights";
import { __insights } from "@/_mock";

export default function LandingView() {
  return (
    <>
      <HomeHero />
      <RecentInsights insights={__insights} />
    </>
  );
}
