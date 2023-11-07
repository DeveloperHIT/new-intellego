import { getUniqueTags } from "@/sanity/sanity-utils";
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
  const tags = await getUniqueTags();
  console.log("tags");

  return (
    <InsightView categories={tags} insight={insight} insights={insights} />
  );
}
