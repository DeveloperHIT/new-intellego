import { useInfiniteHits } from "react-instantsearch";
import { HitComponent } from "@/algolia/components/HitComponent";
import { Hit } from "instantsearch.js";
import { Post } from "@/algolia/types/Post";
import { Button, Grid } from "@mui/material";

interface InfiniteHitsComponentProps {
  props?: any;
}

type PostHit = Hit<Post>;

export default function InfiniteHitsComponent({
  props,
}: InfiniteHitsComponentProps) {
  const { hits, showMore } = useInfiniteHits<PostHit>(props);

  return (
    <Grid container spacing={2}>
      {hits.map((hit) => (
        <HitComponent hit={hit} key={hit.objectID} />
      ))}
      <Grid item xs={12}>
        {/* TODO: How to only show more if there are more to show? */}
        <Button onClick={showMore} variant="outlined" fullWidth>
          Show more
        </Button>
      </Grid>
    </Grid>
  );
}
