import { defineField, defineType } from "sanity";
import { Newspaper } from "@mui/icons-material";
import image from "@/sanity/schemas/imageType";

export default defineType({
  name: "landing",
  title: "Landing Page",
  type: "document",
  icon: Newspaper,
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      description: "Page title for slug purposes",
    }),
    defineField({
      name: "pageDescription",
      title: "Page Description",
      type: "string",
      description: "Page description for SEO purposes",
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
