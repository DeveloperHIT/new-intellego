import { StructureBuilder } from "sanity/desk";
import { Newspaper } from "@mui/icons-material";

export const landing = (S: StructureBuilder) =>
  S.listItem()
    .title("Landing")
    .icon(Newspaper)
    .child(
      S.document().title("Landing").schemaType("landing").documentId("landing"),
    );
