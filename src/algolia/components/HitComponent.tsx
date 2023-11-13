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

  return (
    <Grid item xs={12} sm={6} md={4} key={_id}>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={`${urlFor(imageAssetRef)}`}
          title={title}
        />
        <CardContent>
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
    // <Link href={`insights/${slug}`}>
    //   <Box
    //     sx={{
    //       position: { sm: "relative" },
    //       bgcolor: "white",
    //       "&:hover": {
    //         opacity: 0.75,
    //       },
    //       p: 6,
    //     }}
    //   >
    //     {/* TODO: Add images to algolia*/}
    //     <Image
    //       src={`${urlFor(imageAssetRef)}`}
    //       alt={title}
    //       width={512}
    //       height={512}
    //     />
    //     <Box
    //       sx={{
    //         flex: 1,
    //         p: 2,
    //         display: "flex",
    //         flexDirection: "column",
    //         gap: 1,
    //       }}
    //     >
    //       <Typography
    //         variant="subtitle1"
    //         sx={{
    //           mt: 2,
    //           color: "text.secondary",
    //         }}
    //       >
    //         {/* TODO: Use hook */}
    //         <Highlight
    //           hit={hit}
    //           attribute="title"
    //           // className={{ highlighted: "" }}
    //         />
    //       </Typography>
    //     </Box>
    //   </Box>
    // </Link>
  );
}
