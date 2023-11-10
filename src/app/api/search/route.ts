import algoliasearch from "algoliasearch";
import indexer from "sanity-algolia";
import { createClient } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";
import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";

// Create algolia client
const algolia = algoliasearch(
  "A75DQ286VR",
  process.env.ALGOLIA_ADMIN_KEY as string,
);

// Create sanity client
export const sanity = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

// Function to handle POST requests
export async function POST(request: NextRequest) {
  try {
    // Collect the body as a string and parse it as JSON
    const body = await request.json();

    const sanityAlgolia = indexer(
      {
        post: {
          index: algolia.initIndex("live_posts"),
        },
      },
      (document) => {
        // Document transformation logic
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

    // Perform the webhook sync with the parsed body
    await sanityAlgolia.webhookSync(sanity, body);

    // Return a success response
    return new NextResponse("success", { status: 200 });
  } catch (error) {
    // If there's an error, log it and return an error response
    console.error("Error processing request:", error);
    return new NextResponse("Error processing request", { status: 500 });
  }
}
