import { defineField, defineType } from "sanity";

export default defineType({
  name: "phoneNumber",
  title: "Phone Number",
  type: "object",
  fields: [
    defineField({
      name: "number",
      type: "string",
      title: "Number",
      validation: (Rule) =>
        Rule.required().regex(
          /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g,
          "Please enter a valid phone number",
        ),
    }),
  ],
});
