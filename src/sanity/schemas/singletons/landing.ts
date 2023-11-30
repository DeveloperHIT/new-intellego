import { defineField, defineType } from "sanity";
import { Newspaper } from "@mui/icons-material";
import image from "@/sanity/schemas/imageType";

export default defineType({
  name: "landing",
  title: "Landing Sectors",
  type: "document",
  icon: Newspaper,
  fields: [
    defineField({
      name: "pageTitle",
      title: "Sectors Title",
      type: "string",
      description: "Sectors title for slug purposes",
    }),
    defineField({
      name: "pageDescription",
      title: "Sectors Description",
      type: "string",
      description: "Sectors description for SEO purposes",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "The image displayed in the hero.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      description: "The main title displayed in the hero.",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "string",
      description: "The subtitle displayed in the hero.",
    }),
    defineField({
      name: "heroButtonText",
      title: "Hero Button Text",
      type: "string",
      description: "The text displayed in the hero button.",
    }),
  ],
});
