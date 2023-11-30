import { defineField } from "sanity";

export const pageTitleField = defineField({
  name: "pageTitle",
  title: "Sectors Title",
  type: "string",
  description: "The main title displayed on the page.",
  validation: (Rule) => Rule.required(),
});
