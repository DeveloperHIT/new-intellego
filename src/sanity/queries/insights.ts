import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post"] | order(_createdAt desc){
  _createdAt,
  _updatedAt,
  title,
  body,
  isSeries,
  meta_description,
  mainImage,
  slug,
  "tags": tags[]-> {title,slug},
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  "series":series -> {title,slug},
  "category": categories[]-> {title,slug},
  "numberOfCharacters": length(pt::text(body)),
  "estimatedWordCount": round(length(pt::text(body)) / 5),
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  publishedAt,
}`;
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    _createdAt,
    _updatedAt,
    publishedAt,
    title,
    body[]{
        ..., // Include all existing properties of the body field
        _type == "image" => {
            "imageWidth": asset->metadata.dimensions.width,
            "imageHeight": asset->metadata.dimensions.height
        } 
    },
    publishedAt,
    isSeries,
    tags,
    meta_description,
    mainImage,
    "mainImageWidth": mainImage.asset->metadata.dimensions.width,
    "mainImageHeight": mainImage.asset->metadata.dimensions.height,
    slug,
    "tags": tags[]-> {title,slug},
    "author": author -> {name,slug,image,designation,profiles,bio,about},
    "series":series -> {title,slug},
    "category": categories[]-> {title,slug},
    "numberOfCharacters": length(pt::text(body)),
    "estimatedWordCount": round(length(pt::text(body)) / 5),
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
}`;
