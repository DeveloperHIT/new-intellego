import { type SchemaTypeDefinition } from "sanity";

import about from "./about";
import { addressType } from "@/sanity/schemas/addressType";
import author from "./author";
import blockContent from "./blockContent";
import category from "./category";
import { colorSet } from "@/sanity/schemas/colorSet";
import contact from "./singletons/contact";
import clients from "@/sanity/schemas/singletons/clients";
import clientType from "@/sanity/schemas/clientType";
import emailAddress from "./emailAddress";
import externalArticles from "./externalArticles";
import insights from "./insights";
import landing from "@/sanity/schemas/singletons/landing";
import legal from "./legal";
import link from "@/sanity/schemas/objects/link";
import navigation from "./documents/navigation";
import navItem from "./objects/navItem";
import openSource from "./openSource";
import phoneNumber from "./phoneNumber";
import post from "./post";
import profiles from "./profiles";
import series from "./series";
import service from "@/sanity/schemas/service";
import serviceLine from "@/sanity/schemas/serviceLine";
import services from "@/sanity/schemas/singletons/services";
import siteConfig from "@/sanity/schemas/siteConfig";
import snippet from "./snippet";
import styledText from "@/sanity/schemas/styledText";
import tags from "./tags";
import { themeColors } from "@/sanity/schemas/themeColors";
import { pageType } from "@/sanity/schemas/pageType";
import { heroType } from "@/sanity/schemas/heroType";
import { promotionType } from "@/sanity/schemas/promotionType";
import { textWithIllustrationType } from "@/sanity/schemas/textWithIllustration";
import { formType } from "@/sanity/schemas/formType";
import { videoType } from "@/sanity/schemas/videoType";
import { recentInsightsType } from "@/sanity/schemas/recentInsightsType";
import { imageGalleryType } from "@/sanity/schemas/imageGallery";
import settings from "@/sanity/schemas/singletons/settings";
import image from "@/sanity/schemas/imageType";
import engagement from "@/sanity/schemas/engagement";
import sector from "@/sanity/schemas/sector";

export const index: { types: SchemaTypeDefinition[] } = {
  types: [
    navigation,
    link,
    navItem,
    clients,
    clientType,
    contact,
    engagement,
    landing,
    sector,
    service,
    serviceLine,
    services,
    author,
    category,
    insights,
    post,
    series,
    tags,
    settings,
    about,
    blockContent,
    colorSet,
    emailAddress,
    externalArticles,
    legal,
    openSource,
    phoneNumber,
    profiles,
    siteConfig,
    snippet,
    styledText,
    themeColors,
    pageType,
    heroType,
    promotionType,
    textWithIllustrationType,
    formType,
    videoType,
    recentInsightsType,
    addressType,
    image,
    imageGalleryType,
  ],
};
