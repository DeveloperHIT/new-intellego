/**
 * Defines the insights structure in the Sanity Studio.
 *
 * @param {Object} S - The structure builder object.
 * @returns {Object} The insights structure with lists and children defined.
 */
export const insightsStructure = (S) =>
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
            .title("Insights By Author")
            .child(
              S.documentTypeList("author")
                .title("Insights by Author")
                .child((authorId) =>
                  S.documentList()
                    .title("Posts by Author")
                    .filter('_type == "post" && $authorId == author._ref')
                    .params({ authorId }),
                ),
            ),
        ]),
    );
