import InsightView from "@/sections/view/insightView";

import { client } from "@/sanity/lib/client";
import {
  getCategoriesQuery,
  getTagsQuery,
  postQuery,
  postsQuery,
} from "@/sanity/lib/queries";

type Props = {
  params: { slug: string };
};

export default async function SingleInsightPage(props: Props) {
  const categories = await client.fetch(getCategoriesQuery);
  const insight = await client.fetch(postQuery, { slug: props.params.slug });
  const insights = await client.fetch(postsQuery);
  const tags = await client.fetch(getTagsQuery);
  console.log(tags);

  return (
    <InsightView
      categories={categories}
      insight={insight}
      insights={insights}
    />
  );
}
