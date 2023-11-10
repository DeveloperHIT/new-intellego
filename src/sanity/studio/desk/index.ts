import { insights } from "./insights";
import { settings } from "./settings";
import { StructureBuilder } from "sanity/desk";

/**
 * Defines the overall desk structure in the Sanity Studio.
 *
 * @param {Object} S - The desk builder object.
 * @returns {Object} The desk structure with lists, items, and children defined.
 */
export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Base")
    .items([
      settings(S),
      S.divider(),
      insights(S),
      S.listItem().title("All Insights").child(
        /* Create a list of all posts */
        S.documentList()
          .title("All Insights")

          .filter('_type == "post"'),
      ),
      S.divider(),
    ]);
