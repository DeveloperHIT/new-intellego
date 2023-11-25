"use client";
import Hero from "@/sections/landing/hero";
import RecentInsights from "@/sections/landing/recentInsights";

interface Author {
  about: string;
  name: string;
  slug: any;
  image: any;
  designation: string;
  profiles: any;
  bio: any;
}

interface MainImage {
  _type: string;
  asset: any;
}

interface Slug {
  _type: string;
  current: string;
}

interface Insight {
  author: Author;
  estimatedWordCount: number;
  _createdAt: string;
  _updatedAt: string;
  mainImage: MainImage;
  tags: any;
  series: any;
  category: any;
  metaDescription: string;
  numberOfCharacters: number;
  estimatedReadingTime: number;
  publishedAt: string;
  title: string;
  body: any;
  isSeries: boolean;
  slug: Slug;
}

interface HeroData {
  heroTitle: string;
}

interface LandingViewProps {
  insights: Insight[];
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
