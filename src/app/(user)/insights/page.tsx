import InsightsView from "@/sections/view/insightsView";
import { getInsights } from "@/sanity/sanity-utils";

export default async function Page() {
  const insights = await getInsights();

  console.log(insights);

  return (
    <div>
      <InsightsView insights={insights} />
    </div>
  );
}
