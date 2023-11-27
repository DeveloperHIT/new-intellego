import { defineField, defineType } from "sanity";
import { Home } from "@mui/icons-material";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: Home,
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      description: "The main title displayed in the hero.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
