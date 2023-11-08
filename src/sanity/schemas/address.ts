import { defineField, defineType } from "sanity";

export default defineType({
  name: "address",
  title: "Address",
  type: "document",
  fields: [
    defineField({
      name: "street",
      title: "Street",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "other",
      title: "Other",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "zipCode",
      title: "Zip Code",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
