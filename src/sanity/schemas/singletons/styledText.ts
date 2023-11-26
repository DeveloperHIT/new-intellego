import { defineField, defineType } from "sanity";

export default defineType({
  name: "styledText",
  title: "Styled Text",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
    }),
    defineField({
      name: "capitalize",
      title: "Capitalize",
      type: "boolean",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "color",
    }),
  ],
});
