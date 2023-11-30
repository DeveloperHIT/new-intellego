import { StructureBuilder } from "sanity/desk";

export const sectors = (S: StructureBuilder) =>
  S.listItem()
    .title("Sectors")
    .child(
      S.documentTypeList("sector")
        .title("Sectors")
        .child((documentId) =>
          S.document().documentId(documentId).schemaType("sector"),
        ),
    );

// TODO: Find things entered into Sanity when showing hidden schemas and delete them
