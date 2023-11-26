import { type SchemaTypeDefinition } from "sanity";

import about from "./singletons/about";
import address from "./singletons/address";
import author from "./singletons/author";
import blockContent from "./singletons/blockContent";
import category from "./singletons/category";
import contact from "./singletons/contact";
import clients from "@/sanity/schemas/singletons/clients";
import clientType from "@/sanity/schemas/singletons/clientType";
import emailAddress from "./singletons/emailAddress";
import externalArticles from "./singletons/externalArticles";
import insights from "./documents/insights/insights";
import legal from "./singletons/legal";
import navigation from "./documents/settings/navigation";
import openSource from "./singletons/openSource";
import phoneNumber from "./singletons/phoneNumber";
import post from "./singletons/post";
import profiles from "./singletons/profiles";
import series from "./singletons/series";
import service from "@/sanity/schemas/singletons/service";
import serviceLine from "@/sanity/schemas/singletons/serviceLine";
import siteSettings from "./documents/settings/settings";
import snippet from "./singletons/snippet";
import tags from "./singletons/tags";
import services from "@/sanity/schemas/singletons/services";
import landing from "@/sanity/schemas/singletons/landing";
import styledText from "@/sanity/schemas/singletons/styledText";
import { themeColors } from "@/sanity/schemas/singletons/themeColors";
import { colorSet } from "@/sanity/schemas/singletons/colorSet";

export const index: { types: SchemaTypeDefinition[] } = {
  types: [
    // Pages
    clients,
    clientType,
    contact,
    landing,
    service,
    serviceLine,
    services,
    // Insights
    author,
    category,
    insights,
    post,
    series,
    tags,
    // Types
    address,
    about,
    blockContent,
    colorSet,
    emailAddress,
    externalArticles,
    legal,
    navigation,
    openSource,
    phoneNumber,
    profiles,
    siteSettings,
    snippet,
    styledText,
    themeColors,
  ],
};
