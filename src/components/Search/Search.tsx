"use client";
import algoliasearch from "algoliasearch/lite";
import { RefinementList, DynamicWidgets, Hits } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { Hit as AlgoliaHit } from "instantsearch.js";
import CustomSearchBox from "@/components/Search/CustomSearchBox";

// TODO: Only populate search results when use types in search box https://github.com/algolia/react-instantsearch/issues/1126
// TODO: Use MUI

// Define types for your hits
type HitProps = {
  hit: AlgoliaHit<{
    title: string;
  }>;
};

// Search client initialization
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY!,
);

// Hit component
function Hit({ hit }: HitProps) {
  return (
    <div>
      {/*<Highlight attribute="title" hit={hit} />*/}
      <p>{hit.title}</p>
    </div>
  );
}

// Fallback component for DynamicWidgets
function FallbackComponent({ attribute }: { attribute: string }) {
  return <RefinementList attribute={attribute} />;
}

// Main search component
export default function Search() {
  return (
    <InstantSearchNext
      searchClient={searchClient}
      // TODO: Move this to env variable
      indexName="live_posts"
      routing={true}
    >
      <div>
        {/*<SearchBox />*/}
        <CustomSearchBox />
        <DynamicWidgets fallbackComponent={FallbackComponent}>
          {/* Add widgets here */}
        </DynamicWidgets>
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearchNext>
  );
}
