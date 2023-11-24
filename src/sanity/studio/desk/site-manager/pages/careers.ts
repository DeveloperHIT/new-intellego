import { StructureBuilder } from "sanity/desk";

export const careers = (S: StructureBuilder) =>
  S.listItem()
    .title("Careers")
    .child(
      S.list()
        .title("Filters")
        .items([
          S.listItem().title("Careers by Location"),
          S.listItem().title("Careers by Service Line"),
        ]),
    );
