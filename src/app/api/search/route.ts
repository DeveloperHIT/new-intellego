import algoliasearch from "algoliasearch";
import { client } from "@/sanity/lib/client";
import indexer from "sanity-algolia";
import { NextResponse } from "next/server";

const algolia = algoliasearch(
  "A75DQ286VR",
  process.env.ALGOLIA_ADMIN_KEY as string,
);

export async function POST(req: any) {
  try {
    const sanityAlgolia = indexer(
      {
        post: {
          index: algolia.initIndex("live_posts"),
        },
      },
      (document) => {
        console.log(document);
        switch (document._type) {
          case "post":
            return {
              title: document.title,
              path: document.slug.current,
              publishedAt: document.publishedAt,
            };
          default:
            return document;
        }
      },
    );

    const body = await req.json();

    const webhook = (await sanityAlgolia.webhookSync(client, body)) as any;

    return webhook && NextResponse.json({ msg: "success" });
  } catch (error) {
    let error_response = {
      status: "error",
      msg: error,
    };
    return new NextResponse(JSON.stringify(error_response));
  }
}
