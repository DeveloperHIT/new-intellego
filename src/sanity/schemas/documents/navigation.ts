import { Navigation } from "@mui/icons-material";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation",
  icon: Navigation,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "navId",
      title: "Navigation Id",
      type: "slug",
    }),
    defineField({
      name: "navItems",
      title: "Navigation Items",
      type: "array",
      of: [{ type: "navigationItem" }],
    }),
  ],
});
