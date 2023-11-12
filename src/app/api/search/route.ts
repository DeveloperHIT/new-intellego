import algoliasearch from "algoliasearch";
import indexer from "sanity-algolia";
import { createClient } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";
import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";

// Create algolia client
const algolia = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string,
  process.env.ALGOLIA_ADMIN_API_KEY as string,
);

// Create sanity client
const sanity = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

const query = `*[
  _type in ['post']
  && defined(slug.current)
] {
  _type, 
  _rev, 
  "objectID": _id, 
  _createdAt,

  title,
  "mainImage": mainImage.asset._ref,
  "slug": slug.current,
  "categories": categories[] -> {
    _id, title
  },
  "tags": tags[] -> {_id, title},
  "author": author -> {_id, name}
}`;

const post_projection = `{
    _type, 
    _rev, 
    "objectID": _id, 
    _createdAt,
    
    title,
    "mainImage": mainImage.asset._ref,
    "slug": slug.current,
    "categories": categories[] -> {
        _id, title
    },
    "tags": tags[] -> {_id, title},
    "author": author -> {_id, name}
    }`;

// GET request is confirmed to work
export async function GET() {
  // Fetch all posts based on query
  const posts = await sanity.fetch(query);

  // Initialize the index
  const index = algolia.initIndex(process.env.ALGOLIA_INDEX as string);

  // Save objects to the index
  try {
    // Save objects to the index
    await index.saveObjects(posts);
    // Return a success response
    return new NextResponse("success", { status: 200 });
  } catch (error: any) {
    console.error("Error details:", error);
    return new NextResponse(`Error processing request: ${error.message}`, {
      status: 500,
    });
  }
}

// POST request is confirmed to work
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const index = algolia.initIndex(process.env.ALGOLIA_INDEX as string);

    const sanityAlgolia = indexer(
      {
        post: {
          index,
          projection: post_projection,
        },
      },
      (document) => document,
      // TODO: If we want an approval process, add logic only to add if status is approved here
    );

    await sanityAlgolia.webhookSync(sanity, body);
    return new NextResponse("success", { status: 200 });
  } catch (error: any) {
    console.error("Error details:", error);
    return new NextResponse(`Error processing request: ${error.message}`, {
      status: 500,
    });
  }
}

//
// // This should be a post request for new posts that then triggers the webhook to keep algolia current
// // Function to handle POST requests
// export async function POST(request: NextRequest) {
//   try {
//     // Collect the body as a string and parse it as JSON
//     const body = await request.json();
//
//     const sanityAlgolia = indexer(
//       {
//         post: {
//           index: algolia.initIndex("live_posts"),
//           projection: `{
//           title
//           }`,
//         },
//       },
//       (document) => {
//         // Document transformation logic
//         switch (document._type) {
//           case "post":
//             return {
//               title: document.title,
//             };
//           default:
//             throw new Error(`Unknown type: ${document._type}`);
//         }
//       },
//     );
//
//     // Perform the webhook sync with the parsed body
//     await sanityAlgolia.webhookSync(sanity, body);
//
//     // Return a success response
//     return new NextResponse("success", { status: 200 });
//   } catch (error) {
//     // If there's an error, log it and return an error response
//     console.error("Error processing request:", error);
//     return new NextResponse("Error processing request", { status: 500 });
//   }
// }
