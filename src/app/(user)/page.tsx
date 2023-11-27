import LandingView from "@/sections/view/landingView";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/queries/insights";
import { getHeroQuery } from "@/sanity/queries/hero";

export default async function Home() {
  const insights = await client.fetch(postsQuery);

  const heroDataArray = await client.fetch(getHeroQuery);
  const heroData = {
    ...heroDataArray[0],
  };

  return <LandingView insights={insights} heroData={heroData} />;
}
