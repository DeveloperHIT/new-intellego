"use client";
import algoliasearch from "algoliasearch/lite";
import { Configure, InfiniteHits } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { HitComponent } from "@/algolia/components/HitComponent";
import { singleIndex } from "instantsearch.js/es/lib/stateMappings";
import CustomSearchBox from "@/components/Search/CustomSearchBox";

// TODO: Only populate search results when use types in search box https://github.com/algolia/react-instantsearch/issues/1126
// TODO: Use MUI

// Search client initialization
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY!,
);

// Fallback component for DynamicWidgets
// function FallbackComponent({ attribute }: { attribute: string }) {
//   return <RefinementList attribute={attribute} />;
// }

// Main search component
export default function Search() {
  return (
    <InstantSearchNext
      searchClient={searchClient}
      // TODO: Move this to env variable
      indexName="live_posts"
      routing={{ stateMapping: singleIndex("live_posts") }}
    >
      <Configure hitsPerPage={9} />
      <CustomSearchBox />
      {/*<DynamicWidgets fallbackComponent={FallbackComponent}>*/}
      {/*  /!* Add widgets here *!/*/}
      {/*</DynamicWidgets>*/}
      <InfiniteHits hitComponent={HitComponent} showPrevious={true} />
    </InstantSearchNext>
  );
}
