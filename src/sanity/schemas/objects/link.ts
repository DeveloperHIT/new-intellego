import { defineField, defineType } from "sanity";

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "internalLink",
      title: "Internal Link",
      description: "Select pages for navigation",
      type: "reference",
      to: [{ type: "page" }],
    }),
    defineField({
      name: "externalLink",
      title: "External Link",
      description: "Enter a fully-qualified URL for navigation",
      type: "url",
    }),
  ],
});
