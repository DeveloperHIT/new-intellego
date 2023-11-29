import { defineField, defineType } from "sanity";

export default defineType({
  name: "engagement",
  title: "Engagement",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
