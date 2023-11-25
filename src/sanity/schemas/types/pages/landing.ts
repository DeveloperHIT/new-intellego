import { defineType, defineField } from "sanity";
import { Newspaper } from "@mui/icons-material";

export default defineType({
  name: "landing",
  title: "Landing Page",
  type: "document",
  icon: Newspaper,
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "array",
      description: "The main title displayed in the hero.",
      of: [{ type: "styledText" }],
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
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "The image displayed in the hero.",
    }),
  ],
});
