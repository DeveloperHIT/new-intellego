import { StructureBuilder } from "sanity/desk";
import { Home } from "@mui/icons-material";

export const landing = (S: StructureBuilder) =>
  S.listItem()
    .title("Landing")
    .icon(Home)
    .child(
      S.document().title("Landing").schemaType("landing").documentId("landing"),
    );
