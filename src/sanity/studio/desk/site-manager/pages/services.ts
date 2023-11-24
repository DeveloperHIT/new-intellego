import { StructureBuilder } from "sanity/desk";
import { Folder } from "@mui/icons-material";

export const services = (S: StructureBuilder) =>
  S.listItem()
    .title("Services")
    .icon(Folder)
    .child(
      S.document()
        .title("Services")
        .schemaType("services")
        .documentId("services"),
    );
