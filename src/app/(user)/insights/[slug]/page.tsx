import { getInsight } from "@/sanity/sanity-utils";
import { getInsights } from "@/sanity/sanity-utils";
import InsightView from "@/sections/view/insightView";

type Props = {
  params: { slug: string };
};

export default async function Insight({ params }: Props) {
  const slug = params.slug;
  const insight = await getInsight(slug);
  const insights = await getInsights();
  console.log(insight);

  return <InsightView insight={insight} insights={insights} />;
}
