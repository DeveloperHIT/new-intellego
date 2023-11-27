import { groq } from "next-sanity";

export const getHeroQuery = groq`*[_type == "landing"]{
   pageTitle,
   pageDescription,
   "heroImageUrl": heroImage.asset->url,  
   "heroImageAlt": heroImage.alt,
   heroTitle,
   heroSubtitle,
   heroButtonText
}`;
