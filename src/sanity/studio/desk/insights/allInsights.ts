import { StructureBuilder } from "sanity/desk";

/**
 * Defines the filteredInsights desk in the Sanity Studio.
 *
 * @param {Object} S - The desk builder object.
 * @returns {Object} The filteredInsights desk with lists and children defined.
 */
export const allInsights = (S: StructureBuilder) =>
  S.listItem().title("All Insights").child(
    /* Create a list of all posts */
    S.documentList()
      .title("All Insights")

      .filter('_type == "post"'),
  );
