import InsightView from "@/sections/view/insightView";
import { client } from "@/sanity/lib/client";
import { getCategoriesQuery } from "@/sanity/lib/queries";
import { queries } from "@/sanity/queries";

type Props = {
  params: { slug: string };
};

export default async function SingleInsightPage(props: Props) {
  const categories = await client.fetch(getCategoriesQuery);
  const insight = await client.fetch(queries.postQuery, {
    slug: props.params.slug,
  });

  return <InsightView categories={categories} insight={insight} />;
}
