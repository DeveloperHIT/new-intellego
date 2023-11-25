import { StructureBuilder } from "sanity/desk";
import { Palette } from "@mui/icons-material";

export const themeColors = (S: StructureBuilder) =>
  S.listItem()
    .title("Theme Colors")
    .icon(Palette)
    .child(
      S.document()
        .title("Theme Colors")
        .schemaType("themeColors")
        .documentId("themeColors"),
    );
