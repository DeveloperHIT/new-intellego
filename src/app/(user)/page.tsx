import LandingView from "@/sections/view/landingView";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "@sanity/client";
import { postsQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const insights = await sanityFetch<SanityDocument>({
    query: postsQuery,
  });

  return <LandingView insights={insights} />;
}
