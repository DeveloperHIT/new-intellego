import { Box, Stack } from "@mui/material";
// import { Highlight } from "react-instantsearch";
import type { Hit } from "instantsearch.js";
import { Post } from "@/algolia/types/Post";
import { urlFor } from "@/sanity/lib/urlFor";
import Image from "@/components/Image";
import TextMaxLine from "@/components/TextMaxLine";
import Link from "next/link";

interface HitComponentProps {
  hit: Hit<Post>;
  viewMode: "grid" | "list";
}

export function HitComponent({ hit, viewMode }: HitComponentProps) {
  const { author, categories, mainImage, slug, title } = hit;

  const imageAssetRef = mainImage?.asset?._ref;
  const imageUrl = imageAssetRef
    ? urlFor(imageAssetRef).url()
    : "assets/images/insights/insight_1.jpg";

  return (
    <>
      {viewMode === "grid" ? (
        <Stack
          sx={{
            position: "relative",
          }}
        >
          <Box sx={{ position: "relative", mb: 2 }}>
            <Image
              // @ts-ignore
              src={imageUrl}
              alt={title}
              sx={{
                flexShrink: 0,
                borderRadius: 1.5,
                bgcolor: "background.neutral",
              }}
            />
          </Box>
          <Stack spacing={0.5}>
            {categories.map((category, index) => (
              <TextMaxLine
                key={index}
                // @ts-ignore
                variant="caption"
                line={1}
                sx={{ color: "text.disabled" }}
              >
                {category.title}
              </TextMaxLine>
            ))}
            <Link href={`insights/${slug}`}>
              <TextMaxLine
                variant="body2"
                line={1}
                sx={{ fontWeight: "fontWeightMedium" }}
              >
                {title}
              </TextMaxLine>
            </Link>
          </Stack>
        </Stack>
      ) : (
        <Stack direction="row" sx={{ position: "relative" }}>
          <Image
            // @ts-ignore
            src={imageUrl}
            alt={title}
            sx={{
              bgcolor: "background.neutral",
              borderRadius: 1.5,
              flexShrink: 0,
              mr: 2,
              width: 160,
            }}
          />
          <Stack spacing={1}>
            <Stack spacing={0.5}>
              {categories.map((category, index) => (
                <TextMaxLine
                  key={index}
                  variant="caption"
                  line={1}
                  sx={{ color: "text.disabled" }}
                >
                  {category.title}
                </TextMaxLine>
              ))}

              <Link href={`insights/${slug}`} color="inherit">
                <TextMaxLine variant="h6" line={1}>
                  {title}
                </TextMaxLine>
              </Link>
            </Stack>

            <TextMaxLine
              variant="body2"
              line={1}
              sx={{ color: "text.secondary" }}
            >
              {author.name}
            </TextMaxLine>
          </Stack>
        </Stack>
      )}
    </>
  );
}
