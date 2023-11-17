import { createClient } from "next-sanity";
import algoliasearch from "algoliasearch";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";

const algolia = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string,
  process.env.ALGOLIA_ADMIN_API_KEY as string,
);

const sanity = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function POST(request: NextRequest) {
  const { postId } = await request.json();

  try {
    const transaction = await sanity
      .patch(postId)
      .inc({ viewCount: 1 })
      .commit();

    const updatedPostId = transaction?.results[0]?.id;
    if (!updatedPostId) {
      throw new Error("Post ID not found");
    }
    const updatedPost = await sanity.getDocument(updatedPostId);

    if (!updatedPost) {
      throw new Error("Post not found");
    }

    const algoliaIndex = algolia.initIndex(process.env.ALGOLIA_INDEX as string);

    await algoliaIndex.partialUpdateObject({
      objectID: updatedPost._id,
      viewCount: updatedPost.viewCount,
    });

    return new NextResponse(
      JSON.stringify({ message: "View count incremented successfully'" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Error incrementing view count'" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
