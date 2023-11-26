import { StructureBuilder } from "sanity/desk";

export const clientTypes = (S: StructureBuilder) =>
  S.listItem()
    .title("Client Types")
    .child(
      S.documentTypeList("clientType")
        .title("Client Types")
        .child((documentId) =>
          S.document().documentId(documentId).schemaType("clientType"),
        ),
    );
