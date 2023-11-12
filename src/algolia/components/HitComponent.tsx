import Link from "next/link";
import { Box } from "@mui/material";
// import Image from "next/image";
import type { Hit } from "instantsearch.js";
import { Post } from "@/algolia/types/Post";
import { Highlight } from "react-instantsearch";

// import { urlFor } from "@/sanity/lib/urlFor";

interface HitComponentProps {
  hit: Hit<Post>;
}

export function HitComponent({ hit }: HitComponentProps) {
  // const { mainImage, title } = hit;

  // @ts-ignore
  // const imageAssetRef = mainImage?.asset?._ref;

  return (
    <Link href={"/"}>
      <Box>
        {/* TODO: Add images to algolia*/}
        {/*<Image*/}
        {/*  src={imageAssetRef ? `${urlFor(imageAssetRef)}` : undefined}*/}
        {/*  alt={title}*/}
        {/*  width={512}*/}
        {/*  height={512}*/}
        {/*/>*/}
        <Highlight hit={hit} attribute="title" />
      </Box>
    </Link>
  );
}
