import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteConfig",
  title: "Site Config",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Site URL",
      type: "url",
      description: "The root url of the site",
    }),
    defineField({
      name: "mainNav",
      title: "Main Navigation",
      description: "The main navigation for the site",
      type: "array",
      of: [{ type: "page" }],
    }),
  ],
});
