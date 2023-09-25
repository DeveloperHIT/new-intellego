"use client";
import HomeHero from "@/sections/landing/homeHero";
import Posts from "@/sections/landing/posts";
import { _travelPosts } from "@/_mock";

export default function LandingView() {
  return (
    <>
      <HomeHero />
      <Posts posts={_travelPosts.slice(2, 6)} />
    </>
  );
}
