import LandingView from "@/sections/view/landingView";
import { getLandingPageQuery, postsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const insights = await client.fetch(postsQuery);

  const landingPageData = await client.fetch(getLandingPageQuery);

  const heroData = {
    heroButtonText: landingPageData[0].heroButtonText,
    heroImage: landingPageData[0].heroImage,
    heroSubtitle: landingPageData[0].heroSubtitle,
    heroTitle: landingPageData[0].heroTitle[0].text,
    heroTitleCapitalized: landingPageData[0].heroTitle[1].text,
    heroTitleCapitalizedColor: landingPageData[0].heroTitle[1].color.hex,
  };

  console.log(insights[0].mainImage);

  return <LandingView insights={insights} heroData={heroData} />;
}
