export const deskStructure = (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Site Config")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings Documents")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Metadata")
                .child(
                  S.document()
                    .schemaType("settings")
                    .documentId("siteSettings"),
                ),
              S.listItem()
                .title("Site Colors")
                .child(S.document().schemaType("colors").documentId("colors")),
              S.listItem()
                .title("Main Navigation")
                .child(
                  S.document()
                    .schemaType("navigation")
                    .documentId("navigation"),
                ),
            ]),
        ),
      S.divider(),
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
                        .title("Posts")
                        .filter('_type == "post" && $authorId == author._ref')
                        .params({ authorId }),
                    ),
                ),
            ]),
        ),
      S.listItem().title("All Insights").child(
        /* Create a list of all posts */
        S.documentList().title("All Insights").filter('_type == "post"'),
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "author",
            "category",
            "colors",
            "openSource",
            "insights",
            "navigation",
            "post",
            "series",
            "settings",
            "tags",
          ].includes(listItem.getId()),
      ),
    ]);
