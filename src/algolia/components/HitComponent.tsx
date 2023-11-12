import Link from "next/link";
import { Box } from "@mui/material";
// import Image from "next/image";
import type { Hit } from "instantsearch.js";
import { Post } from "@/algolia/types/Post";
import { Highlight } from "react-instantsearch";

interface HitComponentProps {
  hit: Hit<Post>;
}

export function HitComponent({ hit }: HitComponentProps) {
  return (
    <Link href={"/"}>
      <Box>
        {/* TODO: Add images to algolia*/}
        {/*<Image src={} alt={} />*/}
        <Highlight hit={hit} attribute="title" />
      </Box>
    </Link>
  );
}
