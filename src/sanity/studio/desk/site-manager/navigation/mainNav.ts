import { StructureBuilder } from "sanity/desk";
import { Navigation } from "@mui/icons-material";

export const mainNav = (S: StructureBuilder) =>
  S.listItem()
    .title("Main Navigation")
    .icon(Navigation)
    .child(
      S.document()
        .title("Navigation")
        .schemaType("navigation")
        .documentId("navigation"),
    );
