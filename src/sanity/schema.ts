import { type SchemaTypeDefinition } from "sanity";

// import about from "@/sanity/schemas/about";
// import address from "@/sanity/schemas/address";
import author from "@/sanity/schemas/author";
import blockContent from "@/sanity/schemas/types/blockContent";
import category from "@/sanity/schemas/category";
// import contact from "@/sanity/schemas/contact";
// import emailAddress from "@/sanity/schemas/emailAddress";
// import externalArticles from "@/sanity/schemas/externalArticles";
import insights from "@/sanity/schemas/documents/insights/insights";
// import legal from "@/sanity/schemas/legal";
import navigation from "@/sanity/schemas/documents/settings/navigation";
import openSource from "@/sanity/schemas/types/openSource";
// import phoneNumber from "@/sanity/schemas/phoneNumber";
import post from "@/sanity/schemas/types/post";
// import profiles from "@/sanity/schemas/profiles";
import series from "@/sanity/schemas/types/series";
import siteSettings from "@/sanity/schemas/documents/settings/settings";
// import snippet from "@/sanity/schemas/snippet";
import tags from "@/sanity/schemas/types/tags";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // address,
    // about,
    author,
    blockContent,
    category,
    // contact,
    // emailAddress,
    // externalArticles,
    insights,
    // legal,
    navigation,
    openSource,
    // phoneNumber,
    post,
    // profiles,
    series,
    siteSettings,
    // snippet,
    tags,
  ],
};
