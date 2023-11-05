import { BookIcon } from "@sanity/icons";
import author from "@/sanity/schemas/author-schema";

const insight = {
  name: "insight",
  title: "Insights",
  icon: BookIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: author.name }],
    },
    {
      name: "insightTags",
      title: "Insight Tags",
      type: "tags",
      options: {
        includeFromRelated: "insightTags",
      },
    },
  ],
};

export default insight;
