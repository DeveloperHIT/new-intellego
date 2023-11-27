import { defineField } from "sanity";

export const buttonTextField = defineField({
  name: "buttonText",
  title: "Button Text",
  type: "string",
  description: "The text displayed on the button that links to the page.",
  validation: (Rule) => Rule.required(),
});
