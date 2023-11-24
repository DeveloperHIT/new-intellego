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
      description: "Enter the street address (e.g., 382 NE 191st St).",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pmb",
      title: "PMB Number",
      type: "string",
      description:
        "Enter the Private Mailbox number if applicable (e.g., PMB 59304).",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      description: "Enter the city (e.g., Miami).",
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
      description: "Enter the ZIP code (e.g., 33179-3899).",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
