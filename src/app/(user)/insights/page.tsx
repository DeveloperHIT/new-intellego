import InsightsView from "@/sections/view/insightsView";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "@sanity/client";
import { postsQuery, snippetsQuery } from "@/sanity/lib/queries";

export default async function Page() {
  // const insights = await getInsights();

  const insights = await sanityFetch<SanityDocument>({
    query: postsQuery,
  });

  console.log(insights);

  const allSnippets = await sanityFetch<SanityDocument>({
    query: snippetsQuery,
  });

  return (
    <div>
      {insights.map((insight: any) => (
        <div key={insight._id}>
          <h2>{insight.title}</h2>
        </div>
      ))}

      {allSnippets?.length > 0 ? (
        <div>Add snippets logic</div>
      ) : (
        <p>No snippets found</p>
      )}
      <InsightsView insights={insights} />
    </div>
  );
}
