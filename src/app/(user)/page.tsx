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

// TODO: Get contact form working
// TODO: Get subscribe feature working
// TODO: Choose theme colors
// TODO: Add news to landing page
// TODO: Add Alex's publications, presentations...
// TODO: Add actual blog posts, white papers, etc.
// TODO: Add sectors to service lines at /sectors
// TODO: Add sectors to client types at /clients
// TODO: Add service line descriptions
// TODO: Add service descriptions
// TODO: Add client type descriptions
// TODO: Add illustrations throughout
// TODO: Fix "Learn More" button at /sectors
// TODO: Fix nested breadcrumbs at multiple level tiers (e.g., service lines/sectors/service)
// TODO: Add help center page
// TODO: Add terms of service page
// TODO: Get social pages working
// TODO: Add social pages links
// TODO: Add about page
// TODO: Hide alumni page for now and build later
