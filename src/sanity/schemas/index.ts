import { type SchemaTypeDefinition } from "sanity";

import about from "@/sanity/schemas/types/about";
import address from "@/sanity/schemas/types/address";
import author from "@/sanity/schemas/types/author";
import blockContent from "@/sanity/schemas/types/blockContent";
import category from "@/sanity/schemas/types/category";
import contact from "@/sanity/schemas/types/contact";
import emailAddress from "@/sanity/schemas/types/emailAddress";
import externalArticles from "@/sanity/schemas/types/externalArticles";
import insights from "@/sanity/schemas/documents/insights/insights";
import legal from "@/sanity/schemas/types/legal";
import navigation from "@/sanity/schemas/documents/settings/navigation";
import openSource from "@/sanity/schemas/types/openSource";
import phoneNumber from "@/sanity/schemas/types/phoneNumber";
import post from "@/sanity/schemas/types/post";
import profiles from "@/sanity/schemas/types/profiles";
import series from "@/sanity/schemas/types/series";
import siteSettings from "@/sanity/schemas/documents/settings/settings";
import snippet from "@/sanity/schemas/types/snippet";
import tags from "@/sanity/schemas/types/tags";

export const index: { types: SchemaTypeDefinition[] } = {
  types: [
    address,
    about,
    author,
    blockContent,
    category,
    contact,
    emailAddress,
    externalArticles,
    insights,
    legal,
    navigation,
    openSource,
    phoneNumber,
    post,
    profiles,
    series,
    siteSettings,
    snippet,
    tags,
  ],
};
