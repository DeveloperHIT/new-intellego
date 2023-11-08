// import InsightView from "@/sections/view/insightView";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "@sanity/client";
import {
  getRandomPostsQuery,
  postQuery,
  seriesRelatedPosts,
} from "@/sanity/lib/queries";
import { Metadata } from "next";
import InsightView from "@/sections/view/insightView";
// import insight from "@/sanity/schemas/insight";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params,
  });
  if (!post)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: post?.title,
    description: post?.meta_description,
    keywords: post?.meta_tags,
  };
}

const SingleInsight = async ({ params }: Props) => {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params,
  });
  const isSeries = post?.isSeries;
  let relatedPosts;
  if (isSeries) {
    relatedPosts = await sanityFetch<SanityDocument>({
      query: seriesRelatedPosts,
      params: {
        currentPostSlug: params?.slug,
        seriesSlug: post?.slug?.current,
      },
    });
  } else {
    relatedPosts = await sanityFetch<SanityDocument>({
      query: getRandomPostsQuery,
      params: {
        currentPostSlug: params?.slug,
      },
    });
  }
  return <InsightView insight={post} insights={relatedPosts} />;
};

export default SingleInsight;

// export default async function Insight({ params }: Props) {
//   return <InsightView insight={insight} insights={insights} />;
// }
