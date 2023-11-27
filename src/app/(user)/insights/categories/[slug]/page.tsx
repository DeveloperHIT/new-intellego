import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "@sanity/client";
import {
  getCategoriesQuery,
  getCategoryRelatedPostQuery,
} from "@/sanity/lib/queries";
import { slugToTitle } from "@/helpers/slugToTitle";
import CategoriesView from "@/sections/view/categoriesView";
import { queries } from "@/sanity/queries";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const insight = await sanityFetch<SanityDocument>({
    query: getCategoryRelatedPostQuery,
    params,
  });

  if (!insight)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: slugToTitle(params.slug),
    description: insight?.meta_description,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const categories = await sanityFetch<SanityDocument>({
    query: getCategoriesQuery,
  });

  const allInsights = await sanityFetch<SanityDocument>({
    query: queries.postsQuery,
  });

  const filteredInsights = await sanityFetch<SanityDocument>({
    query: getCategoryRelatedPostQuery,
    params,
  });

  const title = slugToTitle(params.slug);
  return (
    <CategoriesView
      allInsights={allInsights}
      categories={categories}
      filteredInsights={filteredInsights}
      title={title}
    />
  );
}
