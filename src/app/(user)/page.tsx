import LandingView from "@/sections/view/landingView";
import { getInsights } from "@/sanity/sanity-utils";

export default async function Home() {
  const insights = await getInsights();

  return <LandingView insights={insights} />;
}
