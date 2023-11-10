import algoliasearch from "algoliasearch";
import indexer from "sanity-algolia";
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";

// Create algolia client
const algolia = algoliasearch(
  "A75DQ286VR",
  process.env.ALGOLIA_ADMIN_KEY as string,
);

console.log("algolia ", algolia);

// Create sanity client
export const sanity = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

console.log("sanity ", sanity);

export async function POST(request: Request) {
  const sanityAlgolia = indexer(
    {
      post: {
        index: algolia.initIndex("live_posts"),
      },
    },
    (document) => {
      console.log("Document ", document);
      switch (document._type) {
        case "post":
          return {
            title: document.title,
          };
        default:
          throw new Error(`Unknown type: ${document._type}`);
      }
    },
  );
}
