import { StructureBuilder } from "sanity/desk";

/**
 * Defines the settings desk in the Sanity Studio.
 *
 * @param {Object} S - The desk builder object.
 * @returns {Object} The settings desk with lists and children defined.
 */
export const settings = (S: StructureBuilder) =>
  S.listItem()
    .title("Site Config")
    .child(
      S.list()
        .title("Settings Documents")
        .items([
          S.listItem()
            .title("Metadata")
            .child(
              S.document().schemaType("settings").documentId("siteSettings"),
            ),
          S.listItem()
            .title("Site Colors")
            .child(S.document().schemaType("colors").documentId("colors")),
          S.listItem()
            .title("Main Navigation")
            .child(
              S.document().schemaType("navigation").documentId("navigation"),
            ),
        ]),
    );
