"use client";
import Hero from "@/sections/landing/hero";
import RecentInsights from "@/sections/landing/recentInsights";

export default function LandingView({ insights }) {
  return (
    <>
      <Hero />
      {/* TODO: Make the recent filteredInsights section smaller..too much space on y-axis */}
      <RecentInsights insights={insights} />
    </>
  );
}
