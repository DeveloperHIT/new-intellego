"use client";
import Hero from "@/sections/landing/hero";
import RecentInsights from "@/sections/landing/recentInsights";
import { __insights } from "@/_mock";

export default function LandingView() {
  return (
    <>
      <Hero />
      <RecentInsights insights={__insights.slice(0, 3)} />
    </>
  );
}
