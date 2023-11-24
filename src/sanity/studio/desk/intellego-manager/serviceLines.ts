import { StructureBuilder } from "sanity/desk";

export const serviceLines = (S: StructureBuilder) =>
  S.listItem()
    .title("Service Lines")
    .child(
      S.documentTypeList("serviceLine")
        .title("Service Lines")
        .child((documentId) =>
          S.document().documentId(documentId).schemaType("serviceLine"),
        ),
    );
