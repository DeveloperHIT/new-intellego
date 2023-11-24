import { StructureBuilder } from "sanity/desk";
import { contact } from "@/sanity/studio/desk/site-manager/pages/contact";
import { clients } from "@/sanity/studio/desk/site-manager/pages/clients";
import { services } from "@/sanity/studio/desk/site-manager/pages/services";

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
          S.listItem()
            .title("Pages")
            .child(
              S.list()
                .title("Pages")
                .items([clients(S), contact(S), services(S)]),
            ),
        ]),
    );
