import { defineField, defineType } from "sanity";

export default defineType({
  name: "emailAddress",
  title: "Email Address",
  type: "object",
  fields: [
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
      description:
        "A short description of this email (e.g., Work, Support, etc.)",
    }),
  ],
});
