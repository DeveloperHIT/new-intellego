import { defineField, defineType } from "sanity";

export const addressType = defineType({
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
      name: "pmb",
      title: "PMB/Suite/Other",
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
      description: "Enter the state (e.g., FL).",
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
