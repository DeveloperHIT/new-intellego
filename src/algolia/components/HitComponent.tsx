import Link from "next/link";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import type { Hit } from "instantsearch.js";
import { Post } from "@/algolia/types/Post";
import { Highlight } from "react-instantsearch";

import { urlFor } from "@/sanity/lib/urlFor";
import Button from "@mui/material/Button";

interface HitComponentProps {
  hit: Hit<Post>;
}

export function HitComponent({ hit }: HitComponentProps) {
  const { mainImage, slug, title, _id } = hit;

  const imageAssetRef = mainImage?.asset?._ref;
  const imageUrl = imageAssetRef
    ? urlFor(imageAssetRef).url()
    : "assets/images/insights/insight_1.jpg";

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={_id}>
      <Card
        sx={{
          height: 350,
        }}
      >
        <CardMedia sx={{ height: 150 }} image={imageUrl} title={title} />
        <CardContent sx={{ height: 150 }}>
          <Typography variant="h5" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
            <Highlight
              hit={hit}
              attribute="title"
              // className={{ highlighted: "" }}
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">
            <Link href={`insights/${slug}`}>Learn More</Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
