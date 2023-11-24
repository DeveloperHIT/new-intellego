import { StructureBuilder } from "sanity/desk";
import { People } from "@mui/icons-material";

export const clients = (S: StructureBuilder) =>
  S.listItem()
    .title("Clients")
    .icon(People)
    .child(
      S.document().title("Clients").schemaType("clients").documentId("clients"),
    );
