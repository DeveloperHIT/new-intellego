import { defineField } from "sanity";

export const pageTitleField = defineField({
  name: "pageTitle",
  title: "Page Title",
  type: "string",
  description: "The main title displayed on the page.",
  validation: (Rule) => Rule.required(),
});
