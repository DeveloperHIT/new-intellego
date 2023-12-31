import { StructureBuilder } from "sanity/desk";

// TODO: Add Insights Config so someone can manage categories and tags that are approved for use.

/**
 * Defines the filteredInsights desk in the Sanity Studio.
 *
 * @param {Object} S - The desk builder object.
 * @returns {Object} The filteredInsights desk with lists and children defined.
 */
export const filteredInsights = (S: StructureBuilder) =>
  S.listItem()
    .title("Filtered Insights")
    .child(
      S.list()
        .title("Filters")
        .items([
          S.listItem()
            .title("Insights By Category")
            .child(
              S.documentTypeList("category")
                .title("Insights by Category")
                .child((categoryId) =>
                  S.documentList()
                    .title("Posts")
                    .filter(
                      '_type == "post" && $categoryId in categories[]._ref',
                    )
                    .params({ categoryId }),
                ),
            ),
          S.listItem()
            .title("Insights By AuthorType")
            .child(
              S.documentTypeList("author")
                .title("Insights by AuthorType")
                .child((authorId) =>
                  S.documentList()
                    .title("Posts by AuthorType")
                    .filter('_type == "post" && $authorId == author._ref')
                    .params({ authorId }),
                ),
            ),
        ]),
    );
