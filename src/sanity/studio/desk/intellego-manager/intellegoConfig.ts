import { StructureBuilder } from "sanity/desk";
import { serviceLines } from "@/sanity/studio/desk/intellego-manager/service-lines/serviceLines";
import { clientTypes } from "@/sanity/studio/desk/intellego-manager/client-types/clientTypes";

export const intellegoConfig = (S: StructureBuilder) =>
  S.listItem()
    .title("Intellego Config")
    .child(
      S.list()
        .title("Intellego Config")
        .items([clientTypes(S), serviceLines(S)]),
    );
