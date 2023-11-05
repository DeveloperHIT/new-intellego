import { createClient, groq } from "next-sanity";
import { Insight } from "@/types";

const insightFields = groq`
    _id,
    _createdAt,
    title,
    date,
    _updatedAt,
    excerpt,
    "coverImage": coverImage.asset->url,
    "slug": slug.current,
    "author": author->{name}`;

export async function getInsights(): Promise<Insight[]> {
  const client = createClient({
    projectId: "khbtshbn",
    dataset: "production",
    apiVersion: "2023-11-04",
  });

  return client.fetch(
    groq`*[_type == "insight"] | order(date desc, _updatedAt desc) {
    ${insightFields}
    }`,
  );
}

export async function getInsight(slug: string): Promise<Insight> {
  const client = createClient({
    projectId: "khbtshbn",
    dataset: "production",
    apiVersion: "2023-11-04",
  });

  return client.fetch(
    groq`*[_type == "insight" && slug.current == $slug][0] {
    _id,
    _createdAt,
    "authorName": author->name,
    "authorRole": author->role,
    excerpt,
    title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    content
    }`,
    { slug },
  );
}
