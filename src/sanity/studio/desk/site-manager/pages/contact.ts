import { StructureBuilder } from "sanity/desk";
import { Email } from "@mui/icons-material";

export const contact = (S: StructureBuilder) =>
  S.listItem()
    .title("Contact")
    .icon(Email)
    .child(
      S.document().title("Contact").schemaType("contact").documentId("contact"),
    );
