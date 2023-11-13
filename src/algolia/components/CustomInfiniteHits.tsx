import { useInfiniteHits } from "react-instantsearch";
import { HitComponent } from "@/algolia/components/HitComponent";
import { Hit } from "instantsearch.js";
import { Post } from "@/algolia/types/Post";

interface InfiniteHitsComponentProps {
  props?: any;
}

type PostHit = Hit<Post>;

export default function InfiniteHitsComponent({
  props,
}: InfiniteHitsComponentProps) {
  const { hits } = useInfiniteHits<PostHit>(props);
  console.log(hits);
  return (
    <>
      {hits.map((hit) => (
        <HitComponent hit={hit} key={hit.objectID} />
      ))}
    </>
  );
}
