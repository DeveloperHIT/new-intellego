import { insightsStructure } from "@/sanity/studio/structure/insightsStructure";
import { settingsStructure } from "@/sanity/studio/structure/settingsStructure";

/**
 * Defines the overall desk structure in the Sanity Studio.
 *
 * @param {Object} S - The structure builder object.
 * @returns {Object} The desk structure with lists, items, and children defined.
 */
export const documentTypes = (S) =>
  S.list()
    .title("Base")
    .items([
      settingsStructure(S),
      S.divider(),
      insightsStructure(S),
      S.listItem().title("All Insights").child(
        /* Create a list of all posts */
        S.documentList()
          .title("All Insights")

          .filter('_type == "post"'),
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "about",
            "address",
            "author",
            "category",
            "colors",
            "contact",
            "externalArticles",
            "insights",
            "legal",
            "navigation",
            "openSource",
            "post",
            "profiles",
            "series",
            "settings",
            "snippet",
            "tags",
          ].includes(listItem.getId()),
      ),
    ]);
