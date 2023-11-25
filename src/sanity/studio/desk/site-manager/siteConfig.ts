import { StructureBuilder } from "sanity/desk";
import { contact } from "@/sanity/studio/desk/site-manager/pages/contact";
import { clients } from "@/sanity/studio/desk/site-manager/pages/clients";
import { services } from "@/sanity/studio/desk/site-manager/pages/services";
import { landing } from "@/sanity/studio/desk/site-manager/pages/landing";
import { themeColors } from "@/sanity/studio/desk/site-manager/theme/themeColors";

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
        .items([
          themeColors(S),
          S.listItem()
            .title("Pages")
            .child(
              S.list()
                .title("Pages")
                .items([clients(S), contact(S), landing(S), services(S)]),
            ),
        ]),
    );
