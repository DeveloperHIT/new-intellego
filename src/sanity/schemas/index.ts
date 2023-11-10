import { type SchemaTypeDefinition } from "sanity";

import about from "./types/about";
import address from "./types/address";
import author from "./types/author";
import blockContent from "./types/blockContent";
import category from "./types/category";
import contact from "./types/contact";
import emailAddress from "./types/emailAddress";
import externalArticles from "./types/externalArticles";
import insights from "./documents/insights/insights";
import legal from "./types/legal";
import navigation from "./documents/settings/navigation";
import openSource from "./types/openSource";
import phoneNumber from "./types/phoneNumber";
import post from "./types/post";
import profiles from "./types/profiles";
import series from "./types/series";
import siteSettings from "./documents/settings/settings";
import snippet from "./types/snippet";
import tags from "./types/tags";

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
