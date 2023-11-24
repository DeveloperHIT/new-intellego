import InsightView from "@/sections/view/insightView";

import { client } from "@/sanity/lib/client";
import { getCategoriesQuery, postQuery } from "@/sanity/lib/queries";

type Props = {
  params: { slug: string };
};

export default async function SingleInsightPage(props: Props) {
  const categories = await client.fetch(getCategoriesQuery);
  const insight = await client.fetch(postQuery, { slug: props.params.slug });

  return <InsightView categories={categories} insight={insight} />;
}
