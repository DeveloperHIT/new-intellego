import { StructureBuilder } from "sanity/desk";
import { themeColors } from "@/sanity/studio/desk/site-manager/theme/themeColors";
import { pages } from "@/sanity/studio/desk/site-manager/pages";
import { navigation } from "@/sanity/studio/desk/site-manager/navigation";

/**
 * Defines the siteConfig desk in the Sanity Studio.
 *
 * @param {Object} S - The desk builder object.
 * @returns {Object} The siteConfig desk with lists and children defined.
 */
export const siteConfig = (S: StructureBuilder) =>
  S.listItem()
    .title("Site Config")
    .child(
      S.list()
        .title("Site Config")
        .items([themeColors(S), pages(S), navigation(S)]),
    );
