import { StructureBuilder } from "sanity/desk";
import { mainNav } from "@/sanity/studio/desk/site-manager/navigation/mainNav";

export const navigation = (S: StructureBuilder) =>
  S.listItem()
    .title("Navigation")
    .child(
      S.list()
        .title("Navigation")
        .items([mainNav(S)]),
    );
