import { defineField } from "sanity";

export const pageDescriptionField = defineField({
  name: "pageDescription",
  title: "Sectors Description",
  type: "text",
  description: "The description displayed on the page for SEO and subheader.",
  validation: (Rule) => Rule.required().max(155),
});
