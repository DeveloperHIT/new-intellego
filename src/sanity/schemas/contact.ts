import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "reference",
      to: [{ type: "address" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "array", // Assuming you might want to include multiple phone numbers
      of: [{ type: "phoneNumber" }],
    }),
    defineField({
      name: "emailAddress",
      title: "Email Address",
      type: "array", // Assuming you might want to include multiple email addresses
      of: [{ type: "emailAddress" }],
    }),
    // ... Include other fields you may need
  ],
});
