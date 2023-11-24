import { StructureBuilder } from "sanity/desk";
import { serviceLines } from "@/sanity/studio/desk/intellego-manager/serviceLines";

export const intellegoConfig = (S: StructureBuilder) =>
  S.listItem()
    .title("Intellego Config")
    .child(
      S.list()
        .title("Intellego Config")
        .items([serviceLines(S)]),
    );
