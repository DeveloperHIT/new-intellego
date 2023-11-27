import { clients } from "@/sanity/studio/desk/site-manager/pages/clients";
import { contact } from "@/sanity/studio/desk/site-manager/pages/contact";
import { landing } from "@/sanity/studio/desk/site-manager/pages/landing";
import { services } from "@/sanity/studio/desk/site-manager/pages/services";
import { StructureBuilder } from "sanity/desk";

export const pages = (S: StructureBuilder) =>
  S.listItem()
    .title("Pages")
    .child(
      S.list()
        .title("Pages")
        .items([clients(S), contact(S), landing(S), services(S)]),
    );
